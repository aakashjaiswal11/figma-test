import * as React from "react";

function ProductGellery() {
  return (
    <>
              <div className="flex gap-5 justify-between mt-9 w-full max-w-[1320px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 my-auto text-base font-semibold capitalize text-black text-opacity-50">
          <a href="#" className="justify-center py-1.5 text-black">all products</a>
          <a href="#" className="justify-center py-1.5 whitespace-nowrap">t-shirt</a>
          <a href="#" className="justify-center py-1.5 whitespace-nowrap">hoodies</a>
          <a href="#" className="justify-center py-1 whitespace-nowrap">jacket</a>
        </div>
        <div className="flex gap-1 justify-between px-4 py-1.5 text-white whitespace-nowrap bg-gray-800">
          <div className="my-auto text-sm font-black text-center"></div>
          <a href="#" className="text-base capitalize">filter</a>
        </div>
      </div>
      <div className="px-5 mt-9 w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <a href="#" className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1ce88a4e724d9481f29bafea666f61b17892d49d6750b30a9db097bacc94a43?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="w-full aspect-[0.78]"
              />
              <div className="mt-6 font-semibold text-black">
                Adicolor Classics Joggers
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <div className="text-black text-opacity-50">Dress</div>
                <div className="font-semibold text-right text-black">
                  $63.85
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-px text-base capitalize max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa523ba1666ef20e40a249d88f58e2b2d747c6dd05a9292c7f2f4a37b5714593?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="w-full aspect-[0.78]"
              />
              <div className="mt-6 font-semibold text-black">
                Nike Sportswear Futura Luxe
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <div className="text-black text-opacity-50">Bag</div>
                <div className="font-semibold text-right text-black">
                  $130.00
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee221c7738aa0b2e9ea4b5f43c7d9120ea85711703e40df5f8da7340f471f6b2?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="w-full aspect-[0.78]"
              />
              <div className="mt-6 font-semibold text-black">
                Geometric print Scarf
              </div>
              <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
                <div className="text-black text-opacity-50">scarf</div>
                <div className="font-semibold text-right text-black">
                  $53.00
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 capitalize max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap aspect-[0.78] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/669b2d3c0e29311f1188f6dfe024c016cb97e8e07ce73c71909a2c99421b0af2?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-3 py-2 mb-52 bg-gray-800 max-md:mb-10">
                  sale
                </div>
              </div>
              <div className="mt-6 text-base font-semibold text-black">
                Yellow Reserved Hoodie
              </div>
              <div className="flex gap-5 justify-between mt-7 w-full whitespace-nowrap">
                <div className="text-base text-black text-opacity-50">
                  Dress
                </div>
                <div className="flex gap-3.5 font-semibold text-right">
                  <div className="text-sm text-black text-opacity-50">
                    $364.00
                  </div>
                  <div className="text-base text-red-400">$155.00</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="px-5 mt-6 w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <a href="#" className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-center text-white uppercase whitespace-nowrap aspect-[0.78] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b1b0520689467191d5d23f4e88e0c800852c001e9996032c693fb76b6fab41c?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-3.5 py-2 mb-52 bg-red-400 max-md:mb-10">
                  hot
                </div>
              </div>
              <div className="mt-6 font-semibold text-black">
                Basic Dress Green
              </div>
              <div className="flex gap-5 justify-between mt-7 whitespace-nowrap">
                <div className="text-black text-opacity-50">Dress</div>
                <div className="font-semibold text-right text-black">
                  $236.00
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col items-start pt-6 pb-20 w-full text-xs font-semibold text-white uppercase whitespace-nowrap aspect-[0.78] max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a27753f810f4c5dd5f69a953695a0988d22bd22d826f1393c039f37826de45d?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center px-3 py-2 mb-52 bg-gray-800 max-md:mb-10">
                  sale
                </div>
              </div>
              <div className="flex gap-3.5 py-1.5 mt-5 capitalize">
                <div className="flex flex-col">
                  <div className="text-base font-semibold text-black">
                    Nike Air Zoom Pegasus
                  </div>
                  <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-black text-opacity-50">
                    <div className="text-base">shoe</div>
                    <div className="text-sm font-semibold text-right">
                      $220.00
                    </div>
                  </div>
                </div>
                <div className="self-end mt-10 text-base font-semibold text-right text-red-400">
                  $198.00
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7311b89ac514d2865c3abd2c94d4e264b017a76f875a7501968cdb8635215b61?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="w-full aspect-[0.78]"
              />
              <div className="mt-6 font-semibold text-black">
                Nike Repel Miler
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <div className="text-black text-opacity-50">Dress</div>
                <div className="font-semibold text-right text-black">
                  $120.50
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-base capitalize max-md:mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aafa1e904cd293fc3bce42069f53aa59bc2c9b7f42fb0ff523e120f0200723e5?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                className="w-full aspect-[0.78]"
              />
              <div className="mt-6 font-semibold text-black">
                Nike Sportswear Futura Luxe
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                <div className="text-black text-opacity-50">Glasses</div>
                <div className="font-semibold text-right text-black">
                  $160.00
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
  </>
  );
}

export default ProductGellery;