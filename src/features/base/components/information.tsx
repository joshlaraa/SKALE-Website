"use client";

import { useState, useEffect } from "react";
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
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/acd202Presentation.png",
    "/acd202Handshake.png",
    "/acd202Hackthon.png",
    "acd202Equipment.png",
    "/acd202Drone.png",
    "/acd202.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            index === currentIndex
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Engineering space slide ${index + 1}`}
            width={600}
            height={400}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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
              <h3 className="text-2xl font-bold">
                University Rover Challenge Idea
              </h3>
              <p className="text-muted-foreground">
                The University Rover Challenge is a head-to-head competition
                where universities from across the country compete against each
                other in a type of obstacle course. It is essentially a race in
                which many rovers complete several tasks and are awarded points
                based on efficiency.
              </p>
              <div className="mt-4 overflow-hidden rounded-lg">
                <video
                  src="/roverObstacle_rotated.mp4"
                  controls
                  className="w-full"
                  poster="/placeholder.svg?height=400&width=600"
                  preload="none"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
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
                <li className="flex gap-3">
                  <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                    5
                  </div>
                  <p>
                    The team presented the idea of the Autonomous Navigation
                    Golf Cart to Bob, Alex, and potential new supportors. They
                    were all very impressed with our transition and thought it
                    was a great idea!
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white">
                    6
                  </div>
                  <p>
                    With school year coming to an end, Bob and Alex wanted to do
                    one last check in with the team and introduce Richard and
                    Bleema to the team.
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
                  Autonomous Golf Cart
                </TabsTrigger>
                <TabsTrigger value="rover">University Rover</TabsTrigger>
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
            <div className="relative h-[300px] overflow-hidden rounded-lg bg-black sm:h-[400px] lg:h-[500px]">
              <div className="relative h-full w-full">
                <Slideshow />
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
                <a
                  href="https://teams.microsoft.com/l/team/19%3ANiGSUmdX_Cu_JOd3XvXz88c71NzpFBMQdwPhglBDJmo1%40thread.tacv2/conversations?groupId=6dbd5285-27df-4696-bc1b-d7eaee08a069&tenantId=128753ab-cb28-4f82-9733-2b9b91d2aca9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">Join as a Student</Button>
                </a>
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
                    <span>Attend our showcase presentations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="text-primary h-5 w-5" />
                    <span>Connect us with industry partners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="text-primary h-5 w-5" />
                    <span>Reach out to mentor or sponsor student projects</span>
                  </li>
                </ul>
                <a
                  href="mailto:jmorales@csusm.edu,jmorris@csusm.edu?cc=larag001@csusm.edu,spurl004@csusm.edu,telle056@csusm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full" variant="outline">
                    Support Our Mission
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto w-full max-w-full px-4 md:max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">SKALE</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} SKALE - Student Knowledge and
              Applied Learning in Engineering at CSUSM
            </p>
            <div className="flex gap-6">
              <a className="text-muted-foreground hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a className="text-muted-foreground hover:text-primary text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
