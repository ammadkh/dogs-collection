import { Link } from "react-router-dom";

export const Button = ({ children, navigateTo, direction = "right" }) => {
  return (
    <Link to={navigateTo}>
      <button
        className={`rounded-full bg-black text-white p-4 m-5 fixed z-10 ${
          direction === "right" ? "right-5" : "left-5"
        } top-5 flex`}
      >
        {children}
      </button>
    </Link>
  );
};
