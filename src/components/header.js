import * as React from "react";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <>
          <div className="flex gap-5 justify-between items-center mt-1 w-full text-gray-800 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto text-xl font-black text-center border border-white border-solid">
              
            </div>
            <div className="flex gap-3 items-center self-stretch px-px my-auto text-3xl text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96abb6135807d3ea4e8f1548da7b428a5c8b1514285cb3d79c7b62d9d6925b3c?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="shrink-0 self-stretch my-auto aspect-[2.08] w-[31px]"
                alt="Image1"
              />
              <a href="/" className="self-stretch">CORAL</a>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96abb6135807d3ea4e8f1548da7b428a5c8b1514285cb3d79c7b62d9d6925b3c?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="shrink-0 self-stretch my-auto aspect-[2.08] w-[31px]"
                alt="Image2"
              />
            </div>
            <div className="flex gap-5 justify-center self-stretch">
              <div className="flex gap-2 justify-between px-1 py-0.5">
                <div className="text-xl font-black text-center"></div>
                <a href="#" className="text-lg capitalize">Account</a>
                {/* <NavLink className="text-lg capitalize" to="#">Test</NavLink> */}
              </div>
              <div className="flex gap-2 justify-between px-1 py-0.5">
                <div className="text-xl font-black text-center"></div>
                <a href="#" className="text-lg capitalize">Shoping</a>
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-7 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
          <div className="flex gap-5 justify-between mt-8 text-base leading-6 text-black capitalize max-md:flex-wrap max-md:max-w-full">
            <a href="#">Jewelry & Accessories</a>
            <a href="#">Clothing & Shoes</a>
            <a href="#">Home & Living</a>
            <a href="#">Wedding & Party</a>
            <a href="#">Toys & Entertainment</a>
            <a href="#">Art & Collectibles</a>
            <a href="#">Craft Supplies & Tools</a>
          </div>
  </>
  );
}

export default Header;