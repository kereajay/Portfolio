import React from "react";
import { GraduationCap } from "lucide-react";

function Education() {
  const educationData = [
    {
      university: "Visvesvaraya Technological University",
      degree: "MCA",
      college: "Cambridge Institute of Technology",
      year: "2021 - 2023",
      score: "8.38 CGPA",
    },
    {
      university: "Gulbarga University",
      degree: "Bachelor of Science",
      college: "Channabasaveshwara College of Arts and Commerce",
      year: "2018 - 2021",
      score: "7.24 CGPA",
    },
    {
      university: "Department of Pre-University Board",
      degree: "PUC",
      college: "Channabasaveshwar Gurukul Kardyal",
      year: "2016 - 2018",
      score: "74.5%",
    },
    {
      university: "Karnataka Secondary Education Examination Board",
      degree: "SSLC",
      college: "Guruprasad High School Bhalki",
      year: "2015",
      score: "77.92%",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-black dark:bg-white text-white flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Education
      </h1>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl border-l-2 border-gray-700 pl-8 space-y-12">
        
        {educationData.map((edu, index) => (
          <div key={index} className="relative group">
            
            {/* Icon */}
            <div className="absolute -left-[34px] top-2 bg-gradient-to-r from-indigo-500 to-pink-500 p-2 rounded-full shadow-lg">
              <GraduationCap size={20} />
            </div>

            {/* Card */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition duration-300 hover:-translate-y-1">
              
              <h2 className="text-xl md:text-2xl font-bold text-indigo-400 mb-1">
                {edu.degree}
              </h2>

              <p className="text-lg text-gray-300">{edu.college}</p>

              <p className="text-sm text-gray-400 mb-2">
                {edu.university}
              </p>

              <div className="flex justify-between items-center mt-3 text-sm">
                <span className="text-gray-400">{edu.year}</span>
                {edu.score && (
                  <span className="bg-gradient-to-r from-indigo-500 to-pink-500 px-3 py-1 rounded-full text-xs font-semibold">
                    {edu.score}
                  </span>
                )}
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Education;