import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import java from "../public/java.png"
import { Github, Linkedin, Mail, Phone, Code, Smartphone, GraduationCap, Briefcase, Lightbulb } from "lucide-react"
import Image from "next/image"
import calculator from "../public/Calculator.png"
import weather from "../public/Weather.png"
import dp from "../public/profile.png"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-card shadow-sm sticky top-0 z-50">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
         
          <span className="font-bold text-lg">Hassan </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {" "}
          {/* Added a div to group toggle and potential mobile menu */}
          <ThemeToggle />
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>
      </header>



      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden"
        >
          {/* <div
            className="absolute inset-0 z-0 opacity-10"
            style={{ backgroundImage: 'url("/placeholder.svg?height=800&width=1200")' }}
          ></div> */}
          <div className="container px-4 md:px-6 relative z-10 grid gap-8 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
                  Hi, I'm <span className="text-primary">M Hassan</span>
                </h1>
                <p className="max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
                  Crafting intuitive and high-performance mobile experiences as an{" "}
                  <span className="font-semibold text-primary-foreground">Android Developer</span> with a strong
                  foundation in{" "}
                  <span className="font-semibold text-primary-foreground">Computer Software Engineering</span>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  prefetch={false}
                >
                  View My Work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-primary text-primary px-8 text-base font-semibold shadow-md transition-transform hover:scale-105 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  prefetch={false}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src={dp}
                width="500"
                height="500"
                alt="hassan Profile"
                className="rounded-full object-cover border-4 border-primary shadow-2xl transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
     {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              I'm a dedicated fullstack developer with a passion for creating exceptional mobile. 
              With expertise spanning Android development and backend systems, I bring ideas to life 
              through clean, efficient code and intuitive user interfaces.
            </p>
          </div>

        <div className="grid md:grid-cols-2 gap-8">
  {/* Web & Mobile Development Card */}
  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Smartphone className="text-blue-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">Web & Mobile Development</h3>
    <p className="text-slate-600">
      Proficient in <strong>Java</strong> and <strong>Kotlin</strong> for Android, experienced with <strong>Firebase</strong> and <strong>XML layouts</strong> to build robust native and hybrid applications.
    </p>
  </div>

  {/* Other Expertise Card */}
  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Code className="text-green-600" size={24} />
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">Other Expertise</h3>
    <p className="text-slate-600">
      Strong foundation in <strong>Python</strong>, <strong>C</strong>, and <strong>Object-Oriented Programming (OOP)</strong> concepts, with a clear understanding of core programming principles and logic building.
    </p>
  </div>
</div>

        </div>
      </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">My Expertise</h2>
              <p className="text-muted-foreground md:text-lg lg:text-xl">
                A comprehensive overview of my technical proficiencies and tools.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <Smartphone className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">Android SDK</CardTitle>
              </Card>

             <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300  hover:bg-green-500">
  <img src="/kotlin-icon.svg" alt="Kotlin Logo" className="h-10 w-10 mb-3 group-hover:text-white" />
  <CardTitle className="text-lg font-semibold group-hover:text-white">Kotlin</CardTitle>
</Card>

            <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300  hover:bg-green-500">
  <Image src={java} alt="Java Logo" width={40} height={40} className="h-10 w-10 mb-3 group-hover:text-white" />
  <CardTitle className="text-lg font-semibold group-hover:text-white">Java</CardTitle>
</Card>

             
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <Code className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">XML Layouts</CardTitle>
              </Card>
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <Briefcase className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">REST APIs</CardTitle>
              </Card>
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <Github className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">Git</CardTitle>
              </Card>
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <Code className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">SQL/Room DB</CardTitle>
              </Card>
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <GraduationCap className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">OOP</CardTitle>
              </Card>
              <Card className="group flex flex-col items-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 hover:bg-green-500">
                <Code className="h-10 w-10 mb-3 text-primary group-hover:text-white" />
                <CardTitle className="text-lg font-semibold group-hover:text-white">Algorithms</CardTitle>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">My Recent Work</h2>
              <p className="text-muted-foreground md:text-lg lg:text-xl">
                Explore a selection of my Android development projects.
              </p>
            </div>
            <div className="flex   max-w-6xl mx-auto">
              <div className="grid gap-6 m-5 sm:grid-cols-1 md:grid-cols-2">
  {/* E-commerce Card */}
  <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <Image
      src={calculator}
      width="400"
      height="250"
      alt="E-commerce App"
      className="w-full h-56 object-cover"
    />
    <CardHeader className="p-6">
      <CardTitle className="text-2xl font-bold">Calculator</CardTitle>
      <CardDescription className="text-muted-foreground mt-2">
        A robust e-commerce application built with Kotlin and Jetpack Compose, featuring product listings,
        cart management, and secure checkout.
      </CardDescription>
    </CardHeader>
    <CardContent className="p-6 pt-0 flex flex-wrap gap-2">
      <Badge variant="secondary">Kotlin</Badge>
      <Badge variant="secondary">Java </Badge>
      <div className="flex gap-3 mt-4 w-full">
        <Link
          href="https://appetize.io/app/b_awms6qaqzobkvmyi6uqtlpbuxm?device=pixel7&osVersion=13.0&toolbar=true"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          prefetch={false}
        >
          View Demo
        </Link>
        <Link
          href="https://github.com/hashcoder01/Calculator"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          <Github className="h-4 w-4 mr-2" /> GitHub
        </Link>
      </div>
    </CardContent>
  </Card>

  {/* Recipe Finder Card */}
  <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <Image
      src={weather}
      width="400"
      height="250"
      alt="Recipe Finder"
      className="w-full h-56 object-cover"
    />
    <CardHeader className="p-6">
      <CardTitle className="text-2xl font-bold">Weather App</CardTitle>
      <CardDescription className="text-muted-foreground mt-2">
        An Android app that allows users to search for recipes, save favorites, and view detailed cooking
        instructions, integrated with a public API.
      </CardDescription>
    </CardHeader>
    <CardContent className="p-6 pt-0 flex flex-wrap gap-2">
      <Badge variant="secondary">Java</Badge>
      <Badge variant="secondary">XML Layouts</Badge>
      <Badge variant="secondary">kotlin</Badge>
      <Badge variant="secondary">API Integration</Badge>
      <div className="flex gap-3 mt-4 w-full">
        <Link
          href="https://appetize.io/app/b_mi72u7ttdk7ujofb3ye7ah7ioy?device=pixel7&osVersion=13.0&toolbar=true"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          prefetch={false}
        >
          View Demo
        </Link>
        <Link
          href="https://github.com/hashcoder01/Weather_App/actions"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          <Github className="h-4 w-4 mr-2" /> GitHub
        </Link>
      </div>
    </CardContent>
  </Card>
</div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Let's Connect</h2>
              <p className="text-muted-foreground md:text-lg lg:text-xl">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
              </p>
            </div>
            <div className="w-full max-w-xl mx-auto space-y-8">
              <form className="grid gap-6 bg-card p-8 rounded-lg shadow-lg">
                <Input type="text" placeholder="Your Name" className="w-full h-12 text-base" />
                <Input type="email" placeholder="Your Email" className="w-full h-12 text-base" />
                <Textarea placeholder="Your Message" className="w-full min-h-[120px] text-base" />
                <Button type="submit" className="w-full h-12 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
              <div className="flex justify-center gap-6 pt-4">
                <Link
  href="mailto:mhassanshahid01@gmail.com"
  className="text-muted-foreground hover:text-primary transition-colors"
  prefetch={false}
>
  <Mail className="h-8 w-8" />
  <span className="sr-only">Email</span>
</Link>
               
<Link
  href="https://wa.me/923324222627"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
  prefetch={false}
>
  <Phone className="h-8 w-8" />
  <span className="sr-only">WhatsApp</span>
</Link>
                <Link
                  href="https://github.com/hashcoder01"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammad-hassan-521a62371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-card text-muted-foreground">
      <Link href="https://github.com/itzMK678"> <p className="text-sm">&copy; M.MamoonKhaliq </p> </Link> 
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://profile-psi-blush.vercel.app/" className="text-sm hover:text-primary transition-colors" prefetch={false}>
           Creator|MK|
          </Link>
         
        </nav>
      </footer>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
