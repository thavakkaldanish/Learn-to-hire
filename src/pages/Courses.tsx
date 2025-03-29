
import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, BookOpen, Award, Clock, DollarSign, Star } from "lucide-react";

// Placeholder course data
const COURSES = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    platform: "Udemy",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    category: "Web Development",
    subcategory: "Full Stack",
    price: "Paid",
    certification: "Yes",
    rating: 4.8,
    approvedBy: "Industry",
    duration: "16 weeks",
    level: "Beginner to Intermediate"
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    platform: "Coursera",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Data Science",
    subcategory: "Machine Learning",
    price: "Free",
    certification: "Paid",
    rating: 4.9,
    approvedBy: "AICTE",
    duration: "12 weeks",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "DevOps Engineering Course",
    platform: "edX",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "DevOps",
    subcategory: "CI/CD",
    price: "Paid",
    certification: "Yes",
    rating: 4.7,
    approvedBy: "Industry",
    duration: "8 weeks",
    level: "Advanced"
  },
  {
    id: 4,
    title: "SQL for Data Analysis",
    platform: "Kaggle",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80",
    category: "Data Analytics",
    subcategory: "SQL",
    price: "Free",
    certification: "Yes",
    rating: 4.6,
    approvedBy: "None",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: 5,
    title: "Frontend Development with React",
    platform: "Frontend Masters",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Web Development",
    subcategory: "Frontend",
    price: "Paid",
    certification: "No",
    rating: 4.9,
    approvedBy: "Industry",
    duration: "10 weeks",
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Backend Development with Node.js",
    platform: "Pluralsight",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Web Development",
    subcategory: "Backend",
    price: "Paid",
    certification: "Yes",
    rating: 4.7,
    approvedBy: "None",
    duration: "8 weeks",
    level: "Intermediate"
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(COURSES);
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    certification: "",
    approvedBy: ""
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const results = COURSES.filter(course => {
      // Search filter
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = filters.category === "" || course.category === filters.category;
      
      // Price filter
      const matchesPrice = filters.price === "" || course.price === filters.price;
      
      // Certification filter
      const matchesCertification = filters.certification === "" || 
                                 (filters.certification === "Yes" && course.certification !== "No") ||
                                 (filters.certification === "No" && course.certification === "No");
      
      // Approved By filter
      const matchesApprovedBy = filters.approvedBy === "" || course.approvedBy === filters.approvedBy;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesCertification && matchesApprovedBy;
    });
    
    setFilteredCourses(results);
  }, [searchTerm, filters]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      price: "",
      certification: "",
      approvedBy: ""
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Discover Your Perfect Learning Path</h1>
              <p className="text-xl text-white/80 mb-10">
                Explore curated courses from top platforms, filtered to meet your specific needs
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for courses, platforms, or topics..."
                  className="pl-10 py-6 text-gray-900 rounded-lg w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters & Results */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
                <p className="text-gray-600">
                  {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <Button 
                  variant="outline" 
                  className="flex items-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                
                {Object.values(filters).some(value => value !== "") && (
                  <Button 
                    variant="ghost" 
                    onClick={clearFilters}
                    className="ml-2 text-sm"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
            
            {/* Filter chips */}
            {Object.entries(filters).some(([_, value]) => value !== "") && (
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(filters).map(([key, value]) => {
                  if (value === "") return null;
                  return (
                    <Badge 
                      key={key} 
                      variant="secondary"
                      className="px-3 py-1 flex items-center gap-1"
                    >
                      {key}: {value}
                      <button 
                        onClick={() => handleFilterChange(key, "")}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        &times;
                      </button>
                    </Badge>
                  );
                })}
              </div>
            )}
            
            {/* Filter panel */}
            {showFilters && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in">
                <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <Select
                      value={filters.category}
                      onValueChange={(value) => handleFilterChange("category", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Categories</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Data Science">Data Science</SelectItem>
                        <SelectItem value="DevOps">DevOps</SelectItem>
                        <SelectItem value="Data Analytics">Data Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price
                    </label>
                    <Select
                      value={filters.price}
                      onValueChange={(value) => handleFilterChange("price", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Prices" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Prices</SelectItem>
                        <SelectItem value="Free">Free</SelectItem>
                        <SelectItem value="Paid">Paid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Certification
                    </label>
                    <Select
                      value={filters.certification}
                      onValueChange={(value) => handleFilterChange("certification", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Certifications" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Certifications</SelectItem>
                        <SelectItem value="Yes">Offers Certificate</SelectItem>
                        <SelectItem value="No">No Certificate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approved By
                    </label>
                    <Select
                      value={filters.approvedBy}
                      onValueChange={(value) => handleFilterChange("approvedBy", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Approvals" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Approvals</SelectItem>
                        <SelectItem value="AICTE">AICTE</SelectItem>
                        <SelectItem value="Industry">Industry</SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            
            {/* Course cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden card-hover border border-gray-100">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={course.price === "Free" ? "bg-green-500" : "bg-blue-500"}>
                          {course.price}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="mb-2">
                          {course.category}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{course.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{course.platform}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{course.certification !== "No" ? "Certificate" : "No Certificate"}</span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button className="w-full">View Course</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any courses matching your search criteria.
                  </p>
                  <Button onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
