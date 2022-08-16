import { useState } from "react";
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
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button"
import Credits from "./components/Credits/Credits";
import { textStyle } from "./assets/styles/Variables";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Header>
        <Navigation setShowModal={setShowModal} />
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
          <Offer id="0">
            <Button title="Sign in" position="vertical"/>
          </Offer>
          <Offer id="1">
            <Button title="Sign in" position="vertical"/>
          </Offer>
          <Offer id="2">
            <Button title="Sign in" position="vertical"/>
          </Offer>
          <Headline id="academy" title="Join to ours surfing academy!" desc="Worldwide academy, guarantee of great fun. We will teach you everything." />
        </LayoutBgChanger>
        <Box>
          <Button title="Sign in"/>
        </Box>
        <Benefits />
      </Main>
      <Credits showCredits={showCredits} setShowCredits={setShowCredits} />
      <Footer />
    </Layout>
  );
}

export default App;