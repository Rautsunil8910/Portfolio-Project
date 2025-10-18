
import React from 'react';
import { Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const handleDownloadResume = () => {
    // Create a sample PDF URL - in a real app, this would be your actual PDF file
    const pdfUrl = '/Resume Sunil Raut.pdf';
    window.open(pdfUrl, '_blank');
  };

  const handleViewResume = () => {
    // Create a sample PDF URL - in a real app, this would be your actual PDF file
    const pdfUrl = '/Resume Sunil Raut.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional experience and skills
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 mb-8">
          {/* Resume Preview */}
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-6 mb-8 shadow-inner">
            <div className="aspect-[8.5/11] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Resume Preview</h3>
                <p className="text-gray-600 dark:text-gray-400">Click below to view or download the full resume</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleViewResume}
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-200 border-2 border-blue-600 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Full Resume
            </Button>
          </div>

          {/* Resume Highlights */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Last updated: December 2024 • Available in PDF format
        </p>
      </div>
    </section>
  );
};

export default Resume;
