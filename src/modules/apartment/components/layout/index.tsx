import Header from "../header";
import Footer from "../footer";
import { LayoutContainer } from "./style";

const Layout = ({ children }: any) => (
  <LayoutContainer>
    <Header />
    {children}
    <Footer />
  </LayoutContainer>
);

export default Layout;
