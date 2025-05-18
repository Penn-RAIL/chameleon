export function DatasetSummary() {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Dataset</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The Chameleon Dataset is a large-scale collection of 10,000 fully synthetic chest CT radiology reports
            generated using OpenAI's GPT-4o. Created without using any real patient data, this HIPAA-compliant, PHI-free
            dataset addresses a critical gap in radiology AI research: the lack of accessible, high-quality clinical text
            data.
          </p>
          <p>
            Each synthetic report follows a consistent and realistic structure, including sections for simulated patient
            demographics, study information, clinical indication, technique, detailed findings, and impression. The
            dataset spans both normal imaging studies and a wide range of 17 common thoracic pathologies typically
            diagnosed through chest CT.
          </p>
          <p>
            Developed through an iterative prompt engineering process with expert radiologist validation, the Chameleon
            Dataset achieved 96% interreader agreement and zero quality control failures in downstream audits. This
            resource enables researchers, educators, and developers to train, evaluate, and benchmark NLP models in
            clinical imaging without privacy concerns.
          </p>
        </div>
      </div>
    )
  }
  