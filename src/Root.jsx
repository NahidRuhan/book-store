import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";

const Root = () => {
  return (
    <div className="space-y-14">
      <div className="max-w-5xl mx-auto space-y-14">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Root;
