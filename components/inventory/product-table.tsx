"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react"
import { useState } from "react"

type Product = {
    id: string
    name: string
    code: string
    quantity: number
    threshold: number
    expiryDate: string
    status: "in-stock" | "out-of-stock" | "low-stock"
}

const products: Product[] = [
    {
        id: "1",
        name: "Chicken Breast",
        code: "2001A",
        quantity: 43,
        threshold: 12,
        expiryDate: "11/12/22",
        status: "in-stock",
    },
    {
        id: "2",
        name: "Tomato Sauce",
        code: "2001B",
        quantity: 22,
        threshold: 12,
        expiryDate: "21/12/22",
        status: "out-of-stock",
    },
    {
        id: "3",
        name: "Olive Oil",
        code: "2001C",
        quantity: 36,
        threshold: 9,
        expiryDate: "5/12/22",
        status: "in-stock",
    },
    {
        id: "4",
        name: "Lettuce",
        code: "2001D",
        quantity: 14,
        threshold: 6,
        expiryDate: "8/12/22",
        status: "out-of-stock",
    },
    {
        id: "5",
        name: "Cheddar Cheese",
        code: "2001E",
        quantity: 5,
        threshold: 5,
        expiryDate: "9/1/23",
        status: "in-stock",
    },
]

interface ProductTableProps {
    searchQuery: string
}

export function ProductTable({ searchQuery }: ProductTableProps) {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([])
    const [sortColumn, setSortColumn] = useState<keyof Product>("name")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

    const toggleProduct = (productId: string) => {
        setSelectedProducts((current) =>
            current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId],
        )
    }

    const toggleAll = () => {
        setSelectedProducts((current) => (current.length === products.length ? [] : products.map((p) => p.id)))
    }

    const handleSort = (column: keyof Product) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortDirection("asc")
        }
    }

    const filteredProducts = products
        .filter(
            (product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.code.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
            if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
            return 0
        })

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">
                            <Checkbox checked={selectedProducts.length === products.length} onCheckedChange={toggleAll} />
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                            Products
                            {sortColumn === "name" &&
                                (sortDirection === "asc" ? (
                                    <ChevronUp className="inline ml-1" />
                                ) : (
                                    <ChevronDown className="inline ml-1" />
                                ))}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("code")}>
                            Product Code
                            {sortColumn === "code" &&
                                (sortDirection === "asc" ? (
                                    <ChevronUp className="inline ml-1" />
                                ) : (
                                    <ChevronDown className="inline ml-1" />
                                ))}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("quantity")}>
                            Quantity
                            {sortColumn === "quantity" &&
                                (sortDirection === "asc" ? (
                                    <ChevronUp className="inline ml-1" />
                                ) : (
                                    <ChevronDown className="inline ml-1" />
                                ))}
                        </TableHead>
                        <TableHead>Threshold Value</TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("expiryDate")}>
                            Expiry Date
                            {sortColumn === "expiryDate" &&
                                (sortDirection === "asc" ? (
                                    <ChevronUp className="inline ml-1" />
                                ) : (
                                    <ChevronDown className="inline ml-1" />
                                ))}
                        </TableHead>
                        <TableHead>Availability</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.tr
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <TableCell>
                                    <Checkbox
                                        checked={selectedProducts.includes(product.id)}
                                        onCheckedChange={() => toggleProduct(product.id)}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>{product.code}</TableCell>
                                <TableCell>{product.quantity} Packets</TableCell>
                                <TableCell>{product.threshold} Packets</TableCell>
                                <TableCell>{product.expiryDate}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            product.status === "in-stock"
                                                ? "border-green-500 text-green-700"
                                                : product.status === "out-of-stock"
                                                    ? "border-red-500 text-red-700"
                                                    : "border-orange-500 text-orange-700"
                                        }
                                    >
                                        {product.status === "in-stock"
                                            ? "In-stock"
                                            : product.status === "out-of-stock"
                                                ? "Out of stock"
                                                : "Low stock"}
                                    </Badge>
                                </TableCell>
                            </motion.tr>
                        ))}
                    </AnimatePresence>
                </TableBody>
            </Table>
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex-1 text-sm text-gray-500">
                    {selectedProducts.length} of {products.length} row(s) selected
                </div>
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                <SlidersHorizontal className="mr-2 h-4 w-4" />
                                Filters
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Show all</DropdownMenuItem>
                            <DropdownMenuItem>Show in-stock only</DropdownMenuItem>
                            <DropdownMenuItem>Show out-of-stock only</DropdownMenuItem>
                            <DropdownMenuItem>Show low stock only</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex w-[100px] items-center justify-center text-sm font-medium">Page 1 of 10</div>
                    <Button variant="outline" size="sm" disabled>
                        Previous
                    </Button>
                    <Button variant="outline" size="sm">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

