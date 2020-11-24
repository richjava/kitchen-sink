import Link from "next/link";

export default function MediaCover3() {
  return (
    <section id="company-landing" className="media-cover-3">
      <div className="px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start pt-20">
          <div className="flex-1 lg:order-1 mb-16 lg:mb-0 relative sm:w-3/4 sm:mx-auto lg:w-full">
            <img
              className="rounded-full relative z-10 shadow-xl"
              src="https://source.unsplash.com/Oalh2MojUuk/1000x1000"
            />
            <div className="pattern-offset-dots w-full h-full absolute text-blue-400 rounded-full rounded-tl-none top-0 left-0"></div>
            <div className="pattern-offset-dots w-full h-full absolute text-blue-400 rounded-full rounded-br-none bottom-0 right-0"></div>
          </div>
          <div className="flex-1 lg:pr-10 xl:px-20 mb-10 lg:mb-16">
            <div className="flex items-center">
              <div className="w-10 border border-blue-300 mr-3 mb-3"></div>
              <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
                About Us
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-10">
              Turpis in eu mi bibendum neque egestas congue
            </h1>
            <p className="font-light text-gray-700 leading-loose mb-6">
              Vel pretium lectus quam id leo in vitae. Nibh nisl condimentum id
              venenatis a condimentum vitae sapien. Id porta nibh venenatis cras
              sed felis. Ipsum dolor sit amet{" "}
              <Link href="/services">
                <a className="text-blue-600 hover:text-blue-700 hover:underline">
                  consectetur adipiscing elit
                </a>
              </Link>{" "}
              ut. Platea dictumst quisque sagittis purus. Pulvinar proin gravida
              hendrerit lectus.
            </p>
            <ul className="list-disc ml-5 font-light text-gray-700 leading-loose mb-12">
              <li>Accumsan sit amet nulla facilisi morbi tempus iaculis</li>
              <li>Curabitur vitae nunc sed velit dignissim sodales ut</li>
              <li>In egestas erat imperdiet sed euismod nisi</li>
            </ul>
            <h2 className="text-xl text-gray-800 leading-none font-bold mb-5">
              Let's get started
            </h2>
            <p className="font-light text-gray-700 leading-loose mb-6">
              Elementum sagittis vitae et leo duis ut. Netus et malesuada fames
              ac turpis egestas. Potenti nullam ac tortor vitae purus faucibus.
              Tellus mauris a diam maecenas sed. Enim sed faucibus turpis in.
              Tellus mauris a diam maecenas. At varius vel pharetra vel turpis
              nunc eget.
            </p>
            <p className="font-light text-gray-700 leading-loose mb-12">
              Quis commodo odio aenean sed. Amet cursus sit amet dictum.
            </p>
            <Link href="/contact">
              <a className="flex sm:inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-base leading-6 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-offset-dots {
          background-image: radial-gradient(currentColor 1px, transparent 1px),
            radial-gradient(currentColor 1px, transparent 1px);
          background-size: calc(20 * 1px) calc(20 * 1px);
          background-position: 0 0, calc(10 * 1px) calc(10 * 1px);
        }
      `}</style>
    </section>
  );
}