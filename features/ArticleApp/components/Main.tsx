import { useToast } from "components/ui/use-toast";
import { getErrorMessage } from "lib/utils";
import { useEffect, useState } from "react";
import { Article } from "types/Article";
import { useArticleSelector } from "../hooks/useArticleSelector";
import { getCountArticle } from "../services";
import { ArticleList } from "./ArticleCard";
import ArticleDetail from "./ArticleDetail";
import PaginationSimple from "./PaginationSimple";

function Main() {
  const [detail, setDetail] = useState<Article | null>(null);
  const [totalPage, setTotalPage] = useState(0);

  const { result, prevKey, handleNext, handlePrev } = useArticleSelector({
    currentPage: 1,
  });
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
      <div className="grid grid-cols-3 gap-3">
        {result.map((post) => {
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
        currentPage={prevKey.length}
        itemCount={totalPage}
        pageSize={10}
        disabledNext={prevKey.length === totalPage / 10}
        disabledPrev={prevKey.length === 0}
        onSelectPrev={handlePrev}
        onSelectNext={handleNext}
      />
    </div>
  );
}

export default Main;
