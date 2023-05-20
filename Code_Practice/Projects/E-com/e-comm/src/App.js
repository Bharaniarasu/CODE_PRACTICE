import RouterComp from "./routers";
import NavBar from "./components/navbar";
// import Data from "./service/data";
// import Container from "./components/container";
import Main from "./components/main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import Card from "./components/card";
import Data, { data } from "./service";
// const Main = lazy(() => import("./components/main"));
import Products from "./components/products";
import { createBrowserHistory } from "history";

function App() {
  const browserHistory = createBrowserHistory();

  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route exact path="/" element={<Products data={data} />} />
        </Routes>
        <RouterComp />
      </Main>
    </BrowserRouter>
  );
}
export default App;
