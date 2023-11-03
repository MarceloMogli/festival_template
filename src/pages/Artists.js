import React from "react";
import ArtistsContainer from "../components/Artists/Artists";
import Footer from "../components/Footer/Footer";
import ArtistsHeader from "../components/ArtistsHeader/ArtistsHeader";

const Artists = () => {
  return (
    <>
      <ArtistsHeader />
      <ArtistsContainer />
      <Footer />
    </>
  );
};

export default Artists;
