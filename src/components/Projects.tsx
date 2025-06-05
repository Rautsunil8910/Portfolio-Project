
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Built a real-time analytics platform processing 1M+ events per second using Kafka, Spark, and React. Features include real-time visualizations and anomaly detection.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Apache Kafka", "Apache Spark", "React", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "ML-Powered Data Pipeline",
      description: "Designed and implemented an automated ML pipeline for predictive analytics using Azure ML and Python. Reduced model deployment time by 80%.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      technologies: ["Python", "Azure ML", "TensorFlow", "Docker", "Kubernetes"],
      githubUrl: "https://github.com",
      liveUrl: null
    },
    {
      title: "Customer Segmentation Engine",
      description: "Developed a customer segmentation system using unsupervised learning algorithms. Improved marketing campaign effectiveness by 45%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Power BI", "SQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "ETL Automation Framework",
      description: "Created a scalable ETL framework using Apache Airflow and dbt. Reduced data processing time by 60% and improved data quality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Apache Airflow", "dbt", "Snowflake", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions that drive business value through data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
