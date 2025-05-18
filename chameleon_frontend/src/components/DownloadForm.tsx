import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  firstName: string;
  lastName: string;
  institution: string;
  email: string;
}

interface DownloadFormProps {
  formData: FormData;
  recaptchaToken: string | null;
  isFormSubmitted: boolean;
  recaptchaSiteKey: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRecaptchaChange: (token: string | null) => void;
  onSubmit: (e: React.FormEvent) => void; // Renamed from handleSubmit to onSubmit to avoid confusion
}

export function DownloadForm({
  formData,
  recaptchaToken,
  isFormSubmitted,
  recaptchaSiteKey,
  handleInputChange,
  handleRecaptchaChange,
  onSubmit,
}: DownloadFormProps) {
    console.log(recaptchaToken, recaptchaSiteKey, handleRecaptchaChange)
  return (
    <form onSubmit={onSubmit}>
      <DialogHeader>
        <DialogTitle>Download Dataset</DialogTitle>
        <DialogDescription>
          Please provide your information to download the dataset. Fields marked with * are required.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {[
          { id: "firstName", label: "First Name" },
          { id: "lastName", label: "Last Name" },
          { id: "institution", label: "Institution" },
          { id: "email", label: "Email Address", type: "email" },
        ].map((field) => (
          <div className="grid grid-cols-4 items-center gap-4" key={field.id}>
            <Label htmlFor={field.id} className="text-right">
              {field.label}*
            </Label>
            <Input
              id={field.id}
              type={field.type || "text"}
              value={formData[field.id as keyof FormData]}
              onChange={handleInputChange}
              className="col-span-3"
              required
            />
            {isFormSubmitted && formData[field.id as keyof FormData].trim() === "" && (
              <p className="col-span-4 text-red-500 text-xs text-right">{field.label} is required.</p>
            )}
          </div>
        ))}
        {/* <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right col-span-4 pb-2">CAPTCHA*</Label>
          <div className="col-span-4 flex justify-center">
            <ReCAPTCHA
              sitekey={recaptchaSiteKey} // Use prop
              onChange={handleRecaptchaChange}
            />
          </div>
          {isFormSubmitted && !recaptchaToken && (
            <p className="col-span-4 text-red-500 text-xs text-center pt-1">Please complete the CAPTCHA.</p>
          )}
        </div> */}
      </div>
      <DialogFooter>
        <Button onClick={onSubmit} type="submit">Submit and Download</Button>
      </DialogFooter>
    </form>
  );
} 