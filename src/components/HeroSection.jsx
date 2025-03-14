import { Container } from "react-bootstrap";
import LinkSection from "./LinkSection";
import TopBar from "./TopBar";

const HeroSection = () => {
  return (
    <>
      <TopBar />
      <div className="isole container-fluid">
        <img src="../src/assets/sfondo.jpg" alt="isole caiman" className="overflow-hidden isole" width={"100%"} height={"380vh"} />
      </div>
      <Container fluid className="cit p-0">
        <Container className="w-75 align-center px-3 py-5 text-center mx-auto">
          <h1>SEAPASS</h1>
          <p className="fs-4">Naviga senza pensieri. Con noi avrai i tuoi certificati sempre sotto controllo</p>
        </Container>
      </Container>
      <LinkSection />
    </>
  );
};

export default HeroSection;
