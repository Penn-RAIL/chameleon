import generationProcess from '/generation-process.png';

export function GenerationProcess() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Generation Process</h3>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl h-[400px]">
          <img
            src={generationProcess}
            alt="A flow chart representation of the generation of the Chameleon synthetic reports"
            className="object-contain"
          />
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Figure 1: A flow chart representation of the generation of the Chameleon synthetic reports. A large language
        model (LLM) is prompted using structured few-shot examples derived from a report corpus to generate radiology
        reports. Output reports are evaluated by multiple readers, and feedback is used to refine the model via human
        feedback learning.
      </p>
    </div>
  )
}
