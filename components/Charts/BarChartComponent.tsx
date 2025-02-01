'use client'

import { Bar, BarChart, XAxis, YAxis } from 'recharts';

interface BarChartComponentProps {
    data: { name: string; total: number }[]
}

export default function BarChartComponent({ data }: BarChartComponentProps) {
    return (
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
                fill="#f77700"
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    )
} 