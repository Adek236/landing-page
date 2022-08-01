import Layout from "./components/Layout/Layout";
import LayoutBgChanger from "./components/LayoutBgChanger/LayoutBgChanger";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Slider />
        <LayoutBgChanger>
          <Offer />
          <Offer />
          <Offer />
        </LayoutBgChanger>
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
        Hello World <br />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
