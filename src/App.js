import * as React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TopBanner from "./components/top-banner";
import LogoBar from "./components/logo-bar";
import ImageGellery from "./components/image-gellery";
import Newsletter from "./components/newsletter";
import ProductGellery from "./components/product-gellery";
import BottomBenner from "./components/bottom-banner";
import OurProducts from "./components/our-product";
import Instagram from "./components/Instagram-page";

function MyComponent() {
  return (
    <>
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-col items-center self-stretch px-16 pt-8 pb-16 w-full bg-gray-800 bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col py-0.5 w-full max-w-[1320px] max-md:max-w-full">
          <Header />
          <TopBanner />
        </div>
      </div>
          <LogoBar />
          <ImageGellery />
          <Newsletter />
          <ProductGellery />
          <BottomBenner />
          <OurProducts />
          <Instagram />
          <Footer />
      </div>
    </>
  );
}

export default MyComponent;
