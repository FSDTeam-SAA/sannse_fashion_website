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

export default function OrderHistoryPage() {
  return (
    <Card className="w-full bg-gray-900 border-none text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700">
              <TableHead className="text-gray-400">Order ID</TableHead>
              <TableHead className="text-gray-400">Total</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-gray-800 hover:bg-gray-800">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Link
                    href={`/account/order-history/${order.id.replace("#", "")}`}
                    className="text-pink-600 hover:underline"
                  >
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
