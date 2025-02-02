'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const DynamicStatsCards = dynamic(() => import("@/components/stats-cards").then(mod => mod.default), { ssr: false })
const DynamicAlerts = dynamic(() => import("@/components/dashboard/alerts").then(mod => mod.default), { ssr: false })
const DynamicBarChart = dynamic(() => import("@/components/dashboard/bar-chart").then(mod => mod.default), { ssr: false })

interface DynamicContentProps {
    data: { name: string; total: number }[]
}

export function DynamicContent({ data }: DynamicContentProps) {
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
                        <DynamicBarChart data={data} />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}