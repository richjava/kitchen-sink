import Link from "next/link";

export default function MediaBlock2() {
  return (
    <section id="services-features-section" className="media-block-2">
      <div className="bg-gray-10 px-4 lg:px-0 py-24 lg:py-32 overflow-hidden">
        <div className="flex flex-col lg:flex-row mb-24 lg:mb-40">
          <div className="flex-1 lg:order-1 relative xl:h-screen max-h-70vh">
            <img
              className="w-full h-full object-top object-cover mb-10 lg:mb-0 rounded-lg lg:rounded-tr-none lg:rounded-br-none relative z-10 shadow-2xl"
              src="https://source.unsplash.com/SYTO3xs06fU"
            />
            <div className="pattern-dots two text-gray-300 absolute h-full w-1/2"></div>
          </div>
          <div className="flex-1 relative z-10">
            <div className="lg:px-10 xl:px-24">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mb-3"></div>
                <p className="text-blue-400 uppercase tracking-widest text-lg mb-3">
                  Service 1
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-8">
                Congue mauris rhoncus aenean amit
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-6">
                Scelerisque felis imperdiet proin fermentum leo vel orci porta
                non. Massa tincidunt dui ut ornare. Nibh nisl condimentum id
                venenatis a condimentum vitae sapien. Id porta nibh venenatis
                cras sed felis. Ipsum dolor sit amet consectetur adipiscing elit
                ut. Platea dictumst quisque sagittis purus. Pulvinar proin
                gravida hendrerit lectus.
              </p>
              <p className="font-light text-gray-700 leading-loose mb-6">
                Faucibus a pellentesque sit amet porttitor eget. Rhoncus mattis
                rhoncus urna neque viverra justo nec. Vitae suscipit tellus
                mauris a diam. Id eu nisl nunc mi ipsum faucibus. Nulla facilisi
                nullam vehicula ipsum a arcu cursus. Mi quis hendrerit dolor
                magna eget est lorem ipsum.
              </p>
              <ul className="list-disc ml-5 font-light text-gray-600 leading-loose mb-6">
                <li>Accumsan sit amet nulla facilisi morbi tempus iaculis</li>
                <li>Curabitur vitae nunc sed velit dignissim sodales ut</li>
                <li>In egestas erat imperdiet sed euismod nisi</li>
              </ul>
              <p className="font-light text-gray-700 leading-loose mb-12">
                Diam ut venenatis tellus in metus vulputate eu scelerisque. Et
                malesuada fames ac turpis egestas integer.
              </p>
              <h2 className="text-xl text-gray-800 leading-none font-bold mb-5">
                Why choose us?
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-12">
                Elementum sagittis vitae et leo duis ut. Netus et malesuada
                fames ac turpis egestas. Potenti nullam ac tortor vitae purus
                faucibus. Tellus mauris a diam maecenas sed. Enim sed faucibus
                turpis in. Tellus mauris a diam maecenas. At varius vel pharetra
                vel turpis nunc eget.
              </p>
              <h2 className="text-xl text-gray-800 leading-none font-bold mb-5">
                How we're different
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-6">
                Rhoncus urna neque viverra justo nec ultrices. Id diam maecenas
                ultricies mi eget mauris pharetra et. Mauris rhoncus aenean vel
                elit. Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="font-light text-gray-700 leading-loose mb-12">
                Accumsan sit amet nulla facilisi morbi tempus iaculis. Curabitur
                vitae nunc sed velit dignissim sodales ut. In egestas erat
                imperdiet sed euismod nisi. Eleifend mi in nulla posuere
                sollicitudin.
              </p>
              <Link href="/contact">
                <a className="flex sm:inline-flex items-center justify-center px-6 py-3 rounded-md tracking-wide text-white bg-blue-400 hover:bg-blue-500  transition duration-200 ease-in-out">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mb-20">
          <div className="flex-1 relative xl:h-screen max-h-70vh">
            <img
              className="w-full h-full object-top object-cover mb-10 lg:mb-0 rounded-lg lg:rounded-tl-none lg:rounded-bl-none relative z-10 shadow-2xl"
              src="https://source.unsplash.com/XkKCui44iM0"
            />
            <div className="pattern-dots one text-gray-300 absolute h-full w-1/2"></div>
          </div>
          <div className="flex-1 relative z-10">
            <div className="lg:px-10 xl:px-24">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mb-3"></div>
                <p className="text-blue-400 uppercase tracking-widest text-lg mb-3">
                  Service 2
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-8">
                Quam nulla porttitor
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-6">
                Sit amet consectetur adipiscing elit. Curabitur gravida arcu ac
                tortor dignissim. Nulla facilisi etiam dignissim diam quis enim
                lobortis scelerisque fermentum. A arcu cursus vitae congue
                mauris. Dis parturient montes nascetur ridiculus mus.
              </p>
              <ul className="list-disc ml-5 font-light text-gray-600 leading-loose mb-12">
                <li>Accumsan sit amet nulla facilisi morbi tempus iaculis</li>
                <li>Curabitur vitae nunc sed velit dignissim sodales ut</li>
                <li>In egestas erat imperdiet sed euismod nisi</li>
                <li>Id porta nibh venenatis</li>
                <li>Arcu vitae elementum curabitur</li>
              </ul>
              <h2 className="text-xl text-gray-800 leading-none font-bold mb-5">
                How we can help
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-6">
                Rhoncus urna neque viverra justo nec ultrices. Id diam maecenas
                ultricies mi eget mauris pharetra et. Mauris rhoncus aenean vel
                elit. Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="font-light text-gray-700 leading-loose mb-12">
                Accumsan sit amet nulla facilisi morbi tempus iaculis. Curabitur
                vitae nunc sed velit dignissim sodales ut. In egestas erat
                imperdiet sed euismod nisi. Eleifend mi in nulla posuere
                sollicitudin.
              </p>
              <Link href="/contact">
                <a className="flex sm:inline-flex items-center justify-center px-6 py-3 rounded-md tracking-wide text-white bg-blue-400 hover:bg-blue-500  transition duration-200 ease-in-out">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -10px;
          bottom: -110px;
        }

        .max-h-70vh {
          max-height: 80vh;
        }

        @media (min-width: 1024px) {
          .pattern-dots.one {
            right: auto;
            left: -105px;
          }

          .pattern-dots.two {
            left: auto;
            right: -105px;
          }
        }
      `}</style>
    </section>
  );
}