export function About() {
    return (
      <div>
        <p className="text-4xl font-bold mb-6 text-gray-800"> About</p>
        <div className="prose prose-2xl max-w-none">
          <p className="text-xl">
            The Chameleon project uses advanced large language models (LLMs), such as GPT-4, to generate synthetic
            radiology reports that replicate the linguistic and clinical complexity of real-world radiology documentation.
            These reports, covering multiple organ systems and imaging modalities, are rigorously validated by clinical
            experts to ensure accuracy and utility.
          </p>
          <p className="text-xl">
            Designed for academic and clinical research, Chameleon dataset aims to support the development and evaluation
            of natural language processing tools and AI models, providing a robust and ethical platform for innovation in
            radiology informatics.
          </p>
        </div>
      </div>
    )
  }
  