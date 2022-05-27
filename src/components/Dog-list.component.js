import React, { useRef, useCallback, useContext } from "react";
import { CollectionContext } from "../services/collection.context";
import { DogsContext } from "../services/dogs.context";
import { MdBookmark } from "react-icons/md";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

export const DogList = ({ dogs, isCollection = false }) => {
  const { addToCollection, collection } = useContext(CollectionContext);
  const { fetchDogs, loading, error } = useContext(DogsContext);

  const observer = useRef();

  const lastDogElement = useCallback(
    (node) => {
      if (loading) return;
      console.log("last dog element..");
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting) {
          fetchDogs();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, fetchDogs]
  );

  const isExist = (dog) => collection.some((c) => c === dog);

  if (error) {
    return (
      <div className="flex justify-center h-screen">
        <p className="m-auto text-xl text-red-400">{error.message}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <p className="m-auto text-xl">
          <Dots />
        </p>
      </div>
    );
  }

  if (!dogs.length && !loading) {
    return (
      <div className="flex justify-center h-screen">
        <p className="m-auto text-xl">NO DATA FOUND.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {dogs?.map((dog, index) => {
        return (
          <div
            onClick={() => addToCollection(dog)}
            key={dog}
            className="m-10 rounded-2xl overflow-hidden flex bg-slate-100 relative border-2 border-black w-52 h-52"
          >
            {isExist(dog) && (
              <div className="w-auto rounded-full absolute right-3 top-3 bg-white flex justify-center p-2">
                <div>
                  <MdBookmark size={25} />
                </div>
              </div>
            )}
            {!isCollection && dogs.length === index + 1 ? (
              <img
                className="cursor-pointer"
                ref={lastDogElement}
                src={dog}
                alt={dog}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <img
                className="cursor-pointer"
                src={dog}
                alt={dog}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
