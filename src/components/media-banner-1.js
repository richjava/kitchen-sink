import Link from "next/link";

export default function MediaBanner1() {
  return (
    <section id="company-teaser" className="media-banner-1">
      <div className="xl:container xl:mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 relative mb-10 lg:mb-0">
            <img
              className="rounded-full relative z-10 shadow-xl"
              src="https://source.unsplash.com/Oalh2MojUuk/1000x1000"
            />
            <div className="pattern-offset-dots w-full h-full absolute text-blue-400 rounded-full rounded-tl-none top-0 left-0"></div>
            <div className="pattern-offset-dots w-full h-full absolute text-blue-400 rounded-full rounded-br-none bottom-0 right-0"></div>
          </div>
          <div className="flex-1 md:pl-10 xl:pl-20">
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-8">
              <span className="text-blue-600">About</span> in massa tempor nec
              feugiat nisl pretium
            </h2>
            <p className="font-light text-gray-700 leading-loose mb-12">
              Scelerisque felis imperdiet proin fermentum leo vel orci porta
              non. Massa tincidunt dui ut ornare. Nibh nisl condimentum id
              venenatis a condimentum vitae sapien. Id porta nibh venenatis cras
              sed felis. Ipsum dolor sit amet consectetur adipiscing elit ut.
              Platea dictumst quisque sagittis purus. Pulvinar proin gravida
              hendrerit lectus.
            </p>
            <Link href="/about">
              <a className="flex sm:inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-base leading-6 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out">
                More About Us
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