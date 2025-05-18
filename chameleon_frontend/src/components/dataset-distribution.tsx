import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DatasetDistribution() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Dataset Composition</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-br from-sky-50 to-white">
          <div className="bg-sky-600 h-2"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-sky-700">Healthy Reports</h4>
              <span className="text-2xl font-bold text-sky-700">5,000</span>
            </div>
            <p className="text-gray-600 mb-4">Reports with no positive pathological findings</p>
            <div className="flex items-center gap-2">
              <div className="w-full">
                <Progress value={50} className="h-3 bg-gray-200" />
              </div>
              <span className="font-semibold text-sky-700">50%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-br from-amber-50 to-white">
          <div className="bg-amber-600 h-2"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-amber-700">Pathology Reports</h4>
              <span className="text-2xl font-bold text-amber-700">5,000</span>
            </div>
            <p className="text-gray-600 mb-4">Reports with 17 different thoracic pathologies</p>
            <div className="flex items-center gap-2">
              <div className="w-full">
                <Progress value={50} className="h-3 bg-gray-200" />
              </div>
              <span className="font-semibold text-amber-700">50%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-sky-500"></div>
          <span className="text-sm font-medium">Healthy Reports (50%)</span>
        </div>
        <div className="mx-4 text-gray-300">|</div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-amber-500"></div>
          <span className="text-sm font-medium">Pathology Reports (50%)</span>
        </div>
      </div>

      <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-sky-500"></div>
        <div className="absolute top-0 right-0 h-full w-1/2 bg-amber-500"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="font-bold text-white drop-shadow-md">10,000 Total Reports</span>
        </div>
      </div>
    </div>
  )
}
