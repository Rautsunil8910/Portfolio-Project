
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Data Engineer with over 5 years of experience in building scalable data pipelines and implementing AI solutions. I specialize in transforming raw data into actionable insights that drive business decisions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise spans across cloud platforms like Azure and AWS, with a strong focus on real-time data processing using technologies like Apache Kafka and Spark. I'm constantly exploring the latest advancements in AI and machine learning to solve complex data challenges.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or exploring new hiking trails with my camera.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">rautsunil891@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">+1 (249) 989-4725</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Barrie, ON</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
