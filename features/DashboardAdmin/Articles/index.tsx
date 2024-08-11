import LoginDashboard from "components/layouts/Login/LoginDashboard";
import { Button } from "components/ui/button";
import { Card } from "components/ui/card";

import { useToast } from "components/ui/use-toast";
import { Unsubscribe, onSnapshot, query, where } from "firebase/firestore";
import {
  deleteDocFS,
  getCollectionFS,
} from "lib/firebase/utils/firestoreUtils";
import { useEffect, useRef, useState } from "react";
import { Article } from "types/Article";
import DrawerArticle from "./components/DrawerArticle";
import { getArticlesLoadMore } from "./utils";
import CardCustom from "./components/CardCustom";

function DashboardAdminHomepageApp() {
  const { toast } = useToast();

  const [state, setState] = useState<Article[]>([]);
  const [hasMoreData, setHasMoreData] = useState(false);
  const isInitialzed = useRef(false);
  const refStart = useRef<any>(null);
  const refLast = useRef<any>(null);

  const fsRealtime = useRef<Unsubscribe | null>(null);

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (!isInitialzed.current) {
      isInitialzed.current = true;
      fetchDataArticle();
    }
  }, []);

  useEffect(() => {
    const q = query(
      getCollectionFS("articles"),
      where("created", ">=", new Date()),
    );

    fsRealtime.current = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added" && change.doc.exists()) {
          const newData = { id: change.doc.id, ...change.doc.data() };
          setState((prev: any) => {
            if (!!prev.find((prevVal: any) => prevVal.id === newData.id)) {
              return prev.map((prevVal: any) => {
                if (prevVal.id === newData.id) {
                  return newData;
                }
                return prevVal;
              });
            }

            return [newData, ...prev];
          });
        }
      });
    });

    return () => {
      if (fsRealtime.current) {
        fsRealtime.current();
        fsRealtime.current = null;
      }
    };
  }, []);

  function fetchDataArticle() {
    getArticlesLoadMore({ lastDoc: refLast.current }).then((resp) => {
      setState((prev: any) => {
        return [...prev, ...resp.result];
      });
      setHasMoreData(resp.hasMoreData);

      if (!refStart.current && !!resp.result?.length) {
        refStart.current = resp.result[0];
      }

      refLast.current = resp.lastVisible;
    });
  }

  function handleAddArticle() {
    setOpenDrawer(true);
  }
  function handleEdit(article: Article) {
    setOpenDrawer(true);
    setSelectedArticle(article);
  }

  function handleDelete(id: string) {
    deleteDocFS(`articles/${id}`)
      .then(() => {
        setState((prev) => {
          return prev.filter((docArticle) => docArticle.id !== id);
        });
        toast({
          description: "Article Deleted",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <LoginDashboard title={"Articles"}>
      <Card className="flex flex-col items-end gap-4 bg-white p-8">
        <Button onClick={handleAddArticle}>{`Add Article`}</Button>
        <section className="grid grid-cols-3 gap-4 self-stretch">
          {!!state?.length &&
            state.map((article) => {
              return (
                <CardCustom
                  key={article.id}
                  article={article}
                  onClick={() => {
                    handleEdit(article);
                  }}
                  onDelete={() => {
                    handleDelete(article.id);
                  }}
                />
              );
            })}
        </section>
        {hasMoreData && (
          <Button onClick={fetchDataArticle}>{`Load More`}</Button>
        )}
      </Card>

      <DrawerArticle
        open={openDrawer}
        article={selectedArticle}
        onClose={() => {
          setOpenDrawer(false);
          setSelectedArticle(null);
        }}
      />
    </LoginDashboard>
  );
}

export default DashboardAdminHomepageApp;
