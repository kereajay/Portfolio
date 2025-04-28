import React from "react";

function Education() {
  const educationData = [
    {
      university: "Visvesvaraya Technological University",
      degree: "MCA",
      college: "Cambridge Institute of Technology",
      year: "2021 - 2023",
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
    <div className="min-h-screen py-10 px-4 bg-black dark:bg-white text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-red-400">
        Education
      </h1>

      <div className="w-full max-w-5xl flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl shadow-lg bg-gradient-to-r  from-indigo-200 via-pink-300 to-rose-200 animate-gradient-x bg-[length:400%_400%] transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r  from-indigo-600 via-pink-500 to-red-400">
              {edu.university}
            </h2>

            <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
            <p className="text-lg mb-1">{edu.college}</p>
            <p className="mb-1">{edu.year}</p>
            {edu.score && <p className="">{edu.score}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
