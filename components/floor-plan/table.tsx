import { cn } from "@/lib/utils"
import type { TableData } from "./floor-plan"

interface TableProps {
    table: TableData
    onClick?: () => void
}

export function Table({ table, onClick }: TableProps) {
    const isClickable = table.status === "ordered" || table.status === "serving" || table.status === "reserved"

    return (
        <div
            className={cn(
                "aspect-square rounded-lg border p-4 transition-colors",
                table.status === "ordered" && "border-red-500 bg-red-50",
                table.status === "serving" && "border-green-500 bg-green-50",
                table.status === "reserved" && "border-purple-500 bg-purple-50",
                table.status === "available" && "border-gray-200 bg-gray-50",
                isClickable && "cursor-pointer hover:bg-gray-100",
            )}
            onClick={onClick}
        >
            <div className="text-center">
                <div
                    className={cn(
                        "text-lg font-medium",
                        table.status === "ordered" && "text-red-700",
                        table.status === "serving" && "text-green-700",
                        table.status === "reserved" && "text-purple-700",
                        table.status === "available" && "text-gray-700",
                    )}
                >
                    {table.number}
                </div>
                <div className="mt-1 text-sm capitalize text-gray-500">{table.status}</div>
                {table.status === "reserved" && table.booking && (
                    <div className="mt-2 text-xs text-purple-600">{table.booking.bookingTime}</div>
                )}
            </div>
        </div>
    )
}

