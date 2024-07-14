import {
  endBefore,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { getCollectionFS } from "lib/firebase/utils/firestoreUtils";

const LIMIT = 10;
export function getArticles({
  startDoc,
  lastDoc,
}: Partial<{
  startDoc: any;
  lastDoc: any;
}>) {
  let q = query(getCollectionFS("articles"), orderBy("created", "desc"));

  if (startDoc) {
    q = query(q, endBefore(startDoc));
  }
  if (lastDoc) {
    q = query(q, startAfter(lastDoc));
  }

  q = query(q, limit(LIMIT + 1));

  return getDocs(q).then((snapshot) => {
    const data: any[] = [];
    for (const docObject of snapshot.docs) {
      if (docObject.exists()) {
        data.push({ id: docObject.id, ...(docObject.data() as any) });
      }
    }

    return {
      result: data.slice(0, LIMIT),
      lastVisible: snapshot.docs[snapshot.docs.length - 2],
      endResult: snapshot.docs[snapshot.docs.length - 1],
      startResult: snapshot.docs[0],
    };
  });
}
export function getArticlesLoadMore({
  startDoc,
  lastDoc,
}: Partial<{
  startDoc: any;
  lastDoc: any;
}>) {
  let q = query(
    getCollectionFS("articles"),
    orderBy("created", "desc"),
    limit(LIMIT + 1),
  );

  if (startDoc) {
    q = query(q, endBefore(startDoc));
  }
  if (lastDoc) {
    q = query(q, startAfter(lastDoc));
  }

  return getDocs(q).then((snapshot) => {
    const data: any[] = [];
    for (const docObject of snapshot.docs) {
      if (docObject.exists()) {
        data.push({ id: docObject.id, ...(docObject.data() as any) });
      }
    }

    return {
      result: data.slice(0, LIMIT),
      hasMoreData: data.length > LIMIT,
      lastVisible: snapshot.docs[snapshot.docs.length - 2],
    };
  });
}
