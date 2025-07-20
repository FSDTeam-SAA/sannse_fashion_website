
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OrderStatusTracker from "../_components/OrderStatusTracker"
import OrderdProductCard from "../_components/OrderdProductCard"
export default function OrderDetailsPage({ params }: { params: { orderId: string } }) {
  const { orderId } = params

  // Mock data for order details
  const orderDetails = {
    id: `#${orderId}`,
    paymentMethod: "Stripe",
    subtotal: "$7,000.00",
    salesTax: "$50.00",
    totalItems: 5,
    total: "$48,000.00",
    billingAddress: {
      name: "Brooklyn Simmons",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "brooklynsimmons@gmail.com",
      phone: "(58) 474748574",
    },
    shippingAddress: {
      name: "Brooklyn Simmons",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      email: "brooklynsimmons@gmail.com",
      phone: "(58) 474748574",
    },
    products: [
      {
        id: "1",
        name: "Lorem ipsum dolor sit amet, consectetur efficitur.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus.",
        price: "$254",
        image: "/images/product-image.png",
      },
      {
        id: "2",
        name: "Lorem ipsum dolor sit amet, consectetur efficitur.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus.",
        price: "$254",
        image: "/images/product-image.png",
      },
    ],
    status: 3, // 1: Order, 2: Processing, 3: Shipping, 4: Completed
  }

  const statusSteps = [
    { name: "Order", step: 1 },
    { name: "Processing", step: 2 },
    { name: "Shipping", step: 3 },
    { name: "Completed", step: 4 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Order Details</h1>
        <Link href="/account/order-history">
          <Button className="bg-[#EF1A26] hover:bg-[#EF1A26] text-white px-4 py-2 rounded-md">← Back to List</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 text-black">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Addresses</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 border border-gray-300 p-4 rounded-md">
              <h3 className="font-medium   ">Billing Address</h3>
              <p className="  ">{orderDetails.billingAddress.name}</p>
              <p className="   text-sm">{orderDetails.billingAddress.address}</p>
              <p className="   text-sm">{orderDetails.billingAddress.email}</p>
              <p className="   text-sm">{orderDetails.billingAddress.phone}</p>
            </div>
            <div className="space-y-2 border border-gray-300 p-4 rounded-md">
              <h3 className="font-medium   ">Shipping Address</h3>
              <p className="  ">{orderDetails.shippingAddress.name}</p>
              <p className="   text-sm">{orderDetails.shippingAddress.address}</p>
              <p className="   text-sm">{orderDetails.shippingAddress.email}</p>
              <p className="   text-sm">{orderDetails.shippingAddress.phone}</p>
            </div>
          </CardContent>
        </Card>

        <Card className=" border-none ">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 border border-gray-300 p-4 rounded-md">
            <div className="flex justify-between text-sm   ">
              <span>Order ID:</span>
              <span>{orderDetails.id}</span>
            </div>
            <div className="flex justify-between text-sm   ">
              <span>Payment Method:</span>
              <span>{orderDetails.paymentMethod}</span>
            </div>
            <div className="border-t border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between text-sm   ">
                <span>Subtotal</span>
                <span>{orderDetails.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm   ">
                <span>Sales Tax</span>
                <span>{orderDetails.salesTax}</span>
              </div>
              <div className="flex justify-between text-sm   ">
                <span>Total Item</span>
                <span>{orderDetails.totalItems}</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-700 pt-4">
              <span>Total</span>
              <span>{orderDetails.total}</span>
            </div>
          </CardContent>
        </Card>
      </div>


{/* order status  */}
  <OrderStatusTracker
        statusSteps={statusSteps}
        currentStatus={orderDetails.status}
      />




{/* prdouct items  */}
  <div className="grid grid-cols-1 gap-6">
      {orderDetails.products.map((product) => (
        <OrderdProductCard key={product.id} product={product} />
      ))}
    </div>




    </div>
  )
}
