import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

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
  onSubmit: (e: React.FormEvent) => void;
  agreedToTerms: boolean;
  onAgreementChange: (checked: boolean) => void;
}

export function DownloadForm({
  formData,
  recaptchaToken,
  isFormSubmitted,
  recaptchaSiteKey,
  handleInputChange,
  handleRecaptchaChange,
  onSubmit,
  agreedToTerms,
  onAgreementChange,
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

      {/* Terms of Agreement Section */}
      <div className="space-y-4 mb-6">
        <div className="h-48 overflow-y-auto border rounded-md p-4 space-y-3 text-sm bg-gray-50">
          <p className="font-semibold text-gray-700">Please read the terms before downloading:</p>
          <p className="text-gray-600">By submitting my information and agreeing below, I confirm that:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>The information I have provided is accurate and true to the best of my knowledge.</li>
            <li><strong>Citation Requirement:</strong> I agree to cite the source paper in any publication, presentation, or other public disclosure that includes or references this dataset. This ensures proper attribution to the authors and acknowledges the original source of the data.</li>
            <li><strong>Permitted Use:</strong> I understand that this dataset is provided solely for <strong>research, educational, and non-commercial purposes.</strong> I agree not to use the dataset for any commercial purposes without prior written consent from the dataset providers.</li>
            <li><strong>Data Privacy and Security:</strong> I commit to handling the dataset responsibly, ensuring it is protected from unauthorized access, sharing, or redistribution.</li>
            <li><strong>No Redistribution:</strong> I agree not to share, distribute, or sublicense the dataset to third parties without explicit permission from the providers.</li>
            <li><strong>Assumption of Responsibility:</strong> I understand that improper use of the dataset may result in legal consequences or termination of access rights. I accept full responsibility for any consequences arising from my use of this dataset.</li>
            <li><strong>Agreement to Terms:</strong> This agreement signifies my commitment to uphold the ethical and scholarly standards expected in the use and distribution of research data.</li>
          </ol>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={(checked: boolean) => onAgreementChange(checked)}
          />
          <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I agree to the terms and conditions.
          </Label>
        </div>
      </div>

      <DialogFooter>
        <Button onClick={onSubmit} type="submit" disabled={!agreedToTerms}>
          Submit and Download
        </Button>
      </DialogFooter>
    </form>
  );
} 