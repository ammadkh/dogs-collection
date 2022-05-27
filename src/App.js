import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdCollectionsBookmark } from "react-icons/md";
import { DogsContext } from "./services/dogs.context";
import { DogList } from "./components/Dog-list.component";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

function App() {
  const { dogs, loading } = useContext(DogsContext);

  return (
    <div className="container m-auto flex justify-center h-screen">
      {loading && (
        <div className="m-auto">
          <Dots />
        </div>
      )}
      {!loading && (
        <>
          <Link to="/collection">
            <button className="rounded-full bg-black text-white p-4 m-5 fixed z-10 right-5 top-5 flex">
              <MdCollectionsBookmark size={30} />
              <MdKeyboardArrowRight size={30} />
            </button>
          </Link>
          <DogList dogs={dogs} />
        </>
      )}
    </div>
  );
}

export default App;
