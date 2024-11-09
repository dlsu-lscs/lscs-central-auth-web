import { PageRouter } from "@/components/PageRouter";
import { NavBar } from "@/components/NavBar/NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <PageRouter></PageRouter>
    </>
  );
};
