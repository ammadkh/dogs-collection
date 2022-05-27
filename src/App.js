import { useContext } from "react";
import { MdKeyboardArrowRight, MdCollectionsBookmark } from "react-icons/md";
import { DogsContext } from "./services/dogs.context";
import { DogList } from "./components/Dog-list.component";
import { Button } from "./UI/Button.component";

function App() {
  const { dogs } = useContext(DogsContext);

  return (
    <div className="container m-auto flex justify-center h-screen">
      <>
        <Button direction="right" navigateTo="/collection">
          <MdCollectionsBookmark size={30} />
          <MdKeyboardArrowRight size={30} />
        </Button>
        <DogList dogs={dogs} />
      </>
    </div>
  );
}

export default App;
