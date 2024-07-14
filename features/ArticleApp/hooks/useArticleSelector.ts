import {
  endBefore,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { getCollectionFS } from "lib/firebase/utils/firestoreUtils";
import { useState } from "react";

const LIMIT = 10;
export function useArticleSelector({
  startDoc,
  lastDoc,
}: Partial<{
  startDoc: any;
  lastDoc: any;
}>) {
  const [result, setResult] = useState([]);
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

  return result;
}
