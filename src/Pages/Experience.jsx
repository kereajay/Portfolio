import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-black dark:bg-white text-white">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Work Experience
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto border-l-2 border-gray-700 pl-8 space-y-12">

        {/* Current Role */}
        <div className="relative group">
          
          {/* Icon */}
          <div className="absolute -left-[34px] top-2 bg-gradient-to-r from-indigo-500 to-pink-500 p-2 rounded-full shadow-lg">
            <Briefcase size={20} />
          </div>

          {/* Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-indigo-400">
              Full Stack Developer
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              RevAppayya IT Services Pvt. Ltd. | 2024 – Present
            </p>

            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>• Developed and maintained enterprise platforms including RITS Billing Suite and Restaurant Management Suite.</li>
              <li>• Built scalable frontend interfaces using React.js and Tailwind CSS, improving workflow efficiency.</li>
              <li>• Designed backend services using Node.js and Express.js with MongoDB.</li>
              <li>• Implemented secure authentication and role-based access control.</li>
              <li>• Optimized API performance using Redis caching and Redux Toolkit (RTK).</li>
              <li>• Built Android applications using React Native (Expo).</li>
            </ul>
          </div>
        </div>

        {/* Internship */}
        <div className="relative group">
          
          {/* Icon */}
          <div className="absolute -left-[34px] top-2 bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full shadow-lg">
            <Briefcase size={20} />
          </div>

          {/* Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-pink-400">
              Web Developer Intern
            </h3>

            <p className="text-sm text-gray-400 mb-3">
              Bissbee | 3 Months
            </p>

            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>• Developed responsive web applications, increasing user engagement by 35%.</li>
              <li>• Built and launched Tryshoes.in using React.js and modern UI/UX practices.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;