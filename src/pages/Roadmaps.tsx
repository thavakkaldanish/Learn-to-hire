import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Info, Lightbulb, TerminalSquare, Code2, Globe, Database, BarChart, Layers } from "lucide-react";

const Roadmaps = () => {
  const [selectedCareer, setSelectedCareer] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleGenerateRoadmap = () => {
    if (selectedCareer) {
      setShowRoadmap(true);
    }
  };

  const careerOptions = [
    { value: "frontend", label: "Frontend Development", icon: <Globe className="h-5 w-5" /> },
    { value: "backend", label: "Backend Development", icon: <Database className="h-5 w-5" /> },
    { value: "fullstack", label: "Full Stack Development", icon: <Layers className="h-5 w-5" /> },
    { value: "devops", label: "DevOps Engineering", icon: <TerminalSquare className="h-5 w-5" /> },
    { value: "datascience", label: "Data Science", icon: <BarChart className="h-5 w-5" /> },
    { value: "ai", label: "AI & Machine Learning", icon: <Lightbulb className="h-5 w-5" /> }
  ];

  // Sample roadmap data (in a real app, this would be dynamic based on AI recommendations)
  const roadmapData = {
    frontend: {
      title: "Frontend Development Roadmap",
      description: "A structured path to become a proficient frontend developer",
      stages: [
        {
          level: "Beginner",
          skills: ["HTML", "CSS", "JavaScript Basics", "Responsive Design"],
          recommendedCourses: [
            { name: "HTML & CSS Crash Course", platform: "freeCodeCamp", free: true },
            { name: "JavaScript Essentials", platform: "Udemy", free: false }
          ]
        },
        {
          level: "Intermediate",
          skills: ["Advanced JavaScript", "React.js", "State Management", "API Integration"],
          recommendedCourses: [
            { name: "React - The Complete Guide", platform: "Udemy", free: false },
            { name: "JavaScript: Understanding the Weird Parts", platform: "Coursera", free: false }
          ]
        },
        {
          level: "Advanced",
          skills: ["Performance Optimization", "Testing", "Advanced React Patterns", "TypeScript"],
          recommendedCourses: [
            { name: "Advanced React Patterns", platform: "Frontend Masters", free: false },
            { name: "TypeScript for React Developers", platform: "Scrimba", free: true }
          ]
        }
      ]
    },
    // Other career paths would have similar structures
    backend: {
      title: "Backend Development Roadmap",
      description: "Master server-side programming and database management",
      stages: [
        {
          level: "Beginner",
          skills: ["Programming Fundamentals", "Basic Database Concepts", "HTTP & REST APIs", "Server Basics"],
          recommendedCourses: [
            { name: "Introduction to Node.js", platform: "Codecademy", free: true },
            { name: "SQL Fundamentals", platform: "Khan Academy", free: true }
          ]
        },
        {
          level: "Intermediate",
          skills: ["Express.js/Django/Rails", "Database Design", "Authentication", "API Design"],
          recommendedCourses: [
            { name: "REST API Design with Node.js", platform: "Udemy", free: false },
            { name: "MongoDB - The Complete Developer's Guide", platform: "Pluralsight", free: false }
          ]
        },
        {
          level: "Advanced",
          skills: ["Microservices", "Caching", "Message Queues", "Performance Tuning"],
          recommendedCourses: [
            { name: "Microservices Architecture", platform: "edX", free: false },
            { name: "System Design for Web Developers", platform: "Frontend Masters", free: false }
          ]
        }
      ]
    },
    fullstack: {
      title: "Full Stack Development Roadmap",
      description: "Build complete web applications from front to back",
      stages: [
        {
          level: "Beginner",
          skills: ["HTML/CSS", "JavaScript", "Basic Backend Language", "Simple Databases"],
          recommendedCourses: [
            { name: "The Web Developer Bootcamp", platform: "Udemy", free: false },
            { name: "CS50's Web Programming", platform: "edX", free: true }
          ]
        },
        {
          level: "Intermediate",
          skills: ["React/Angular/Vue", "Node.js/Express", "SQL/NoSQL Databases", "RESTful APIs"],
          recommendedCourses: [
            { name: "MERN Stack Front To Back", platform: "Udemy", free: false },
            { name: "Full Stack Open", platform: "University of Helsinki", free: true }
          ]
        },
        {
          level: "Advanced",
          skills: ["GraphQL", "Docker", "Continuous Integration", "Advanced State Management"],
          recommendedCourses: [
            { name: "Advanced Web Development", platform: "Pluralsight", free: false },
            { name: "AWS for Developers", platform: "A Cloud Guru", free: false }
          ]
        }
      ]
    },
    // Other roadmaps would be defined similarly
    devops: {
      title: "DevOps Engineering Roadmap",
      description: "Learn to streamline development and operations",
      stages: []
    },
    datascience: {
      title: "Data Science Roadmap",
      description: "Master data analysis and machine learning",
      stages: []
    },
    ai: {
      title: "AI & Machine Learning Roadmap",
      description: "Build intelligent systems and models",
      stages: []
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold text-gradient mb-4">AI Roadmap Generator</h1>
            <p className="text-lg text-gray-600 mb-8">
              Get a personalized learning roadmap based on your career goals
            </p>
            
            <div className="max-w-md mx-auto glass-card p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Select Your Career Path</h2>
              <div className="space-y-4">
                <Select
                  value={selectedCareer}
                  onValueChange={(value) => {
                    setSelectedCareer(value);
                    setShowRoadmap(false);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a career path" />
                  </SelectTrigger>
                  <SelectContent>
                    {careerOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="flex items-center">
                        <div className="flex items-center">
                          {option.icon}
                          <span className="ml-2">{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button 
                  onClick={handleGenerateRoadmap} 
                  disabled={!selectedCareer}
                  className="w-full"
                >
                  Generate Roadmap
                </Button>
              </div>
            </div>
          </div>
          
          {showRoadmap && selectedCareer && roadmapData[selectedCareer] && (
            <div className="max-w-4xl mx-auto my-8 animate-fade-in">
              <Card className="border-t-4 border-t-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{roadmapData[selectedCareer].title}</CardTitle>
                  <CardDescription>{roadmapData[selectedCareer].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 bg-blue-50">
                    <Info className="h-5 w-5" />
                    <AlertTitle>Personalized Learning Path</AlertTitle>
                    <AlertDescription>
                      This roadmap is tailored for your selected career path. Follow the stages from beginner to advanced.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-8">
                    {roadmapData[selectedCareer].stages.map((stage, index) => (
                      <div key={index} className="relative">
                        {index > 0 && (
                          <div className="absolute left-6 top-0 -mt-6 h-6 w-0.5 bg-gray-200"></div>
                        )}
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <span className="text-primary font-bold">{index + 1}</span>
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-lg font-bold text-gray-900">{stage.level}</h3>
                            
                            <div className="mt-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                              <h4 className="font-medium text-gray-700 mb-2">Key Skills:</h4>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {stage.skills.map((skill, i) => (
                                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              
                              <h4 className="font-medium text-gray-700 mb-2">Recommended Courses:</h4>
                              <ul className="space-y-2">
                                {stage.recommendedCourses.map((course, i) => (
                                  <li key={i} className="flex items-center justify-between bg-white p-2 rounded border">
                                    <div>
                                      <span className="font-medium">{course.name}</span>
                                      <span className="text-sm text-gray-500 ml-2">by {course.platform}</span>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded ${course.free ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                      {course.free ? 'Free' : 'Paid'}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t">
                  <div className="w-full text-center">
                    <p className="text-gray-500 text-sm">
                      This roadmap is a recommendation based on current industry standards and practices.
                    </p>
                    <Button variant="outline" className="mt-2">
                      <Code2 className="mr-2 h-4 w-4" />
                      View All Courses
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Roadmaps;
