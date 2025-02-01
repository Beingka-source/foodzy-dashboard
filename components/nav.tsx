'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    { name: "Dashboard", href: "/", icon: "🏠" },
    { name: "Staff Profiles", href: "/staff", icon: "👥" },
    { name: "Orders", href: "/orders", icon: "📝" },
    { name: "Inventory", href: "/inventory", icon: "📦" },
    { name: "Floor Plan", href: "/floor-plan", icon: "🗺️" },
    { name: "Slip Verification", href: "/slip-verification", icon: "🧾" },
]

const bottomNavigation = [
    { name: "Help Center", href: "/help", icon: "❓" },
    { name: "Log Out", href: "/logout", icon: "🚪" },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-col justify-between h-[calc(100%-4rem)]">
            <div className="p-4 space-y-1">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                            pathname === item.href
                                ? "bg-[#fff4eb] text-[#f77700] font-medium"
                                : "text-gray-600 hover:bg-gray-100"
                        )}
                    >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="p-4 border-t border-gray-200 space-y-1">
                {bottomNavigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
} 