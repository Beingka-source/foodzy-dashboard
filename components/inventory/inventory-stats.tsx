import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Archive, Package, TrendingUp } from "lucide-react"

interface InventoryStatsProps {
    onTopUsedClick: () => void
    onLowStockClick: () => void
}

const stats = [
    {
        title: "Categories",
        value: "14",
        description: "Last 7 days",
        icon: Archive,
        color: "text-blue-600",
        onClick: null,
    },
    {
        title: "Total Products",
        value: "868",
        revenue: "100000฿",
        description: "Last 7 days",
        icon: Package,
        color: "text-green-600",
        onClick: null,
    },
    {
        title: "Top Used",
        value: "5",
        cost: "50000฿",
        description: "Last 7 days",
        icon: TrendingUp,
        color: "text-purple-600",
        onClick: "topUsed",
    },
    {
        title: "Low Stocks",
        value: "12",
        notInStock: "2",
        description: "Products",
        icon: AlertTriangle,
        color: "text-orange-600",
        onClick: "lowStock",
    },
]

export function InventoryStats({ onTopUsedClick, onLowStockClick }: InventoryStatsProps) {
    const handleClick = (clickType: string | null) => {
        if (clickType === "topUsed") onTopUsedClick()
        if (clickType === "lowStock") onLowStockClick()
    }

    return (
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <Card
                        key={stat.title}
                        className={stat.onClick ? "cursor-pointer transition-colors hover:bg-gray-50" : ""}
                        onClick={() => handleClick(stat.onClick)}
                    >
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <Icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            {stat.revenue && <p className="text-xs text-muted-foreground">Revenue: {stat.revenue}</p>}
                            {stat.cost && <p className="text-xs text-muted-foreground">Cost: {stat.cost}</p>}
                            {stat.notInStock && <p className="text-xs text-muted-foreground">Not in stock: {stat.notInStock}</p>}
                            <p className="text-xs text-muted-foreground">{stat.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

