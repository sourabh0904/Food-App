import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //default export in react
import { Title } from "./components/Header"; //named export in react
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading1 = React.createElement(
//   "h1",
//   { id: "title1", key: "h1" },
//   "Heading 1"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "title2", key: "h2" },
//   "Heading 2"
// );

// const heading3 = (
//   <h3 id="title3" key="h3">
//     Heading 3
//   </h3>
// );

// console.log(container);
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
//   heading3,
// ]);
root.render(<RouterProvider router={appRouter} />);
