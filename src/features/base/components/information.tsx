import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {
  Users,
  Lightbulb,
  Target,
  Calendar,
  ArrowRight,
  ExternalLink,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function Information() {
  return (
    <>
      {/* Introduction Section */}
      <section id="introduction" className="bg-white py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Introduction
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              SKALE is dedicated to fostering innovation and engineering
              excellence at CSUSM.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Belonging and Collaboration - Building a strong engineering
                  community at CSUSM.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pivoting to better serve student goals and adapt to changing
                  needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Projects that maximize student growth and create meaningful
                  impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Student Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ensuring technical development and meaningful contributions
                  for all students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="bg-gray-50 py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              History
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              How SKALE came to be and our journey so far.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">University Rover Challenge</h3>
              <p className="text-muted-foreground">
                The University Rover Challenge is a head-to-head competition
                where universities from across the country compete against each
                other in a type of obstacle course. It is essentially a race in
                which many rovers complete several tasks and are awarded points
                based on efficiency.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Journey</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                    1
                  </div>
                  <p>
                    Alex Kwoka, Bob Semmer, & Coastal Community Foundation were
                    at full support with our ideas!
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                    2
                  </div>
                  <p>
                    The team started developing a proof of concept to help build
                    up the team's skills and gauge capacity to prepare for the
                    URC.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                    3
                  </div>
                  <p>
                    We showcased our progress with the rover and received even
                    more funding support from Alex Kwoka and Bob Semmer.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                    4
                  </div>
                  <p>
                    After thorough review, the team decided to pivot our project
                    focus from the URC to an Autonomous Navigation Golf Cart.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Pivot Section */}
      <section id="project-pivot" className="bg-white py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Project Pivot
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              Why we shifted our focus to autonomous navigation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Team Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The lack of Computer Aided Design (CAD) experience and
                  manufacturing capabilities causes a reliance on external
                  manufacturers and designers. This leads to delays and loss of
                  engagement for our team.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Types of Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Emphasize compatibility with our engineering community. The
                  URC relies heavily on CAD & Manufacturing, instead we'll focus
                  on autonomous navigation, artificial intelligence, distributed
                  systems, electronics, and electrical systems integration.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Industry & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Industry demand is high for the challenges we're focusing on.
                  Increasing the hireability of our students. Additionally, we
                  want the product of our efforts to impact our campus directly
                  rather than just receiving a ranking.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16">
            <Tabs defaultValue="autonomous">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="autonomous">
                  Autonomous Navigation Modules
                </TabsTrigger>
                <TabsTrigger value="rover">
                  University Rover Challenge
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="autonomous"
                className="mt-4 rounded-lg border p-6"
              >
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Highly compatible with current engineering departments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Aligns with student interests and coursework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Emphasizes in-house development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Focus on impact to the CSUSM community</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="rover" className="mt-4 rounded-lg border p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>Heavily relies on CAD & Manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>
                      Mechanical blockers cause a high risk of losing engagement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>Reliance on external sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <span>
                      Focus on building from scratch rather than functional
                      impact
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          <div className="bg-primary/5 mt-16 rounded-lg p-8">
            <h3 className="mb-4 text-2xl font-bold">
              SKALE: Student Knowledge and Applied Learning in Engineering
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                  ✓
                </div>
                <p>
                  Highlights our focus on building student success through
                  technical development
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                  ✓
                </div>
                <p>
                  Emphasizes our commitment to scaling up various student
                  organizations and building an engineering community at CSUSM
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                  ✓
                </div>
                <p>
                  Put your continued support forefront as we develop this
                  initiative!
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                  ✓
                </div>
                <p>
                  Establish the solidity of our team and open up marketing to a
                  wider community
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* New Engineering Space Section */}
      <section id="new-space" className="bg-gray-50 py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              New Engineering Space
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              Our new home for innovation and collaboration.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-muted relative h-[300px] overflow-hidden rounded-lg sm:h-[400px]">
              <div className="text-muted-foreground absolute inset-0 flex items-center justify-center">
                <MapPin className="h-24 w-24" />
                <span className="absolute bottom-4 left-4 rounded-md bg-white/80 px-3 py-1 text-sm font-medium">
                  ACD202
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Active Developments</h3>
                <p className="text-muted-foreground">
                  Establish a space to build the engineering student community
                  and give a home to various student organizations!
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Home for Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Give CSTEM students a place to belong. Keep students on
                      campus and increase development hours.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Led by Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Built by students for students!</p>
                  </CardContent>
                </Card>
                <Card className="sm:col-span-2">
                  <CardHeader>
                    <CardTitle>Provide Tooling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Provide various tooling and 3D printing lab for ongoing
                      projects and open innovation!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="bg-white py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Semester Goals
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              What we're working on for the rest of the semester.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Engineering Space</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We'll finish and polish the new engineering space (ACD202),
                  and open it to all of our student organizations. (I.e.
                  Robotics, GDSC, ACM, IEEE, Cybersecurity, etc)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Orders already sent out for multiple projects, including:</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Mapping drone</li>
                  <li>Rover Extension</li>
                  <li>Micromouse</li>
                  <li>Golf Cart Perception Kit</li>
                  <li>3D Printers</li>
                  <li>Engineering Space Design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  SHPE will host and maintain engineering workshops adjoined by
                  industry sponsors and volunteers. Concepts include CAD and PCB
                  design. These will supplement our projects through creating
                  custom parts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="bg-gray-50 py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Vision for Next Year
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              Our plans for Fall 2025 and Spring 2026.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Golf Cart</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We will provide a transportation service to our students
                  through an autonomous golf cart which will help students
                  navigate across campus.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Leadership Transition</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We will start transitioning leadership across our student
                  organizations to make sure our processes continue after we
                  graduate.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bridge the Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Integrate engineering faculty and administrators to bridge the
                  gap between coursework and engineering projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Budget Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Secure funding and plan budget for ongoing and future
                  projects, including the autonomous golf cart initiative.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 rounded-lg border p-8">
            <h3 className="mb-6 text-2xl font-bold">Budget Analysis</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Item</th>
                    <th className="px-4 py-2 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">3D Printing Lab</td>
                    <td className="px-4 py-2 text-right">$2,452.29</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Decorations</td>
                    <td className="px-4 py-2 text-right">$514.89</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Tools (drills, hex, etc.)</td>
                    <td className="px-4 py-2 text-right">$539.69</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">
                      RealSense Camera, Batteries, X650 Dev Kit
                    </td>
                    <td className="px-4 py-2 text-right">$1,850.96</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Robotics 360° Perception Kit</td>
                    <td className="px-4 py-2 text-right">$5,599.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Jetson Nano Board</td>
                    <td className="px-4 py-2 text-right">$439.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">SlamTec Lidar</td>
                    <td className="px-4 py-2 text-right">$1,039.39</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Intel Realsense Camera</td>
                    <td className="px-4 py-2 text-right">$646.99</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">
                      Motors, ToF, Batteries, Featherboard, etc.
                    </td>
                    <td className="px-4 py-2 text-right">$169.15</td>
                  </tr>
                  <tr className="border-b font-medium">
                    <td className="px-4 py-2">Total (without golf cart)</td>
                    <td className="px-4 py-2 text-right">~$13,251.36</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Electric Golf Cart Vehicle</td>
                    <td className="px-4 py-2 text-right">$4,000 – $10,000</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="px-4 py-2">Total (with golf cart)</td>
                    <td className="px-4 py-2 text-right">~$17,000 - $24,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get Involved
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              Whether you're a student, donor, or curious supporter, there are
              many ways to get involved with SKALE.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>For Students</CardTitle>
                <CardDescription>
                  Join our community and develop your engineering skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We welcome students from all backgrounds who are interested in
                  engineering, robotics, programming, and innovation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Users className="text-primary h-5 w-5" />
                    <span>Join our weekly meetings in ACD202</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lightbulb className="text-primary h-5 w-5" />
                    <span>Participate in workshops and projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="text-primary h-5 w-5" />
                    <span>
                      Gain hands-on experience with cutting-edge technology
                    </span>
                  </li>
                </ul>
                <Button className="w-full">Join as a Student</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For Supporters</CardTitle>
                <CardDescription>
                  Help us grow the engineering community at CSUSM
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your support helps us provide resources, tools, and
                  opportunities for engineering students at CSUSM.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Calendar className="text-primary h-5 w-5" />
                    <span>Attend our showcase events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="text-primary h-5 w-5" />
                    <span>Connect us with industry partners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="text-primary h-5 w-5" />
                    <span>Subscribe to our newsletter for updates</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Support Our Mission
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 text-center">
            <h3 className="mb-4 text-2xl font-bold">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
