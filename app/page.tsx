'use client'

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreditCard, Gift, Grid, MessageSquare, Ticket, UserCog } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicContent = dynamic(() => import("@/components/dashboard/dynamic-content").then(mod => mod.DynamicContent), { ssr: false })


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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  <Grid className="mr-2 h-4 w-4" />
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
        <DynamicContent data={revenueData} />
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

