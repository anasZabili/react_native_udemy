import { useState } from "react";
import { projectFirestore } from "../firebase/config";

// Add a document contain data in firebase collection
// return
// addDocument, the function to add the document containing data,
// id,the id of the document added (null by default when no document are added)
// isLoading, the state (wich is true when the adding happen false in the opposite case)
// error
const useAddDocument = (collection, callBackSuccess, callBackError) => {
  if (!callBackSuccess) {
    callBackSuccess = () =>
      console.log("ajout effectué dans la collection " + collection);
  }
  if (!callBackError) {
    callBackError = () =>
      console.log("ajout échoué dans la collection " + collection);
  }
  const [id, setId] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  // function that trigger the adding into the firebase collection
  const addDocument = (data) => {
    setIsloading(true);
    projectFirestore
      .collection(collection)
      .add(data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setId(docRef.id);
        setIsloading(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        setError(null);
        setIsloading(false);
      });
  };
  return [addDocument, id, isLoading, error];
};

export default useAddDocument;
