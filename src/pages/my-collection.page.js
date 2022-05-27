import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CollectionContext } from "../services/collection.context";
import { DogList } from "../components/Dog-list.component";

export const MyCollection = () => {
  const { collection } = useContext(CollectionContext);
  console.log(collection, "collection");
  return (
    <div className="container m-auto">
      <Link to="/">
        <button className="rounded-full bg-black text-white p-4 m-5 fixed z-10 left-5 top-5">
          <MdKeyboardArrowLeft size={30} />
        </button>
      </Link>
      <DogList dogs={collection} isCollection={true} />
    </div>
  );
};
