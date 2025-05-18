import { useState } from "react";
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import { DownloadForm } from "./DownloadForm";

const API_URL = import.meta.env.VITE_BACKEND_URL;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;


interface FormData {
    firstName: string;
    lastName: string;
    institution: string;
    email: string;
  }
  

export function AccessResources() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    console.log("reCAPTCHA onChange triggered. Token:", token);
    setRecaptchaToken(token);
  };

  const handleAgreementChange = (checked: boolean) => {
    setAgreedToTerms(checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if(agreedToTerms) {
      console.log("Form submitted with data:", formData);
      console.log("reCAPTCHA token:", recaptchaToken);
      console.log("Agreed to terms:", agreedToTerms);
      await handleDownload();
      setIsModalOpen(false);
      setFormData({
        firstName: "",
        lastName: "",
        institution: "",
        email: "",
      });
      setRecaptchaToken(null);
      setIsFormSubmitted(false);
      setAgreedToTerms(false);
    } else {
      console.log("Form validation failed, reCAPTCHA not completed, or terms not agreed.");
      if (!agreedToTerms) {
        console.log("Terms not agreed.");
      }
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(`${API_URL}/download/chameleonData`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      console.log("HTTP status:", response.status);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      a.download = "syntheticGeneratedReports1.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err)
    }
  }

  return (
    <Card className="shadow-lg border-0 overflow-hidden pt-0">
      <div className="bg-sky-700 p-6">
        <h2 className="text-2xl font-bold text-white">Resources</h2>
      </div>

      <CardContent className="p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Research Paper</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Read the complete methodology and findings in our published research paper.
            </p>
            <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
              <ExternalLink className="mr-2 h-4 w-4" />
              Read the Paper
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-100 p-3 rounded-full">
                <Download className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Dataset</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Download the complete dataset of 10,000 synthetic chest CT radiology reports.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
                 <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download the Data
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[850px]">
              <DownloadForm 
                formData={formData}
                recaptchaToken={recaptchaToken}
                isFormSubmitted={isFormSubmitted}
                recaptchaSiteKey={RECAPTCHA_SITE_KEY}
                handleInputChange={handleInputChange}
                handleRecaptchaChange={handleRecaptchaChange}
                onSubmit={handleSubmit}
                agreedToTerms={agreedToTerms}
                onAgreementChange={handleAgreementChange}
              />
            </DialogContent>
          </Dialog>


          </div>
        </div>
      </CardContent>
    </Card>
  )
}
