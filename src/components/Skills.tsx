
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "Java", "R", "Scala"],
      color: "blue"
    },
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt", "Snowflake", "BigQuery"],
      color: "green"
    },
    {
      title: "Cloud Platforms",
      skills: ["Azure", "AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      color: "purple"
    },
    {
      title: "Analytics & BI",
      skills: ["Power BI", "Tableau", "Looker", "Excel", "Pandas", "NumPy"],
      color: "orange"
    },
    {
      title: "AI/ML Tools",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Jupyter", "OpenAI"],
      color: "pink"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL", "Cassandra"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700",
      pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-700",
      indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build robust data solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:shadow-md hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
