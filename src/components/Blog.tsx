
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Book } from 'lucide-react';

const Blog = () => {
  // Sample blog posts - in a real app, this would come from a database
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Data Pipelines with Apache Kafka",
      excerpt: "Learn how to design and implement robust data pipelines using Kafka for real-time data processing...",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      slug: "scalable-data-pipelines-kafka"
    },
    {
      id: 2,
      title: "Machine Learning Model Deployment with Azure ML",
      excerpt: "A comprehensive guide to deploying ML models in production using Azure Machine Learning services...",
      date: "2024-01-08",
      readTime: "12 min read",
      image: "/placeholder.svg",
      slug: "ml-deployment-azure"
    },
    {
      id: 3,
      title: "Data Visualization Best Practices with Power BI",
      excerpt: "Essential tips and techniques for creating effective dashboards and reports that tell compelling data stories...",
      date: "2024-01-01",
      readTime: "6 min read",
      image: "/placeholder.svg",
      slug: "powerbi-visualization-best-practices"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on data engineering, AI, and technology trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  <Book className="h-4 w-4 mr-2" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
