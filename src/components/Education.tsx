
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Post Graduation in AI and Big Data Analytics",
      institution: "Georgian College, Barrie",
      duration: "2023 - 2025",
      location: "Barrie, ON",
      highlights: [
        "Graduated  with 3.9 GPA",
          "Dean's List for 4 consecutive semesters",
        "Thesis: 'Educational Virtual Assistant Using LLma'",
        "Member of Data Science Student Association"
      ],
      courses: ["Python Programming","Data System Architecture", "Business Intelligence","Data Visualization","Data Mining", "Machine Learning", "Mathmatics","Cloud Infrastruture", "Statistical Modeling", "Deep Learning"]
    },
    {
      degree: "Bachelor in Electronics and Communication Engineering",
      institution: "Tribhuvan University, Kathmandu",
      duration: "2016 - 2021",
      location: "Kathmandu, Nepal",
      highlights: [
        "Graduated Summa Cum Laude with 3.85 GPA",
        "Dean's List for 6 consecutive semesters",
        "Senior Capstone: Automatic Menu and Ordering System for Restaurant",
        "Member of ACM and IEEE student chapters"
      ],
      courses: ["Data Structures", "Algorithms", "Database Systems", "Digital Singal Processing","Wireless Communication","Big Data Technologies","Remote Sensing"]
    }
  ];

  const certifications = [
    "Python",
    "Machine Learning Fundamentals",
      "AWS Academy Machine Learning",
      "MS SQL",
      "Databricks Core Concept"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Strong academic foundation and continuous learning in data technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Professional Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm font-medium">{cert}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold">Continuous Learning:</span> Always pursuing new certifications to stay current with emerging technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
