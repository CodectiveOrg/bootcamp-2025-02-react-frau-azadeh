import { Header } from "../component/Header/Header";
import { Outlet } from "react-router";
import { Footer } from "../component/Footer/Footer";

export const RoorLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
