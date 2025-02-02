import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react"

const stats = [
    {
        title: "Total Revenue",
        value: "฿45,231",
        icon: DollarSign,
        description: "Daily revenue",
    },
    {
        title: "New Customers",
        value: "+23",
        icon: Users,
        description: "Last 24 hours",
    },
    {
        title: "Total Orders",
        value: "142",
        icon: ShoppingBag,
        description: "Last 24 hours",
    },
    {
        title: "Sales Growth",
        value: "+12.5%",
        icon: TrendingUp,
        description: "Compared to last week",
    },
]

export function StatsCards() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <Icon className="h-4 w-4 text-gray-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-gray-500">{stat.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
} 