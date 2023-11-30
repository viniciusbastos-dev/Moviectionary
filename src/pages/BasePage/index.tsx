import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { MediaProvider } from "../../contexts/Media";

const BasePage = () => {
  return (
    <>
      <Header />
      <main>
        <MediaProvider>
          <Container>
            <Outlet />
          </Container>
        </MediaProvider>
      </main>
      <Footer />
    </>
  );
};

export default BasePage;
