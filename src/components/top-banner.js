import * as React from "react";

function TopBanner() {
  return (
    <>
          <div className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-7xl font-light capitalize leading-[54.76px] max-md:max-w-full max-md:text-4xl">
                    Collections
                  </div>
                  <div className="mt-16 text-3xl capitalize leading-[55px] max-md:mt-10 max-md:max-w-full">
                    you can explore ans shop many differnt collection
                    <br />
                    from various barands here.
                  </div>
                  <div className="flex gap-2 justify-center self-start px-7 py-5 mt-20 text-white bg-gray-800 max-md:px-5 max-md:mt-10">
                    <div className="my-auto text-2xl font-black text-center">
                      
                    </div>
                    <a href="#" className="text-3xl capitalize">shop now</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2366586f4624e2233d0d89028bfd5f39248d829f8ac648e0b018c0cf85e562e?apiKey=487206c2eeb74448a80a0bcd449149ac&"
                  className="grow w-full aspect-[0.79] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
  </>
  );
}

export default TopBanner;