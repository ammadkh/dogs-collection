import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyCollection } from "./pages/my-collection.page";
import { CollectionProvider } from "./services/collection.context";
import { DogsProvider } from "./services/dogs.context";
import { NotFoundPage } from "./pages/NotFound.page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DogsProvider>
    <CollectionProvider>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="collection" element={<MyCollection />} />
            <Route path="*" exact={true} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </CollectionProvider>
  </DogsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
