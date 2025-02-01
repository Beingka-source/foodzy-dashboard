"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface RevenueChartProps {
    data: {
        name: string
        total: number
    }[]
}

export default function RevenueChart({ data }: RevenueChartProps) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `฿${value}`}
                />
                <Bar
                    dataKey="total"
                    fill="#FF6B00"
                    radius={[4, 4, 0, 0]}
                    className="fill-[#FF6B00] hover:fill-[#FF8533]"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
