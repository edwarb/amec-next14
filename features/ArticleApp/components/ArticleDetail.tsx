import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import sanitize from "sanitize-html";
import type { Article } from "types/Article";

import draftToHtml from "draftjs-to-html";
import { Button } from "components/ui/button";
import { useEffect } from "react";

function getHtml(str?: string) {
  if (!str) return null;

  return draftToHtml(JSON.parse(str));
}

interface Props extends Article {
  onToList: () => void;
}
export default function ArticleDetail(props: Props) {
  const { image, title, desc, onToList } = props;
  const htmlParsed = getHtml(desc);

  const sanititzed = sanitize(htmlParsed);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="relative bg-white px-6 py-32 lg:px-8">
        <div
          className="-z-9 absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff89] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <Button
            onClick={onToList}
            className="z-100 relative cursor-pointer text-sm font-semibold leading-6"
          >
            {`Back to list`}
          </Button>
          <figure className="mt-16">
            <Image
              width={0}
              height={0}
              className="aspect-video w-full rounded-xl bg-gray-50 object-cover"
              src={image}
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              {`Ilustrasi  ${title}`}
            </figcaption>
          </figure>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <div
            className="sanitized-html mt-10 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: sanititzed }}
          ></div>
        </div>
      </div>
    </>
  );
}
