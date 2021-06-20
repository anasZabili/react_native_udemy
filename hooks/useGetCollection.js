import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection, query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");
  useEffect(() => {
    if (query) {
      collectionRef = collectionRef.where(...query);
    }

    return () => {
      cleanup;
    };
  }, [query, collection]);

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update values
      setDocuments(results);
      setError(null);
    },
    (err) => {
      console.log(err.message);
      setDocuments(null);
      setError("could not fetch the data");
    }
  );

  // watchEffect((onInvalidate) => {
  //   onInvalidate(() => unsub());
  // });

  return { error, documents };
};

export default getCollection;
