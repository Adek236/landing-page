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
import { textStyle } from "./assets/styles/Variables";

function App() {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Headline
          id="comments"
          title="Get swept up in the adventure"
          desc="What our travelers say about us."
        />
        <Slider />
        <LayoutBgChanger>
          <div style={textStyle}>Top destinations:</div>
          <Offer id="0"/>
          <Offer id="1"/>
          <Offer id="2"/>
          <Headline id="academy" title="Join to ours surfing academy!" desc="Worldwide academy, guarantee of great fun. We will teach you everything." />
        </LayoutBgChanger>
        <Box>
          {/* <Offer /> */}
        </Box>
        <Benefits />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;