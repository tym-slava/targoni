import React from "react";
import Header from "../main/Header/Header"
import AboutProducts from "../main/AboutProducts/AboutProducts";
import Catalog from "../main/Catalog/Catalog";
import MainRecipes from "../main/MainRecipes/MainRecipes";
import AboutUs from "../main/AboutUs/AboutUs";
import Sets from "../main/Sets/Sets";
import Gallery from "../main/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";


function Main() {
  return (
    <>
      <Header/>
      <AboutProducts/>
      <Catalog/>
      <MainRecipes/>
      <AboutUs/>
      <Sets/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default Main;
