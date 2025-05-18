import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const exampleReports = [
  {
    id: "tuberculosis",
    title: "Tuberculosis (TB)",
    content: `CLINICAL INFORMATION: 45-year-old male presenting for evaluation of Tuberculosis, with a history of chronic cough and weight loss.

PROCEDURE: Contrast-enhanced CT chest performed after IV administration of 100 mL Iopamidol 76% IV SOLN. Axial, coronal, sagittal images reviewed. Thin sections obtained.

COMPARISON: Chest CT dated August 15, 2022.

FINDINGS:
LUNGS AND PLEURA:
Multiple cavitary lesions in the upper lobes bilaterally, more prominent on the right, consistent with active pulmonary tuberculosis. Patchy consolidation in the right upper lobe and left upper lobe. Mild bronchial wall thickening and tree-in-bud nodules in bilateral upper lobes. No pleural effusion or pneumothorax.

PULMONARY VASCULATURE:
Main, lobar, segmental, and subsegmental pulmonary arteries are patent without filling defects. No evidence of pulmonary embolism. Normal caliber of vessels.

MEDIASTINUM, HEART, AND GREAT VESSELS:
Normal heart size and morphology. No pericardial effusion. The thoracic aorta is normal in caliber with mild atherosclerotic calcification. Main pulmonary artery is normal in caliber. The esophagus is nondistended; small hiatal hernia noted.

LYMPH NODES:
Enlarged mediastinal and hilar lymph nodes with central necrosis, largest measuring 1.8 x 1.4 cm at the subcarinal region (image 123/series 2). No axillary lymphadenopathy.

SKELETON AND CHEST WALL:
No aggressive osseous lesion. Mild degenerative changes in the thoracic spine. No fractures or suspicious bone lesions.

UPPER ABDOMEN:
Few hepatic cysts. Adrenals appear normal.

IMPRESSION:
1. Findings consistent with active pulmonary tuberculosis with multiple cavitary lesions and tree-in-bud nodularity in bilateral upper lobes. Recommend follow-up CT chest in 3 months to assess response to treatment.
2. Enlarged necrotic mediastinal and hilar lymph nodes consistent with tuberculous lymphadenitis. Recommend continued clinical correlation and consideration for biopsy if indicated.
3. Incidental findings of mild atherosclerotic calcification in the thoracic aorta and hepatic cysts, which are stable compared to prior imaging.

Pulmonary nodule follow-up recommendation:
Follow-up chest CT recommended in 3 months to evaluate treatment response for tuberculosis-related findings.

ATTENDING PHYSICIAN AGREEMENT: I have personally reviewed the images and agree with this report without modification.`,
  },
  {
    id: "pe",
    title: "Pulmonary Embolism (PE)",
    content: `CT OF THE CHEST WITH CONTRAST

CLINICAL INFORMATION: 50-year-old female presenting for evaluation of possible pulmonary embolism (PE).

PROCEDURE: Contrast-enhanced CT chest performed after IV administration of 100 mL Iopamidol 76% contrast. Axial, coronal, and sagittal images reviewed. Thin sections obtained.

COMPARISON: Chest CT dated 7/15/2023.

FINDINGS:
Lungs and Pleura:
Central airways are patent.
No pneumothorax or pleural effusion.
Scattered mild centrilobular emphysema.
Few subcentimeter pulmonary nodules in the right upper lobe, stable from prior.

Pulmonary Vasculature:
Acute bilateral lower lobe segmental and subsegmental pulmonary emboli, evidenced by filling defects on series 2 images 114 through 120.
Main pulmonary artery and lobar arteries appear within normal caliber.
No evidence of right heart strain; RV/LV ratio within normal limits, no septal bowing.

Mediastinum, Heart, and Great Vessels:
Normal heart size.
No pericardial effusion.
Moderate coronary artery calcifications.
Thoracic aorta normal in caliber; mild atherosclerosis without aneurysm or dissection. Small hiatal hernia.

Lymph Nodes:
No mediastinal or hilar lymphadenopathy.

Skeleton and Chest Wall:
Degenerative changes of the thoracic spine. No suspicious osseous lesions.

Upper Abdomen:
Unremarkable adrenal glands.

IMPRESSION:
1. Acute pulmonary embolism involving segmental and subsegmental branches of both lower lobes. Recommend follow-up CT in 3 months to assess resolution of emboli.
2. Moderate coronary artery calcifications.
3. Mild centrilobular emphysema.

ATTENDING PHYSICIAN AGREEMENT: I have personally reviewed the images and agree with this report.`,
  },
  {
    id: "normal",
    title: "No Positive Finding",
    content: `CLINICAL INFORMATION:
45-year-old female with no significant past medical history presenting for routine health screening.

PROCEDURE:
Contrast-enhanced CT of the chest performed after intravenous administration of 80 mL iodinated contrast. Thin-section axial images with coronal and sagittal reconstructions were reviewed.

COMPARISON:
None.

FINDINGS:
Lungs and Pleura:
The central airways are patent. No focal consolidation, pleural effusion, or pneumothorax. No suspicious pulmonary nodules. Minimal dependent atelectasis in the lung bases.

Pulmonary Vasculature:
The pulmonary arteries are patent with homogeneous opacification and no filling defects. No evidence of pulmonary embolism.

Mediastinum, Heart, Great Vessels:
The heart is normal in size. No pericardial effusion. The thoracic aorta is normal in course and caliber without aneurysm or dissection. The main pulmonary artery is of normal caliber. The esophagus appears unremarkable.

Lymph Nodes:
No mediastinal or hilar lymphadenopathy is identified.

Skeleton/Chest Wall:
No acute osseous abnormalities. Mild degenerative changes in the thoracic spine consistent with the patient's age.

Upper Abdomen:
Visualized portions of the liver, spleen, adrenal glands, and kidneys are grossly unremarkable. No abnormalities noted; see separate abdominal report for detailed evaluation.

IMPRESSION:
1. No acute cardiothoracic abnormality.
2. Incidental findings include mild degenerative changes in the thoracic spine.

No follow-up recommended at this time based on current findings.`,
  },
]

export function ExampleReports() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Example Reports</h3>
      <Tabs defaultValue="tuberculosis">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-9">
          <TabsTrigger value="tuberculosis">Tuberculosis</TabsTrigger>
          <TabsTrigger value="pe">Pulmonary Embolism</TabsTrigger>
          <TabsTrigger value="normal">Normal Study</TabsTrigger>
        </TabsList>
        {exampleReports.map((report) => (
          <TabsContent key={report.id} value={report.id}>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold mb-2">{report.title}</h4>
                  <pre className="whitespace-pre-wrap text-sm font-mono overflow-auto max-h-[400px]">
                    {report.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
