import { useToast } from "components/ui/use-toast";
import { getArticles } from "features/DashboardAdmin/Articles/utils";
import { useEffect, useState } from "react";
import { Article } from "types/Article";
import { getCountArticle } from "../services";
import { ArticleList } from "./ArticleCard";
import ArticleDetail from "./ArticleDetail";
import PaginationSimple from "./PaginationSimple";
import { getErrorMessage } from "lib/utils";

function Main() {
  const [state, setState] = useState<Article[]>([]);
  const [detail, setDetail] = useState<Article | null>(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { toast } = useToast();

  async function fetchSum() {
    try {
      const sum = (await getCountArticle()) as any;
      setTotalPage(sum._data?.count.integerValue);
    } catch (err) {
      toast({
        description: getErrorMessage(err) || "Error Getting Articles",
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    fetchSum();
  }, []);

  useEffect(() => {
    getArticles({ startDoc: null })
      .then((resp) => {
        console.log({ resp });
        setState(resp.result as Article[]);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          description: err?.message || "Error Fetching Articles",
        });
      });
  }, [page]);

  if (detail)
    return (
      <ArticleDetail
        onToList={() => {
          setDetail(null);
        }}
        {...detail}
      />
    );

  return (
    <div className="grid-content">
      {!detail && (
        <>
          <div className="grid grid-cols-3 gap-3">
            {state.map((post) => {
              return (
                <ArticleList
                  key={post.id}
                  {...post}
                  onClick={(article) => {
                    setDetail(article);
                  }}
                />
              );
            })}
          </div>
          <PaginationSimple
            currentPage={page}
            itemCount={totalPage}
            pageSize={10}
            onSelectNewPage={(newPage) => {
              setPage(newPage);
            }}
          />
        </>
      )}
      {detail && <div>{JSON.stringify(detail)}</div>}
    </div>
  );
}

export default Main;
