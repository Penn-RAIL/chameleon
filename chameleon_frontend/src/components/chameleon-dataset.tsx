import MyNavbar from "./myNavbar"
import { Hero } from "./hero"
import { About } from "./about"
import { Resources } from "./resources"
import Team from "./team"
import { ContactForm } from "./contact-form"
import Footer from "./footer"

export default function ChameleonDataset() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <MyNavbar />
      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <div className=" mx-auto px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section - Takes 2/3 of the width on desktop */}
          <div className="md:col-span-2">
            <About />
          </div>

          {/* Resources Card - Takes 1/3 of the width on desktop */}
          <div className="md:col-span-1">
            <Resources />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <Team />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  )
}
