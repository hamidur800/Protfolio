import React from "react";

const Protfolio = () => {
  return (
    <div id="portfolio">
      <section className="bg-background-light dark:bg-background-dark font-display">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
              My Projacts
            </h1>
          </header>

          {/* Filter Buttons */}
          {/* <nav className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
            <button className="px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-white shadow-md transition-transform transform hover:scale-105">
              All
            </button>

            <button className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Website Design
            </button>

            <button className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              App Mobile Design
            </button>

            <button className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              App Desktop
            </button>

            <button className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Branding
            </button>
          </nav> */}

          {/* Portfolio Grid */}
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD — 1 */}

            <a target="_Blank" href="https://chadnishop.com">
              <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    alt="Undercover colorful project"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/chadnishop.png"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    CHADNI SHOP
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    E-commerce website
                  </p>
                </div>
              </div>
            </a>

            <a target="_Blank" href="https://hero-app-stor.netlify.app">
              <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    alt="Zalha project thumbnail featuring a lion and a person"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/hero-app.png"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    HERO APP
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Web App
                  </p>
                </div>
              </div>
            </a>

            {/* CARD — 2 */}
            <a target="_Blank" href="https://toy-topia-shop.netlify.app">
              <div className="bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    alt="Black minimal portfolio project"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    src="/toy-app.png"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Toy Topia
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Web App
                  </p>
                </div>
              </div>
            </a>

            {/* CARD — 3 */}

            {/* You can duplicate these card blocks or map dynamically later */}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Protfolio;
