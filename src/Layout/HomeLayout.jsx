import Header from "../Components/Header";
import LetesNews from "../Components/LetesNews";
import Nav from "../Components/Nav";

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
        <aside className="col-span-3">Left Side</aside>
        <section className="col-span-6">Maine Content</section>
        <aside className="col-span-3 ">Right Side</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
