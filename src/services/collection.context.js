import { createContext, useState } from "react";

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);

  const addToCollection = (dog) => {
    setCollection((prevCollection) => [...new Set([...prevCollection, dog])]);
  };
  return (
    <CollectionContext.Provider
      value={{
        collection,
        addToCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
