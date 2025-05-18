import MyNavbar from "./myNavbar"
import { Hero } from "./hero"
import Team from "./team"
import { ContactForm } from "./contact-form"
import Footer from "./footer"
import { DatasetSummary } from "./dataset-summary"
import { DatasetDistribution } from "./dataset-distribution"
import { PathologyTable } from "./pathology-table"
import { pathologyData } from "@/data/pathology-data"
import { GenerationProcess } from "./generation-process"
import { ExampleReports } from "./example-reports"
import { AccessResources } from "./access-resources"
export default function ChameleonDataset() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <MyNavbar />
      {/* Hero Section */}
      <Hero />

      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12">
        <DatasetSummary />
      </div>

      {/* Dataset Details Section */}
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Dataset Details</h2>

        <DatasetDistribution />

        <div className="mx-auto grid md:grid-cols-2 gap-8 mb-8">
          <PathologyTable data={pathologyData} />
          <GenerationProcess />
        </div>

        <ExampleReports />
      </div>

      {/* Resources Section - After Example Reports */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-white">
        <AccessResources />
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
