"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const DynamicStatsCards = dynamic(() => import("@/components/stats-cards"), {
    ssr: false,
    loading: () => <div>Loading stats...</div>,
})

const DynamicAlerts = dynamic(() => import("@/components/dashboard/alerts"), {
    ssr: false,
    loading: () => <div>Loading alerts...</div>,
})

const DynamicBarChart = dynamic(() => import("@/components/dashboard/bar-chart"), {
    ssr: false,
    loading: () => <div>Loading chart...</div>,
})

interface DashboardContentProps {
    revenueData: Array<{ name: string; total: number }>
    topSellingItems: Array<{ name: string; sales: number; revenue: number }>
}

export function DashboardContent({ revenueData, topSellingItems }: DashboardContentProps) {
    return (
        <>
            <DynamicStatsCards />
            <div className="grid gap-6 md:grid-cols-2">
                <DynamicAlerts />
                <Card>
                    <CardHeader>
                        <CardTitle>Weekly Revenue</CardTitle>
                        <CardDescription>Overview of this week's revenue</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DynamicBarChart data={revenueData} />
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
        </>
    )
}

