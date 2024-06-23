"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "components/ui/drawer";

import dynamic from "next/dynamic";

import { useEffect, useMemo, useRef, useState } from "react";

import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { Card } from "components/ui/card";
import { Datepicker } from "components/ui/datepicker";
import { Input } from "components/ui/input";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Button } from "components/ui/button";
import { useUserFirebase } from "lib/firebase/hooks/useUser";
import { Controller, useForm, useWatch } from "react-hook-form";

import { LoadingButton } from "components/ui/loadingbutton";
import { useToast } from "components/ui/use-toast";
import { format } from "date-fns";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { firebaseStorage } from "lib/firebase/clientApp";
import { getCollectionFS, getDocFS } from "lib/firebase/utils/firestoreUtils";
import { useUploadFile } from "react-firebase-hooks/storage";
import sanitize from "sanitize-html";
import { YYYYMMDD } from "shared/utils/Date/constants";
import type { Article } from "types/Article";
import Image from "next/image";

const Editor: any = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false },
);

interface DProps {
  open?: boolean;
  article: Article | null;
  onClose: (isCreateNew?: boolean) => void;
}

interface IForm {
  author?: string;
  title: string;
  editorState: any;
  date: Date;
  thumbnail: FileList | null;
}

function getStateEditor(str?: string) {
  if (!str) return EditorState.createEmpty();

  const contentState = convertFromRaw(JSON.parse(str));
  return EditorState.createWithContent(contentState);
}

function DrawerArticle(props: DProps) {
  const { open, article, onClose } = props;

  const [loading, setLoading] = useState(false);
  const [uploadFile] = useUploadFile();
  const { toast } = useToast();

  const todayRef = useRef(new Date());

  const [user] = useUserFirebase();

  const {
    control,
    register,
    reset: resetForm,
    setValue,
    handleSubmit,
  } = useForm<IForm>();
  useEffect(() => {
    resetForm({
      author: article?.author || user?.displayName || user?.email || "Author",
      title: article?.title,
      editorState: getStateEditor(article?.desc),
      date: article?.date
        ? new Date(...(article.date.split("-") as []))
        : new Date(),
      thumbnail: null as FileList | null,
    });
  }, [open]);

  const thumbnailRef = register("thumbnail");

  const [thumbnailForm, dateForm, editorStateForm] = useWatch({
    control,
    name: ["thumbnail", "date", "editorState"],
  });

  const dataSrcThumbnail = useMemo(() => {
    if (!thumbnailForm || !thumbnailForm?.[0]) return article?.image || null;

    return URL.createObjectURL(thumbnailForm[0]);
  }, [thumbnailForm, article]);

  async function uploadImage(docRef: any, imageFile: File) {
    const refStorage = storageRef(firebaseStorage, `images/${docRef.id}`);
    const filed = await uploadFile(refStorage, imageFile, {
      contentType: "image/jpeg",
    });
    if (!filed || !filed.ref) {
      throw Error("Upload Image Gagal");
    }

    const downloadURL = await getDownloadURL(filed.ref);

    return downloadURL;
  }
  async function onSubmit(formValue: IForm) {
    setLoading(true);

    try {
      const editor = formValue.editorState.getCurrentContent();
      const rawEditor = convertToRaw(editor);
      const textDecs = JSON.stringify(rawEditor);
      let textParag = sanitize(draftToHtml(rawEditor), { allowedTags: [] })
        .replace("\n", " ")
        .replace("\\", "")
        .substring(0, 101);

      if (textParag.length > 100) {
        textParag += "...";
      }

      const docRef = article?.id
        ? getDocFS(`articles/${article.id}`)
        : doc(getCollectionFS("articles"));

      const imageFile = formValue.thumbnail?.[0];
      if (!article?.id && !imageFile) {
        throw Error("Upload Image Gagal");
      }

      let downloadURL;
      if (article?.id && !imageFile) {
        downloadURL = article.image;
      } else if (!!imageFile) {
        downloadURL = await uploadImage(docRef, imageFile);
      } else {
        throw Error("Image not found");
      }

      try {
        const docData = {
          active: "yes",
          author: formValue.author || "Admin",
          created: serverTimestamp(),
          date: format(formValue.date, YYYYMMDD),
          desc: textDecs,
          parag: textParag,
          title: formValue.title,
          image: downloadURL,
        };
        await setDoc(docRef, docData);
        setLoading(false);
        toast({
          description: "Article telah terupdate",
        });
        onClose(true);
      } catch (err) {
        throw Error("firestore not update");
      }
    } catch (err) {
      // no-op
      console.log({ err });
    } finally {
      setLoading(false);
    }
  }

  const required = {
    required: "Required",
  };

  return (
    <Drawer
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
      onClose={onClose}
    >
      <DrawerContent className="h-[95vh]">
        <DrawerHeader>
          <DrawerTitle>{article?.title || "Create New Article"}</DrawerTitle>
        </DrawerHeader>

        <Card className="flex flex-row gap-x-4 px-20 py-4">
          <section className="grid grid-flow-col grid-cols-[min-content] grid-rows-2 gap-8">
            <div>
              <label>{`Author`}</label>
              <Input {...register("author", required)} style={{ width: 300 }} />
            </div>

            <div>
              <label>{`Title`}</label>
              <Input {...register("title", required)} style={{ width: 400 }} />
            </div>

            <div>
              <label style={{ display: "block" }}>{`Date`}</label>
              <Controller
                rules={{
                  required: true,
                }}
                name={"date"}
                control={control}
                render={({ field }) => (
                  <Datepicker
                    fromDate={article?.date ? undefined : todayRef.current}
                    defaultMonth={dateForm}
                    label=""
                    onChange={field.onChange}
                    value={field.value}
                    inputStyle={{ width: 300 }}
                  />
                )}
              ></Controller>
            </div>

            <div>
              <Controller
                rules={{
                  validate: {
                    requiredIf: (file) => {
                      return !!article?.id || !!file || "Required";
                    },
                  },
                }}
                name={"thumbnail"}
                control={control}
                render={({ fieldState }) => (
                  <div>
                    <div>
                      <label>{`Thumbnail`}</label>
                      <Input
                        {...thumbnailRef}
                        type={"file"}
                        style={{ width: 300 }}
                      />
                      <Button
                        disabled={!thumbnailForm}
                        variant={"destructive"}
                        onClick={() => {
                          setValue("thumbnail", null);
                        }}
                      >
                        {`reset`}
                      </Button>
                    </div>
                    {fieldState.error && (
                      <p className={"text-sm font-medium text-destructive"}>
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </section>
          <section>
            <span>{`Image Placeholder`}</span>
            <Card className="p-4">
              <>
                {dataSrcThumbnail && (
                  <Image
                    alt={"preview-image"}
                    style={{ width: 100, height: 100 }}
                    src={dataSrcThumbnail}
                    width={100}
                    height={100}
                  />
                )}{" "}
                {!dataSrcThumbnail && (
                  <div style={{ width: 100, height: 100 }}></div>
                )}
              </>
            </Card>
          </section>

          <LoadingButton
            loading={loading}
            className="ml-auto"
            onClick={handleSubmit(onSubmit)}
          >
            {`Submit`}
          </LoadingButton>
        </Card>

        <Card className="h-[400px] overflow-auto px-4">
          <Editor
            editorState={editorStateForm}
            onEditorStateChange={(value: any) => {
              setValue("editorState", value);
            }}
            toolbarClassName="sticky top-0 z-50 !justify-center"
            editorClassName="bg-white mt-6 shadow-lg w-3/4 lg:w-3/5 mx-auto p-10 border mb-10 min-h-screen"
          />
        </Card>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerArticle;
