"use client"  // Add this at the top to mark as client component

import RevenueChart from "@/components/dashboard/revenue-chart"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const revenueData = [
  { name: "Mon", total: 1200 },
  { name: "Tue", total: 1800 },
  { name: "Wed", total: 2200 },
  { name: "Thu", total: 1800 },
  { name: "Fri", total: 2400 },
  { name: "Sat", total: 2800 },
  { name: "Sun", total: 3200 },
]

const topSellingItems = [
  { name: "Pad Thai", sales: 145, revenue: 2175 },
  { name: "Green Curry", sales: 132, revenue: 2112 },
  { name: "Mango Sticky Rice", sales: 125, revenue: 1250 },
  { name: "Tom Yum Soup", sales: 98, revenue: 1470 },
  { name: "Thai Iced Tea", sales: 90, revenue: 450 },
]

export default function DashboardPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#F8F9FC]">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center px-8 py-4 bg-white border-b">
          <div className="flex items-center gap-4">
            {/* Shopping Bag Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#f77700] w-6 h-6"
              >
                <path d="M20 7h-4V4c0-2.209-1.791-4-4-4S8 1.791 8 4v3H4L2 24h20L20 7zM9 4c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V4z" />
              </svg>
              <span className="text-xl font-bold text-[#f77700]">foodZy</span>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 border rounded-lg w-[300px] text-sm"
              />
              <svg
                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right Navigation Items */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <svg
                className="h-5 w-5 text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 min-h-screen bg-white border-r px-4 py-6">
            <nav className="space-y-2">
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-[#f77700] bg-orange-50 rounded-lg">
                <svg
                  className="h-5 w-5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </Link>

              <Link href="/staff" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <svg
                  className="h-5 w-5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Staff Profiles
              </Link>

              <Link href="/orders" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <svg
                  className="h-5 w-5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Orders
              </Link>

              <Link href="/inventory" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <svg
                  className="h-5 w-5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                Inventory
              </Link>

              <Link href="/floor-plan" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <svg
                  className="h-5 w-5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Floor Plan
              </Link>

              <Link href="/slip-verification" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <svg
                  className="h-5 w-5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Slip Verification
              </Link>

              <div className="pt-8">
                <Link href="/help" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <svg
                    className="h-5 w-5"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help Center
                </Link>

                <Link href="/logout" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <svg
                    className="h-5 w-5"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log Out
                </Link>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-500">Welcome back to your dashboard</p>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  Line Official
                </span>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-normal text-gray-600">Total Revenue</h3>
                  <span className="text-gray-400">$</span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">฿45,231.89</p>
                  <p className="text-sm">
                    <span className="text-green-500">↑ +20.1%</span>
                    <span className="text-gray-500 ml-1">from last week</span>
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-normal text-gray-600">Total Orders</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">+2,350</p>
                  <p className="text-sm">
                    <span className="text-green-500">↑ +15.2%</span>
                    <span className="text-gray-500 ml-1">from last week</span>
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-normal text-gray-600">Staff Performance</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">78.5%</p>
                  <p className="text-sm">
                    <span className="text-red-500">↓ -4.5%</span>
                    <span className="text-gray-500 ml-1">from last week</span>
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-normal text-gray-600">Low Stock Items</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M12 9v2m0 4h.01" /><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z" /></svg>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm">
                    <span className="text-red-500">↑ +3</span>
                    <span className="text-gray-500 ml-1">from last week</span>
                  </p>
                </div>
              </Card>
            </div>

            {/* Charts and Alerts */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1">Recent Alerts</h3>
                  <p className="text-sm text-gray-500">Important notifications requiring your attention</p>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 9v2m0 4h.01" /><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z" /></svg>
                      <p className="text-red-700 text-sm">Alex Johnson's performance is critically low (45%). Immediate attention required.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M12 9v2m0 4h.01" /><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z" /></svg>
                      <p className="text-yellow-700 text-sm">Sophie Chen's performance is below target (55%). Schedule a review.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                      <p className="text-yellow-700 text-sm">Tomato Sauce is running low. Current stock: 22 units</p>
                    </div>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                    <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                      <p className="text-red-700 text-sm">Lettuce is out of stock. Place an order immediately.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1">Weekly Revenue</h3>
                  <p className="text-sm text-gray-500">Overview of this week's revenue</p>
                </div>
                <RevenueChart data={revenueData} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

