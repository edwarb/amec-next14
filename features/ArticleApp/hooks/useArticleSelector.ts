import {
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
} from "firebase/firestore";
import { getCollectionFS } from "lib/firebase/utils/firestoreUtils";
import { useEffect, useState } from "react";
import { Article } from "types/Article";

const LIMIT = 10;
export function useArticleSelector({ currentPage }: { currentPage: number }) {
  const [stateArticle, setStateArticle] = useState<{
    result: Article[];

    startKey: any;
    prevKey: any;
    lastVisible: any;
  }>({
    result: [],
    prevKey: null,

    startKey: null,
    lastVisible: null,
  });

  const q = query(
    getCollectionFS("articles"),
    orderBy("created", "desc"),
    limit(LIMIT + 1),
  );

  const [savePosition, setSavePosition] = useState<any[]>([]);

  useEffect(() => {
    getDocs(q).then((snapshot) => {
      const data: any[] = [];
      for (const docObject of snapshot.docs) {
        if (docObject.exists()) {
          data.push({ id: docObject.id, ...(docObject.data() as any) });
        }
      }

      setStateArticle({
        result: data.slice(0, LIMIT),
        prevKey: null,

        lastVisible: snapshot.docs[snapshot.docs.length - 2],
        startKey: snapshot.docs[0],
      });
    });
  }, []);

  function handleNext() {
    const newPrevKey = stateArticle.prevKey;
    setSavePosition([...savePosition, newPrevKey]);
    const newQ = query(q, startAfter(stateArticle.lastVisible));

    getDocs(newQ).then((snapshot) => {
      const data: any[] = [];
      for (const docObject of snapshot.docs) {
        if (docObject.exists()) {
          data.push({ id: docObject.id, ...(docObject.data() as any) });
        }
      }

      setStateArticle({
        result: data.slice(0, LIMIT),
        prevKey: snapshot.docs[0],

        startKey: snapshot.docs[0],
        lastVisible: snapshot.docs[snapshot.docs.length - 2],
      });
    });
  }

  function handlePrev() {
    const positionStart = savePosition[savePosition.length - 1];
    setSavePosition(savePosition.slice(0, -1));

    const newQ =
      positionStart === null ? query(q) : query(q, startAt(positionStart));

    getDocs(newQ).then((snapshot) => {
      const data: any[] = [];
      for (const docObject of snapshot.docs) {
        if (docObject.exists()) {
          data.push({ id: docObject.id, ...(docObject.data() as any) });
        }
      }

      setStateArticle({
        result: data.slice(0, LIMIT),
        prevKey: positionStart === null ? null : snapshot.docs[0],

        startKey: snapshot.docs[0],
        lastVisible: snapshot.docs[snapshot.docs.length - 2],
      });
    });
  }

  return {
    result: stateArticle.result,
    prevKey: savePosition,
    handleNext,
    handlePrev,
  };
}
