
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      responsibilities: [
        "Led a team of 5 engineers in designing and implementing real-time data pipelines processing 10TB+ daily",
        "Architected cloud-native solutions on Azure, reducing infrastructure costs by 40%",
        "Implemented MLOps practices using MLflow and Kubernetes, improving model deployment efficiency by 75%",
        "Mentored junior engineers and established data engineering best practices across the organization"
      ],
      technologies: ["Python", "Azure", "Apache Spark", "Kubernetes", "MLflow", "Terraform"]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Dynamics",
      location: "Seattle, WA",
      duration: "2020 - 2022",
      responsibilities: [
        "Developed and maintained ETL pipelines using Apache Airflow and Python",
        "Built real-time streaming applications with Apache Kafka and Spark Streaming",
        "Optimized data warehouse performance on Snowflake, improving query speed by 60%",
        "Collaborated with data scientists to productionize ML models using Docker and AWS"
      ],
      technologies: ["Python", "Apache Airflow", "Apache Kafka", "Snowflake", "Docker", "AWS"]
    },
    {
      title: "Junior Data Analyst",
      company: "Analytics Pro",
      location: "Portland, OR",
      duration: "2019 - 2020",
      responsibilities: [
        "Created interactive dashboards and reports using Power BI and Tableau",
        "Performed data analysis and statistical modeling using Python and R",
        "Automated reporting processes, reducing manual work by 80%",
        "Supported business stakeholders with ad-hoc analysis and insights"
      ],
      technologies: ["Python", "R", "Power BI", "Tableau", "SQL", "Excel"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Building impactful data solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-16 md:ml-0 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
