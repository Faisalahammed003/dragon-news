import Header from "../Components/Header";
import LeftNav from "../Components/Layout_Component/LeftNav";
import RightNav from "../Components/Layout_Component/RightNav";
import LetesNews from "../Components/LetesNews";

import Nav from "../Components/Nav";
import Main from "../Components/Main";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LetesNews></LetesNews>
        </section>
      </header>

      <nav className="w-11/12 mx-auto">
        <Nav></Nav>
      </nav>

      <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftNav></LeftNav>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 ">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
