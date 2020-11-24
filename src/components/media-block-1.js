import Link from "next/link";

export default function MediaBlock1() {
  return (
    <section id="services-benefits-teaser" className="media-block-1">
      <div className="bg-gray-100 px-4 py-24 lg:py-32 overflow-hidden">
        <div className="xl:container xl:mx-auto">
          <div className="flex flex-col lg:flex-row mb-24 lg:mb-40">
            <div className="flex-1 relative">
              <img
                className="w-full h-full object-top object-cover mb-10 lg:mb-0 rounded-lg relative z-10 shadow-2xl"
                src="https://source.unsplash.com/XkKCui44iM0"
              />
              <div className="pattern-dots one text-gray-300 absolute h-full w-1/2"></div>
            </div>
            <div className="flex-1 lg:pl-20 xl:py-20 relative z-10">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mb-3"></div>
                <p className="text-blue-400 uppercase tracking-widest text-lg mb-3">
                  Benefit 1
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-8">
                In massa tempor nec feugiat nisl pretium
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-12">
                Pulvinar proin gravida hendrerit lectus a. Ullamcorper a lacus
                vestibulum sed. Luctus accumsan tortor posuere ac ut consequat
                semper viverra nam. Netus et malesuada fames ac turpis egestas
                maecenas pharetra convallis. Pellentesque diam volutpat commodo
                sed egestas. Scelerisque viverra.
              </p>
              <Link href="/services">
                <a className="flex sm:inline-flex items-center justify-center px-6 py-3 rounded-md tracking-wide text-white bg-blue-400 hover:bg-blue-500  transition duration-200 ease-in-out">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:mb-24">
            <div className="flex-1 lg:order-1 relative">
              <img
                className="w-full h-full object-top object-cover mb-10 lg:mb-0 rounded-lg relative z-10 shadow-2xl"
                src="https://source.unsplash.com/SYTO3xs06fU"
              />
              <div className="pattern-dots two text-gray-300 absolute h-full w-1/2"></div>
            </div>
            <div className="flex-1 lg:pr-10 xl:pr-20 xl:py-20 relative z-10">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mb-3"></div>
                <p className="text-blue-400 uppercase tracking-widest text-lg mb-3">
                  Benefit 2
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-8">
                Nec ultrices dui sapien eget mi proin sed
              </h2>
              <p className="font-light text-gray-700 leading-loose mb-12">
                Scelerisque felis imperdiet proin fermentum leo vel orci porta
                non. Massa tincidunt dui ut ornare. Nibh nisl condimentum id
                venenatis a condimentum vitae sapien. Id porta nibh venenatis
                cras sed felis. Ipsum dolor sit amet consectetur adipiscing elit
                ut. Platea dictumst quisque sagittis purus. Pulvinar proin
                gravida hendrerit lectus tristique senectus et.
              </p>
              <Link href="/services">
                <a className="flex sm:inline-flex items-center justify-center px-6 py-3 rounded-md tracking-wide text-white bg-blue-400 hover:bg-blue-500  transition duration-200 ease-in-out">
                  Learn More
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