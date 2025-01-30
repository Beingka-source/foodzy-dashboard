"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Circle, Clock, Mail, Phone, TableIcon, Users } from "lucide-react"
import { useState } from "react"
import { Table } from "./table"

export type TableStatus = "ordered" | "serving" | "reserved" | "available"
export type OrderItem = {
    name: string
    quantity: number
    price: number
    status: "pending" | "preparing" | "served"
}

export type BookingInfo = {
    customerName: string
    phoneNumber: string
    email: string
    numberOfGuests: number
    bookingTime: string
    specialRequests?: string
}

export type TableData = {
    id: string
    number: string
    status: TableStatus
    orders?: OrderItem[]
    booking?: BookingInfo
}

// Sample data
const tables: TableData[] = [
    {
        id: "t1",
        number: "T-01",
        status: "available",
    },
    {
        id: "t2",
        number: "T-02",
        status: "serving",
        orders: [
            { name: "Pad Thai", quantity: 2, price: 250, status: "served" },
            { name: "Green Curry", quantity: 1, price: 180, status: "served" },
        ],
    },
    {
        id: "t3",
        number: "T-03",
        status: "ordered",
        orders: [
            { name: "Tom Yum Kung", quantity: 1, price: 300, status: "preparing" },
            { name: "Mango Sticky Rice", quantity: 2, price: 150, status: "pending" },
        ],
    },
    {
        id: "t6",
        number: "T-06",
        status: "reserved",
        booking: {
            customerName: "John Smith",
            phoneNumber: "+66 89 123 4567",
            email: "john.smith@email.com",
            numberOfGuests: 4,
            bookingTime: "19:00",
            specialRequests: "Window seat preferred",
        },
    },
    {
        id: "t4",
        number: "T-04",
        status: "serving",
    },
    {
        id: "t5",
        number: "T-05",
        status: "serving",
    },
    {
        id: "t7",
        number: "T-07",
        status: "serving",
    },
    {
        id: "t8",
        number: "T-08",
        status: "reserved",
    },
    {
        id: "t9",
        number: "T-09",
        status: "ordered",
    },
    {
        id: "t10",
        number: "T-10",
        status: "ordered",
    },
    {
        id: "t11",
        number: "T-11",
        status: "serving",
    },
    {
        id: "t12",
        number: "T-12",
        status: "reserved",
    },
    {
        id: "t13",
        number: "T-13",
        status: "ordered",
    },
    {
        id: "t14",
        number: "T-14",
        status: "reserved",
    },
]

export function FloorPlan() {
    const [selectedTable, setSelectedTable] = useState<TableData | null>(null)
    const [currentFloor, setCurrentFloor] = useState("floor-1")

    const renderTableDetails = () => {
        if (!selectedTable) return null

        if (selectedTable.status === "reserved" && selectedTable.booking) {
            return (
                <div className="mt-6 space-y-6">
                    <div className="rounded-lg border bg-purple-50 p-4">
                        <div className="flex items-center gap-2 font-medium text-purple-700">
                            <Clock className="h-5 w-5" />
                            Reserved for {selectedTable.booking.bookingTime}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-gray-500" />
                            <div>
                                <div className="font-medium">{selectedTable.booking.customerName}</div>
                                <div className="text-sm text-gray-500">{selectedTable.booking.numberOfGuests} guests</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-gray-500" />
                            <div>
                                <div className="font-medium">Phone</div>
                                <div className="text-sm text-gray-500">{selectedTable.booking.phoneNumber}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-gray-500" />
                            <div>
                                <div className="font-medium">Email</div>
                                <div className="text-sm text-gray-500">{selectedTable.booking.email}</div>
                            </div>
                        </div>

                        {selectedTable.booking.specialRequests && (
                            <div className="rounded-lg border p-4">
                                <div className="font-medium">Special Requests</div>
                                <div className="mt-1 text-sm text-gray-500">{selectedTable.booking.specialRequests}</div>
                            </div>
                        )}
                    </div>
                </div>
            )
        }

        // Render orders for ordered/serving tables
        if (selectedTable.orders) {
            return (
                <div className="mt-6">
                    <div className="space-y-4">
                        {selectedTable.orders.map((order, index) => (
                            <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                                <div>
                                    <div className="font-medium">{order.name}</div>
                                    <div className="text-sm text-gray-500">Quantity: {order.quantity}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium">฿{order.price.toLocaleString()}</div>
                                    <div className="text-sm text-gray-500">{order.status}</div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-between border-t pt-4">
                            <div className="font-medium">Total</div>
                            <div className="font-medium">
                                ฿{selectedTable.orders.reduce((sum, order) => sum + order.price * order.quantity, 0).toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="flex h-[400px] items-center justify-center">
                <div className="text-center text-gray-500">No information available</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Floor Plan</h1>
                    <p className="text-gray-500">Manage and monitor table status</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Tabs value={currentFloor} onValueChange={setCurrentFloor}>
                    <TabsList>
                        <TabsTrigger value="floor-1">Floor-1</TabsTrigger>
                        <TabsTrigger value="floor-2">2nd Floor</TabsTrigger>
                    </TabsList>
                    <Button variant="outline" size="sm" onClick={() => console.log("Refresh floor plan")}>
                        Refresh
                    </Button>
                </Tabs>
                <div className="ml-auto flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Circle className="h-3 w-3 fill-red-500 text-red-500" />
                        <span className="text-sm">Ordered</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                        <span className="text-sm">Serving</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Circle className="h-3 w-3 fill-purple-500 text-purple-500" />
                        <span className="text-sm">Reserved</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Circle className="h-3 w-3 fill-gray-200 text-gray-200" />
                        <span className="text-sm">Available</span>
                    </div>
                </div>
            </div>

            <div className="relative min-h-[600px] rounded-lg border bg-white p-8">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="grid grid-cols-4 gap-8">
                        {tables.map((table) => (
                            <Table
                                key={table.id}
                                table={table}
                                onClick={() => {
                                    if (table.status === "ordered" || table.status === "serving" || table.status === "reserved") {
                                        setSelectedTable(table)
                                    }
                                }}
                            />
                        ))}
                        <div className="col-span-1 flex aspect-square items-center justify-center rounded-lg border border-dashed">
                            <div className="text-center">
                                <TableIcon className="mx-auto h-8 w-8 text-gray-400" />
                                <span className="mt-2 block text-sm text-gray-500">Cashier</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sheet open={selectedTable !== null} onOpenChange={() => setSelectedTable(null)}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            Table {selectedTable?.number} - {selectedTable?.status === "reserved" ? "Reservation" : "Orders"}
                        </SheetTitle>
                    </SheetHeader>
                    <div className="py-4">{renderTableDetails()}</div>
                    <SheetFooter>
                        <Button onClick={() => setSelectedTable(null)}>Close</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

