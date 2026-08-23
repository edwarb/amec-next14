import ArticleApp from "features/ArticleApp";
import { createGetStaticProps } from "lib/i18n";

function ArticlePage() {
  return (
    <>
      <ArticleApp />
    </>
  );
}

export default ArticlePage;


export const getStaticProps = createGetStaticProps();
