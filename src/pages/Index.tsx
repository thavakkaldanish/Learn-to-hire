
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { 
  Briefcase, 
  GraduationCap, 
  BarChart, 
  MessageCircle, 
  Award, 
  TrendingUp,
  FileText,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Curated Learning Paths",
      description:
        "Access our carefully curated collection of courses from top platforms, filtered by category and certification options."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Skill Gap Analysis",
      description:
        "Compare your current skills with job market demands to identify and bridge gaps in your knowledge."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Community Engagement",
      description:
        "Connect with peers, mentors, and industry professionals through private, group, and public chats."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Credit System",
      description:
        "Earn credits by completing courses and solving problems on platforms like LeetCode and Kaggle."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Rank Progression",
      description:
        "Track your progress through our ranking system and unlock new levels as you accumulate credits."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Resume Builder",
      description:
        "Create professional resumes showcasing your skills, certifications, and achievements in just minutes."
    }
  ];

  const stats = [
    { number: "500+", label: "Curated Courses" },
    { number: "50+", label: "Learning Platforms" },
    { number: "10k+", label: "Active Users" },
    { number: "92%", label: "Job Placement Rate" }
  ];

  const testimonials = [
    {
      quote:
        "LearnHire completely transformed my career journey. The skill gap analysis pointed me in the right direction, and I landed my dream job within 3 months!",
      name: "Sarah Johnson",
      role: "Frontend Developer at TechCorp"
    },
    {
      quote:
        "The AI roadmap generator saved me countless hours of research. I went from knowing nothing about data science to securing a junior role in just 6 months.",
      name: "Michael Chang",
      role: "Junior Data Scientist"
    },
    {
      quote:
        "The credit system kept me motivated throughout my learning journey. Being able to track my progress and see my rank improve was incredibly satisfying.",
      name: "Priya Patel",
      role: "Full Stack Developer"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-1/2 md:pr-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">Learn</span>, <span className="text-gradient">Grow</span>, and{" "}
                <span className="text-gradient">Get Hired</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Your all-in-one platform to master in-demand skills, showcase your achievements, and land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="text-md px-8">Get Started</Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="text-md px-8">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                    alt="Learning platform" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blob decorations */}
        <div className="hidden md:block absolute top-1/4 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="hidden md:block absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      </section>
      
      {/* Stats Section */}
      <section className="-mt-10 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-6 px-4 md:py-8 md:px-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-1">{stat.number}</h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Features Designed for Learning Success</h2>
            <p className="text-lg text-gray-700">
              Our platform brings together everything you need to learn effectively, track your progress, and succeed in your career journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 card-hover border border-gray-100"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-700">
              A simple process designed to maximize your learning and career outcomes
            </p>
          </div>
          
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Assess Your Skills</h3>
                  <p className="text-gray-600">
                    Take our comprehensive skill assessment and analysis to identify your strengths and areas for improvement.
                  </p>
                </div>
                <div className="md:mx-auto z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <img 
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Skill assessment" 
                    className="rounded-lg shadow-lg w-full h-52 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Your Personalized Roadmap</h3>
                  <p className="text-gray-600">
                    Receive a custom learning roadmap with curated courses and resources tailored to your goals.
                  </p>
                </div>
                <div className="md:mx-auto z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                  <img 
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Personalized roadmap" 
                    className="rounded-lg shadow-lg w-full h-52 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Learn and Earn Credits</h3>
                  <p className="text-gray-600">
                    Complete courses, solve challenges, and earn credits that showcase your achievements.
                  </p>
                </div>
                <div className="md:mx-auto z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Learning and credits" 
                    className="rounded-lg shadow-lg w-full h-52 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Your Professional Profile</h3>
                  <p className="text-gray-600">
                    Build a standout resume and showcase your credentials to potential employers.
                  </p>
                </div>
                <div className="md:mx-auto z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Professional profile" 
                    className="rounded-lg shadow-lg w-full h-52 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
            <p className="text-lg text-gray-700">
              Join thousands of learners who've transformed their careers with LearnHire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-8 card-hover border border-gray-100 flex flex-col"
              >
                <div className="mb-4 text-primary">
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are mastering in-demand skills and landing their dream jobs through LearnHire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-primary font-medium px-8 bg-white hover:bg-gray-100">
                  Get Started Now
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-medium px-8">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About LearnHire</h2>
              <p className="text-lg text-gray-700 mb-6">
                LearnHire was founded with a simple mission: to bridge the gap between education and employment in the tech industry.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that everyone should have access to high-quality education and career opportunities, regardless of their background or location. Our platform brings together curated learning resources, community support, and tools to showcase your skills to potential employers.
              </p>
              <p className="text-gray-600 mb-6">
                What sets us apart is our integrated approach: we don't just help you learn—we help you demonstrate your capabilities, connect with peers and mentors, and position yourself for career success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Learner-First Philosophy</h4>
                    <p className="text-sm text-gray-600">Every feature designed with your learning journey in mind</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry-Aligned</h4>
                    <p className="text-sm text-gray-600">Learning paths developed with input from top tech companies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Supportive Community</h4>
                    <p className="text-sm text-gray-600">Learn alongside peers who share your goals and challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Innovation</h4>
                    <p className="text-sm text-gray-600">Regularly updating our platform based on user feedback</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-30"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Our team" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <p className="font-semibold text-gray-900 mb-2">Our Vision</p>
                <p className="text-gray-600 text-sm">
                  To create a world where everyone has the opportunity to learn valuable skills and secure meaningful employment in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
