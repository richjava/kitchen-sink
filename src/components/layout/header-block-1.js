import Link from "next/link";
import Nav from "../lib/nav";
import primaryNav from "../../menus/primary-menu";

export default function HeaderBlock1() {
  return (
    <header id="header" className="header-block-1">
      <section className="fixed w-full bg-white shadow-sm relative z-50">
        <nav className="flex justify-between items-center py-4 px-5">
          <div className="flex">
            <div>
            <Link href="/">
                <svg
                  className="w-12 mr-8 cursor-pointer"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#574ad8" height="1000" rx="248.49" width="1000" />
                  <g fill="#fff">
                    <path d="m314.05 715.27v-430.5c0-20.45 25.95-29.24 38.37-13l329.1 430.5a21.39 21.39 0 0 1 -17 34.38h-329.09a21.39 21.39 0 0 1 -21.38-21.38z" />
                    <circle cx="609.46" cy="390.56" r="61.6" />
                  </g>
                </svg>
              </Link>
            </div>
            <Nav pages={primaryNav.pages} />
          </div>
          <div>
            <Link href="/contact">
              <a className="px-5 py-3 text-sm rounded-lg text-white bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-300 hover:to-blue-700">
                Get Started
              </a>
            </Link>
          </div>
        </nav>
      </section>
    </header>
  );
}