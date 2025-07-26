import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  {
    id: "#5585",
    total: "$565 (5 Products)",
    status: "Shipping",
    date: "8 Dec, 2025",
    statusColor: "bg-blue-600",
  },
  {
    id: "#54858",
    total: "$565 (5 Products)",
    status: "Processing",
    date: "8 Dec, 2025",
    statusColor: "bg-orange-600",
  },
  {
    id: "#59858",
    total: "$565 (5 Products)",
    status: "Shipping",
    date: "8 Dec, 2025",
    statusColor: "bg-blue-600",
  },
  {
    id: "#25885",
    total: "$565 (5 Products)",
    status: "Processing",
    date: "8 Dec, 2025",
    statusColor: "bg-orange-600",
  },
  {
    id: "#54885",
    total: "$565 (5 Products)",
    status: "Completed",
    date: "8 Dec, 2025",
    statusColor: "bg-green-600",
  },
  {
    id: "#54885",
    total: "$565 (5 Products)",
    status: "Completed",
    date: "8 Dec, 2025",
    statusColor: "bg-green-600",
  },
  {
    id: "#5552",
    total: "$565 (5 Products)",
    status: "Completed",
    date: "8 Dec, 2025",
    statusColor: "bg-green-600",
  },
]

// Status-to-color mapping (standardized + cancelled support)
const getStatusColor = (status: string) => {
  switch (status) {
    case "Shipping":
      return "bg-blue-500 text-white"
    case "Processing":
      return "bg-yellow-500 text-white"
    case "Completed":
      return "bg-emerald-500 text-white"
    case "Cancelled":
      return "bg-red-500 text-white"
    default:
      return "bg-gray-400 text-white"
  }
}



export default function OrderHistoryPage() {
  return (
    <Card className="w-full  border-none rounded-lg ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Order History</CardTitle>
      </CardHeader>
      <CardContent>
  <div className="overflow-x-auto w-full">
    <Table className="min-w-[600px] border border-[#FDE8E9] rounded-lg">
      {/* Table header */}
      <TableHeader className="rounded-lg">
        <TableRow className="border-gray-700 p-0 bg-[#FDE8E9] !text-black rounded-lg">
          <TableHead className="text-black">Order ID</TableHead>
          <TableHead className="text-black">Total</TableHead>
          <TableHead className="text-black">Status</TableHead>
          <TableHead className="text-black">Date</TableHead>
          <TableHead className="text-black">Details</TableHead>
        </TableRow>
      </TableHeader>

      {/* Table data body */}
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="border-gray-800">
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <Link
                href={`/account/order-history/${order.id.replace("#", "")}`}
                className="font-semibold hover:underline"
              >
                View Details
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</CardContent>

    </Card>
  )
}
