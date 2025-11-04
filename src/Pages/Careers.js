import React from "react";

const Careers = () => {
  const jobs = [
    {
      title: "Barista",
      description:
        "Join our team as a Barista! Craft coffee drinks, engage with customers, and help create a welcoming café atmosphere.",
      email: "careers@fusettescafe.com",
    },
    {
      title: "Café Manager",
      description:
        "Oversee daily operations, manage staff, and ensure a top-notch customer experience at Fusettes Café.",
      email: "careers@fusettescafe.com",
    },
    {
      title: "Marketing Coordinator",
      description:
        "Manage social media campaigns, community events, and brand engagement initiatives to promote Fusettes Café.",
      email: "careers@fusettescafe.com",
    },
  ];

  return (
    <div className="bg-beige/10 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-burgundy text-center mb-16">
        Join Our Team
      </h1>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-2xl font-semibold text-burgundy mb-3">
                {job.title}
              </h2>
              <p className="text-gray-700 mb-6">{job.description}</p>
            </div>

            <a
              href={`mailto:${job.email}?subject=Application for ${job.title}`}
              className="inline-block bg-burgundy text-beige font-semibold py-3 px-6 rounded-full text-center hover:bg-golden hover:text-burgundy transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
