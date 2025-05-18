import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PathologyData {
  pathology: string
  count: number
  percentage: string
}

interface PathologyTableProps {
  data: PathologyData[]
}

export function PathologyTable({ data }: PathologyTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Distribution of Pathologies</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Pathology</TableHead>
              <TableHead className="text-right font-bold">Number of Reports</TableHead>
              <TableHead className="text-right font-bold">Percentage of Total (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <TableCell className="font-medium">{item.pathology}</TableCell>
                <TableCell className="text-right">{item.count}</TableCell>
                <TableCell className="text-right">{item.percentage}</TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-sky-50 font-semibold">
              <TableCell>Total (n)</TableCell>
              <TableCell className="text-right">5000</TableCell>
              <TableCell className="text-right">50%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
