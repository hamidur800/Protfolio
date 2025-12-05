import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section className="bg-background-light dark:bg-background-dark font-display antialiased">
        <div className="flex items-center justify-center min-h-screen px-4 py-12">
          <div className="w-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Contact me
              </h1>
              {/* <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Cultivating Connections: Reach Out And Connect With Me
              </p> */}
            </div>

            {/* FORM */}
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="sr-only" htmlFor="phone-number">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    id="phone-number"
                    name="phone-number"
                    placeholder="Phone Number"
                    type="tel"
                  />
                </div>

                {/* Service Select */}
                <div>
                  <label className="sr-only" htmlFor="service">
                    Service Of Interest
                  </label>
                  <select
                    className="form-select w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    id="service"
                    name="service"
                  >
                    <option>Service Of Interest</option>
                    <option>Web Design</option>
                    <option>UX/UI Design</option>
                    <option>Branding</option>
                    <option>Consulting</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="sr-only" htmlFor="timeline">
                    Timeline
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    id="timeline"
                    name="timeline"
                    placeholder="Timeline"
                    type="text"
                  />
                </div>

                {/* Project Details */}
                <div className="md:row-span-2">
                  <label className="sr-only" htmlFor="project-details">
                    Project Details
                  </label>
                  <textarea
                    className="w-full h-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 resize-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    id="project-details"
                    name="project-details"
                    placeholder="Project Details..."
                    rows="6"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-end">
                <button
                  className="px-8 py-3 bg-transparent border border-gray-400 dark:border-gray-600 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-gray-500 transition-colors duration-300"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
