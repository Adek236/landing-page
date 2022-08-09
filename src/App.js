import Layout from "./components/Layout/Layout";
import LayoutBgChanger from "./components/LayoutBgChanger/LayoutBgChanger";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";
import Offer from "./components/Offer/Offer";
import Headline from "./components/Headline/Headline";
import Box from "./components/Box/Box";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Headline
          title="Get swept up in the adventure"
          desc="What our travelers say about us."
        />
        <Slider />
        <LayoutBgChanger>
          Top destinations:
          <Offer />
          <Offer />
          <Offer />
          <Headline title="Headline content" desc="Headline content" />
        </LayoutBgChanger>
        <Box>
          <Offer />
        </Box>
        <Benefits />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
