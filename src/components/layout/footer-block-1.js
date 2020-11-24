import Link from "next/link";

const navlinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function FooterBlock1() {
  return (
    <footer id="footer" className="footer-block-1">
      <section className="bg-gray-800 pt-12 pb-8 px-5">
        <ul className="flex items-center justify-center space-x-6 mb-10">
          {navlinks.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mb-10">
          <Link href="#">
            <a>
              <svg
                className="text-gray-500 hover:text-gray-400 w-5 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 25 25"
                fill="currentColor"
              >
                <path d="M24.145 12.072C24.145 5.406 18.739 0 12.073 0 5.405 0 0 5.406 0 12.072 0 18.099 4.414 23.093 10.186 24v-8.436H7.12v-3.49h3.066v-2.66c0-3.025 1.803-4.698 4.56-4.698 1.321 0 2.703.236 2.703.236v2.972h-1.523c-1.499 0-1.968.93-1.968 1.886v2.264h3.348l-.534 3.49h-2.813V24c5.772-.906 10.186-5.9 10.186-11.928z" />
              </svg>
            </a>
          </Link>

          <Link href="#">
            <a>
              <svg
                className="text-gray-500 hover:text-gray-400 w-5 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 30 24"
                fill="currentColor"
              >
                <path d="M30 2.844a12.612 12.612 0 0 1-3.535.956A6.094 6.094 0 0 0 29.174.45a12.36 12.36 0 0 1-3.91 1.469A6.196 6.196 0 0 0 20.769 0c-3.4 0-6.153 2.712-6.153 6.056-.003.465.05.93.158 1.381a17.544 17.544 0 0 1-12.687-6.33A5.98 5.98 0 0 0 1.25 4.15c0 2.1 1.096 3.956 2.75 5.044a6.094 6.094 0 0 1-2.799-.757v.075c0 2.938 2.125 5.382 4.938 5.938a6.298 6.298 0 0 1-1.622.213c-.388 0-.775-.037-1.156-.113.781 2.406 3.057 4.156 5.753 4.206a12.474 12.474 0 0 1-7.645 2.594c-.491 0-.982-.03-1.469-.088A17.417 17.417 0 0 0 9.421 24C20.756 24 26.95 14.769 26.95 6.762c0-.262-.007-.525-.02-.78A12.406 12.406 0 0 0 30 2.843z" />
              </svg>
            </a>
          </Link>

          <Link href="#">
            <a>
              <svg
                className="text-gray-500 hover:text-gray-400 w-5 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M17 2a5.015 5.015 0 0 1 5 5v10a5.015 5.015 0 0 1-5 5H7a5.016 5.016 0 0 1-5-5V7a5.015 5.015 0 0 1 5-5h10zm0-2H7C3.15 0 0 3.15 0 7v10c0 3.85 3.15 7 7 7h10c3.85 0 7-3.15 7-7V7c0-3.85-3.15-7-7-7z"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M18.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0-2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
                />
              </svg>
            </a>
          </Link>

          <Link href="#">
            <a>
              <svg
                className="text-gray-500 hover:text-gray-400 w-5 mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 32 24"
                fill="currentColor"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M31.79 5.3c0-2.813-2.07-5.076-4.625-5.076A227.29 227.29 0 0 0 16.562 0h-1.125c-3.6 0-7.137.062-10.6.225C2.288.225.22 2.5.22 5.312A92.971 92.971 0 0 0 0 11.986a96.773 96.773 0 0 0 .213 6.682c0 2.812 2.069 5.093 4.619 5.093 3.637.169 7.368.244 11.162.238 3.8.012 7.52-.067 11.162-.238 2.556 0 4.625-2.281 4.625-5.093.15-2.232.219-4.457.212-6.688a90.897 90.897 0 0 0-.203-6.68zM12.938 18.117V5.837L22 11.974l-9.063 6.144z"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xs text-white tracking-wide">
            © 2020 Company Name Ltd. |{" "}
            <Link
              href="https://appyay.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <a className="hover:underline">Built with Appyay</a>
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
}