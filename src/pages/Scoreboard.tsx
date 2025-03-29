
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Trophy, 
  Award, 
  Star, 
  BarChart, 
  Github, 
  Code,
  CheckCircle2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Scoreboard = () => {
  const [userCredits, setUserCredits] = useState(120);
  const [currentRank, setCurrentRank] = useState("Silver");
  const [nextRank, setNextRank] = useState("Gold");
  const [creditsToNextRank, setCreditsToNextRank] = useState(80);

  // Mock user achievements data
  const userAchievements = [
    {
      id: 1,
      platform: "LeetCode",
      achievement: "Solved 20 DSA Problems",
      credits: 80,
      date: "2023-12-15",
      verified: true,
    },
    {
      id: 2,
      platform: "Kaggle",
      achievement: "Completed Machine Learning Course",
      credits: 40,
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 3,
      platform: "GitHub",
      achievement: "Created 5 Public Repositories",
      credits: 25,
      date: "2024-02-20",
      verified: false,
    },
  ];

  // Mock leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      name: "Jane Cooper",
      avatar: "JC",
      credits: 580,
      rankTitle: "Diamond",
      achievements: 32,
    },
    {
      rank: 2,
      name: "Wade Warren",
      avatar: "WW",
      credits: 450,
      rankTitle: "Platinum",
      achievements: 28,
    },
    {
      rank: 3,
      name: "Esther Howard",
      avatar: "EH",
      credits: 420,
      rankTitle: "Platinum",
      achievements: 25,
    },
    {
      rank: 4,
      name: "Cameron Williamson",
      avatar: "CW",
      credits: 380,
      rankTitle: "Gold",
      achievements: 22,
    },
    {
      rank: 5,
      name: "Brooklyn Simmons",
      avatar: "BS",
      credits: 350,
      rankTitle: "Gold",
      achievements: 20,
    },
    {
      rank: 22,
      name: "You",
      avatar: "YO",
      credits: 120,
      rankTitle: "Silver",
      achievements: 8,
      isCurrentUser: true,
    },
  ];

  // Rank progression data
  const ranks = [
    { name: "Bronze", minCredits: 0, color: "text-amber-700" },
    { name: "Silver", minCredits: 100, color: "text-gray-400" },
    { name: "Gold", minCredits: 200, color: "text-yellow-500" },
    { name: "Platinum", minCredits: 350, color: "text-cyan-500" },
    { name: "Diamond", minCredits: 500, color: "text-purple-500" },
    { name: "Master", minCredits: 750, color: "text-red-500" },
  ];

  // Calculate progression percentage to next rank
  const progressToNextRank = Math.min(
    Math.floor((userCredits / (userCredits + creditsToNextRank)) * 100),
    100
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                <Trophy className="inline mr-2 text-primary" />
                Scoreboard
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Track your progress, earn credits for completed courses and 
                solved problems, and compete with others on the leaderboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Your Credits
                  </CardTitle>
                  <CardDescription>
                    Total credits earned so far
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex items-baseline justify-between">
                    <div className="text-4xl font-bold">{userCredits}</div>
                    <div className="text-sm text-muted-foreground">
                      credits
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary" />
                    Current Rank
                  </CardTitle>
                  <CardDescription>
                    Your position in the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex items-baseline justify-between">
                    <div className="flex items-center">
                      <div className="text-4xl font-bold mr-2">{currentRank}</div>
                      <Trophy className={`h-8 w-8 ${ranks.find(r => r.name === currentRank)?.color}`} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Rank #{leaderboardData.find(u => u.isCurrentUser)?.rank || 0}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <BarChart className="mr-2 h-5 w-5 text-primary" />
                    Next Rank
                  </CardTitle>
                  <CardDescription>
                    Progress towards {nextRank}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{userCredits} / {userCredits + creditsToNextRank} credits</span>
                      <span className="text-sm font-medium">{progressToNextRank}%</span>
                    </div>
                    <Progress value={progressToNextRank} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      Need {creditsToNextRank} more credits to reach {nextRank}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    Your Achievements
                  </CardTitle>
                  <CardDescription>
                    Credits earned from completed tasks and courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Platform</TableHead>
                        <TableHead>Achievement</TableHead>
                        <TableHead className="text-right">Credits</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userAchievements.map((achievement) => (
                        <TableRow key={achievement.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              {achievement.platform === "LeetCode" && <Code className="h-4 w-4 mr-2 text-orange-500" />}
                              {achievement.platform === "Kaggle" && <BarChart className="h-4 w-4 mr-2 text-blue-500" />}
                              {achievement.platform === "GitHub" && <Github className="h-4 w-4 mr-2 text-gray-700" />}
                              {achievement.platform}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {achievement.achievement}
                              {achievement.verified && <CheckCircle2 className="h-3 w-3 ml-2 text-green-500" />}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">{achievement.credits}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="sm">
                      Add New Achievement
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-primary" />
                    Leaderboard
                  </CardTitle>
                  <CardDescription>
                    Top performers in the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead className="text-right">Credits</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leaderboardData.map((user) => (
                        <TableRow 
                          key={user.rank} 
                          className={user.isCurrentUser ? "bg-primary/10 font-medium" : ""}
                        >
                          <TableCell>
                            {user.rank <= 3 ? (
                              <div className="flex items-center">
                                <Trophy 
                                  className={`h-4 w-4 mr-1 ${
                                    user.rank === 1 
                                      ? "text-yellow-500" 
                                      : user.rank === 2 
                                      ? "text-gray-400" 
                                      : "text-amber-700"
                                  }`} 
                                />
                                {user.rank}
                              </div>
                            ) : (
                              user.rank
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium text-xs mr-2">
                                {user.avatar}
                              </div>
                              {user.name}
                              {user.isCurrentUser && (
                                <span className="ml-2 text-xs bg-primary/20 text-primary py-0.5 px-2 rounded-full">
                                  You
                                </span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span className={`${
                                ranks.find(r => r.name === user.rankTitle)?.color
                              }`}>
                                {user.rankTitle}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">{user.credits}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="sm">
                      View Full Leaderboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Rank Progression</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {ranks.map((rank, index) => (
                  <Card 
                    key={rank.name}
                    className={`text-center ${currentRank === rank.name ? "border-primary border-2" : ""}`}
                  >
                    <CardHeader className="py-4 px-3">
                      <CardTitle className={`text-lg flex flex-col items-center ${rank.color}`}>
                        <Trophy className="h-8 w-8 mb-2" />
                        {rank.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-xs text-muted-foreground mb-1">Required Credits</p>
                      <p className="font-semibold">{rank.minCredits}+</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scoreboard;
