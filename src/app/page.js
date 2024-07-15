"use client";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useState } from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Company</h2>
            <ul className="space-y-4 text-md">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Merch
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Brand
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Meetups
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Newsroom</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Products</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Hosting
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Domains
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  SSL
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 font-semibold text-xl"
                  href="/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2021 Company Inc.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a href="/" class="flex text-3xl text-white font-medium mb-4 md:mb-0">
            MENTOROC
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start"></div>
          <Link href="/dashboard">
            <button className="btn">Se connecter</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <section class="text-gray-600 min-h-screen body-font text-center">
      <div class="max-w-5xl pt-52 h-full pb-24 mx-auto">
        <h1 class="text-80 text-center text-4xl font-bold text-white mb-12">
          Générer vos rapport d&apos;évaluation en un clic !
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Mentoroc vous fera gagner du temps en générant vos rapports basés sur
          les informations que vous lui fournirez.
        </h2>
        <div class="flex flex-col items-center justify-center text-xl text-gray-300">
          <p>
            Vous serez bluffé par la qualité des rapports générés par Mentoroc.
          </p>
          <p>
            Ils respectent parfaitement le format attendu pour un rapport
            d&apos;évaluation OC.
          </p>
          <p>
            L&apos;assistant connait très bien le contenu et les attentes de chaque
            projet.
          </p>
        </div>
        <div className="mt-12 ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="/dashboard"
          >
            <div className="flex text-lg">
              <span className="justify-center">Essayer gratuitement</span>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt="Placeholder Image"
          src="./images/placeholder.png"
        ></img>
      </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Clean and tidy code.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Here is our collection of free to use templates made with Next.js &
        styled with Tailwind CSS.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
      <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
        <div class="ktq4">
          <img src="https://nine4.app/images/nine4-3.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
            odio.
          </p>
        </div>
      </div>
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              href="/"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section> */}
    </section>
  );
}

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Mentoroc"
        description="Bienvenue sur Mentoroc, l'assistant IA qui vous facilite le mentorat OC."
      />
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
