import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ChangePasswordPage() {
  return (
    <Card className="w-full bg-white border-none text-gray-900 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Change Password</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="currentPassword" className="text-gray-700">
            Current Password
          </Label>
          <Input id="currentPassword" type="password" className="bg-white border-gray-300 text-gray-900" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-gray-700">
              New Password
            </Label>
            <Input id="newPassword" type="password" className="bg-white border-gray-300 text-gray-900" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmNewPassword" className="text-gray-700">
              Confirm New Password
            </Label>
            <Input id="confirmNewPassword" type="password" className="bg-white border-gray-300 text-gray-900" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">Save</Button>
        </div>
      </CardContent>
    </Card>
  )
}
