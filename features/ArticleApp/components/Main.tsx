import { getArticles } from "features/DashboardAdmin/Articles/utils";
import { getCollectionFS } from "lib/firebase/utils/firestoreUtils";
import { useEffect, useState } from "react";
import wrapPromise from "shared/utils/wrapPromise";
import { Article } from "types/Article";

function Main() {
  const [state, setState] = useState<Article[]>([]);
  useEffect(() => {
    getArticles({ lastDoc: null }).then((resp) => {
      setState(resp.result as Article[]);
    });
  }, []);
  //   const article = wrapPromise(getArticles({ lastDoc: null }));

  console.log({ state });
  return <div>div</div>;
}

export default Main;
