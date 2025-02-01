"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { BellIcon, ChevronDown, FileTextIcon, HelpCircleIcon, HomeIcon, LayoutIcon, LogOutIcon, Menu, PackageIcon, Search, UsersIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true)
      }
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const showBackButton = pathname !== "/"

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out",
          isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-orange-500 text-white p-2 rounded">
              <PackageIcon className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold">foodZy</span>
          </div>

          <nav className="space-y-2">
            <a href="/" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg bg-gray-100">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="/staff" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <UsersIcon className="h-5 w-5" />
              <span>Staff Profiles</span>
            </a>
            <a href="/orders" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <FileTextIcon className="h-5 w-5" />
              <span>Orders</span>
            </a>
            <a href="/inventory" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <PackageIcon className="h-5 w-5" />
              <span>Inventory</span>
            </a>
            <a href="/floor-plan" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <LayoutIcon className="h-5 w-5" />
              <span>Floor Plan</span>
            </a>
            <a href="/slip-verification" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <FileTextIcon className="h-5 w-5" />
              <span>Slip Verification</span>
            </a>
          </nav>

          <div className="absolute bottom-8 left-6 space-y-2">
            <a href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <HelpCircleIcon className="h-5 w-5" />
              <span>Help Center</span>
            </a>
            <button className="flex items-center gap-3 px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 w-full">
              <LogOutIcon className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={cn("flex-1 flex flex-col", isSidebarOpen && !isMobile ? "ml-64" : "ml-0")}>
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white px-6">
          <div className="flex items-center gap-4">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <Menu className="h-5 w-5" />
              </Button>
            )}
            {showBackButton && (
              <Button variant="ghost" size="icon" onClick={() => router.back()} className="mr-2">
                <ChevronDown className="h-5 w-5 rotate-90" />
              </Button>
            )}
          </div>
          <div className="flex flex-1 items-center gap-4">
            <form className="flex-1 md:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search..." className="pl-8 w-[300px]" />
              </div>
            </form>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-green-600">
                Line Official
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

