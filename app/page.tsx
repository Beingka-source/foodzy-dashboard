import { Alerts } from "@/components/dashboard/alerts"
import { Layout } from "@/components/layout"
import { StatsCards } from "@/components/stats-cards"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreditCard, Gift, Grid, Menu, MessageCircle, MessageSquare, Ticket, UserCog } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const revenueData = [
  { name: "Mon", total: 1200 },
  { name: "Tue", total: 1800 },
  { name: "Wed", total: 2200 },
  { name: "Thu", total: 1800 },
  { name: "Fri", total: 2400 },
  { name: "Sat", total: 2800 },
  { name: "Sun", total: 3200 },
]

const topSellingItems = [
  { name: "Pad Thai", sales: 145, revenue: 2175 },
  { name: "Green Curry", sales: 132, revenue: 2112 },
  { name: "Mango Sticky Rice", sales: 125, revenue: 1250 },
  { name: "Tom Yum Soup", sales: 98, revenue: 1470 },
  { name: "Thai Iced Tea", sales: 90, revenue: 450 },
]

export default function DashboardPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back to your dashboard</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/menu">
              <Button className="bg-[#f77700] hover:bg-[#f77700]/90">
                <Menu className="mr-2 h-4 w-4" />
                Manage Menu
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Line Official
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Grid className="mr-2 h-4 w-4" />
                  <span>Rich Menu</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Ticket className="mr-2 h-4 w-4" />
                  <span>Coupon</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Line Pay</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Gift className="mr-2 h-4 w-4" />
                  <span>Reward Card</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Auto-Response</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserCog className="mr-2 h-4 w-4" />
                  <span>Edit Profile</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <StatsCards />
        <div className="grid gap-6 md:grid-cols-2">
          <Alerts />
          <Card>
            <CardHeader>
              <CardTitle>Weekly Revenue</CardTitle>
              <CardDescription>Overview of this week's revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `฿${value}`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`฿${value}`, "Revenue"]}
                    labelFormatter={(label) => `Day: ${label}`}
                  />
                  <Bar dataKey="total" fill="#f77700" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Items</CardTitle>
            <CardDescription>This week's best-performing menu items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSellingItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.sales} sales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">฿{item.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

