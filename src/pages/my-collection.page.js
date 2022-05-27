import React, { useContext } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CollectionContext } from "../services/collection.context";
import { DogList } from "../components/Dog-list.component";
import { Button } from "../UI/Button.component";

export const MyCollection = () => {
  const { collection } = useContext(CollectionContext);
  return (
    <div className="container m-auto">
      <Button navigateTo={"/"} direction="left">
        <MdKeyboardArrowLeft size={30} />
      </Button>
      <DogList dogs={collection} isCollection={true} />
    </div>
  );
};
