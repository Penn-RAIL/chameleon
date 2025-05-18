import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
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

console.log(RECAPTCHA_SITE_KEY)

interface FormData {
  firstName: string;
  lastName: string;
  institution: string;
  email: string;
}

export function Resources() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    console.log("reCAPTCHA onChange triggered. Token:", token);
    setRecaptchaToken(token);
  };

  // const validateForm = () => {
  //   return (
  //     formData.firstName.trim() !== "" &&
  //     formData.lastName.trim() !== "" &&
  //     formData.institution.trim() !== "" &&
  //     formData.email.trim() !== "" &&
  //     recaptchaToken !== null
  //   );
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // if (validateForm()) {
    if(true) {
      console.log("Form submitted with data:", formData);
      console.log("reCAPTCHA token:", recaptchaToken);
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
    } else {
      console.log("Form validation failed or reCAPTCHA not completed.");
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
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-sky-700" />
            <span className="font-medium text-lg text-gray-900">Research Paper</span>
          </div>
          <Button className="w-full bg-sky-700 hover:bg-sky-800">Read the Paper</Button>
        </div>

        <div className="h-px bg-gray-200 my-4"></div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Download className="h-6 w-6 text-sky-600" />
            <span className="font-medium text-lg text-gray-900">Dataset</span>
          </div>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="w-full bg-sky-700 hover:bg-sky-800">Download the Data</Button>
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
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}