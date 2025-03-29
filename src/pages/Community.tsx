
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageCircle, Send } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("public");
  const [message, setMessage] = useState("");

  // Mock data for community chats
  const publicMessages = [
    {
      id: 1,
      user: "John Doe",
      avatar: "JD",
      message: "Has anyone completed the React course from Udemy?",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Sarah Smith",
      avatar: "SS",
      message: "Yes! I found it very helpful for understanding hooks.",
      time: "1 hour ago",
    },
    {
      id: 3,
      user: "Michael Brown",
      avatar: "MB",
      message: "I'm looking for recommendations on good DevOps courses.",
      time: "45 minutes ago",
    },
  ];

  const groupMessages = [
    {
      id: 1,
      group: "Web Development",
      user: "Alice Johnson",
      avatar: "AJ",
      message: "What's the best way to learn TypeScript?",
      time: "3 hours ago",
      members: 128,
    },
    {
      id: 2,
      group: "Data Science",
      user: "Robert Chen",
      avatar: "RC",
      message: "Anyone using Kaggle for their data science projects?",
      time: "1 hour ago",
      members: 94,
    },
    {
      id: 3,
      group: "Full Stack",
      user: "Emma Davis",
      avatar: "ED",
      message: "MERN stack vs MEAN stack for beginners?",
      time: "30 minutes ago",
      members: 156,
    },
  ];

  const privateMessages = [
    {
      id: 1,
      user: "James Wilson",
      avatar: "JW",
      message: "Hey, did you solve that LeetCode problem?",
      time: "4 hours ago",
      online: true,
    },
    {
      id: 2,
      user: "Olivia Martinez",
      avatar: "OM",
      message: "Can you review my portfolio website?",
      time: "Yesterday",
      online: false,
    },
    {
      id: 3,
      user: "David Lee",
      avatar: "DL",
      message: "Thanks for sharing that resource!",
      time: "2 days ago",
      online: true,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      console.log(`Sending message in ${activeTab} chat:`, message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                <Users className="inline mr-2 text-primary" />
                Community
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with fellow learners, join group discussions, and get help from the community.
                Share your journey and help others along the way.
              </p>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="public" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="public">Public Chat</TabsTrigger>
                  <TabsTrigger value="group">Group Chat</TabsTrigger>
                  <TabsTrigger value="private">Private Chat</TabsTrigger>
                </TabsList>

                <TabsContent value="public" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Public Discussions
                      </CardTitle>
                      <CardDescription>
                        Join the conversation with the entire community
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4 max-h-[400px] overflow-y-auto p-2">
                        {publicMessages.map((msg) => (
                          <div key={msg.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                              {msg.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-medium">{msg.user}</h4>
                                <span className="text-xs text-muted-foreground">{msg.time}</span>
                              </div>
                              <p className="text-sm">{msg.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex w-full gap-2">
                        <Textarea 
                          placeholder="Type your message here..." 
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage}>
                          <Send className="h-4 w-4" />
                          <span className="ml-2">Send</span>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="group" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="mr-2 h-5 w-5" />
                        Group Chats
                      </CardTitle>
                      <CardDescription>
                        Join topic-specific groups to discuss with like-minded learners
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto p-2">
                        {groupMessages.map((msg) => (
                          <Card key={msg.id} className="bg-muted/30">
                            <CardHeader className="py-3">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-base">{msg.group}</CardTitle>
                                <span className="text-xs text-muted-foreground flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  {msg.members} members
                                </span>
                              </div>
                            </CardHeader>
                            <CardContent className="py-2">
                              <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-xs">
                                  {msg.avatar}
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-medium text-sm">{msg.user}</h4>
                                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                                  </div>
                                  <p className="text-sm">{msg.message}</p>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="py-2">
                              <Button variant="outline" size="sm" className="w-full">
                                Join Group
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Users className="mr-2 h-4 w-4" />
                        Create New Group
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="private" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Private Messages
                      </CardTitle>
                      <CardDescription>
                        One-on-one conversations with other learners
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 max-h-[400px] overflow-y-auto p-2">
                        {privateMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer"
                          >
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                                {msg.avatar}
                              </div>
                              {msg.online && (
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="font-medium">{msg.user}</h4>
                                <span className="text-xs text-muted-foreground">{msg.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {msg.message}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Input
                        placeholder="Search contacts..."
                        className="w-full"
                      />
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
