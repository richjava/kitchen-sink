import Link from "next/link";

export default function MediaCover1() {
  return (
    <section id="main-landing" className="media-cover-1">
      <div className="flex items-center bg-gray-100 pt-20 lg:py-48 overflow-hidden">
        <div className="flex flex-col lg:flex-row relative">
          <div className="flex-1 lg:order-1 mb-12 lg:mb-0 lg:mr-20 relative z-20">
            <img
              className="w-full h-full object-top object-cover relative z-10 lg:shadow-2xl lg:rounded-lg bg-gray-100"
              src="https://source.unsplash.com/YDVdprpgHv4"
            />
            <div className="pattern-dots text-white absolute bottom-0 right-0 z-10"></div>
          </div>
          <div className="flex-1 px-4 lg:py-24 xl:32 mb-20 lg:my-auto relative z-20">
            <div className="sm:w-4/5 text-center lg:text-left mx-auto">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="hidden lg:block w-10 border border-blue-300 mr-3 mb-3"></div>
                <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
                  Welcome to
                </p>
              </div>
              <h1 className="text-5xl xl:text-6xl text-gray-900 leading-none font-bold mb-8">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-lg font-light text-gray-700 leading-loose xl:pr-20 mb-10 lg:mb-16">
                Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi
                cursus vitae congue mauris rhoncus orci sagittis.
              </p>
              <div className="flex flex-col sm:flex-row items-center">
                <Link href="/services">
                  <a className="w-full xl:w-auto flex items-center justify-center px-6 py-3 rounded-md text-white border border-transparent bg-blue-400 hover:bg-blue-500 hover:border-blue-500 transition duration-200 ease-in-out mb-4 sm:mb-0 sm:mr-2">
                    View Services
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="w-full xl:w-auto flex items-center justify-center px-6 py-3 rounded-md text-gray-600 border border-gray-600 hover:border-gray-900 hover:text-gray-900 bg-gray-100 transition duration-200 ease-in-out sm:ml-2">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block bg-blue-200 bg-opacity-50 w-20 h-20 transform rotate-45 rounded-lg absolute top-0 left-0"></div>
            <div className="hidden lg:block bg-blue-200 bg-opacity-75 w-10 h-10 transform rotate-45 rounded-lg absolute bottom-0 right-0 mr-32"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -112px;
          bottom: -100px;
          width: 50%;
          height: 60%;
        }
      `}</style>
    </section>
  );
}