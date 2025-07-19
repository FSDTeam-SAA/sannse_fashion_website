import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit } from "lucide-react"

export default function PersonalInformationPage() {
  return (
    <Card className="w-full bg-white border-none text-gray-900 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-2xl font-bold">Personal Information</CardTitle>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Next
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-700">
              First Name
            </Label>
            <Input id="firstName" defaultValue="Brooklyn" className="bg-white border-gray-300 text-gray-900" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-700">
              Last Name
            </Label>
            <Input id="lastName" defaultValue="Simmons" className="bg-white border-gray-300 text-gray-900" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="brooklynsimmons@gmail.com"
              className="bg-white border-gray-300 text-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Phone
            </Label>
            <Input id="phone" defaultValue="(58) 474748574" className="bg-white border-gray-300 text-gray-900" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="country" className="text-gray-700">
              Country
            </Label>
            <Input id="country" defaultValue="USA" className="bg-white border-gray-300 text-gray-900" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cityState" className="text-gray-700">
              City/State
            </Label>
            <Input id="cityState" defaultValue="Alabama" className="bg-white border-gray-300 text-gray-900" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="roadArea" className="text-gray-700">
            Road/Area
          </Label>
          <Input
            id="roadArea"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            className="bg-white border-gray-300 text-gray-900"
          />
        </div>
      </CardContent>
    </Card>
  )
}
