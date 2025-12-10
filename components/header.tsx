"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login"},
    { href: "#", label: "Top Bottom Vote" },
    { href: "#", label: "Log" },
    { href: "#", label: "Room" },
    { href: "#", label: "Manage" },
    { href: "#", label: "Correction" },
    { href: "#", label: "Presentation" },
    { href: "#", label: "View" },
    { href: "#", label: "Candidate" },
    { href: "/profile", label: "Profile" },
    { href: "/skill-map", label: "Skill Map" },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-5">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 ">
            <Image
              src="/images/ribbon.png"   // image ada di folder /public
              alt="My photo"
              width={50}
              height={200}
            />
            <Image
              src="/images/ci_nar.png"   // image ada di folder /public
              alt="My photo"
              width={150}
              height={150}
            />
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4 flex-col">
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Hi, <span className="font-medium text-blue-600">HANS INDRAWAN SUCIPTO</span>
              </p>
              <p className="text-xs text-gray-500">Mon Sep 15 2025 - 12:48:02</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-xs">
                🌙 Light Theme
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                Sign Out 🚪
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t">
          <div className="flex space-x-8 pt-2 overflow-x-auto ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm whitespace-nowrap transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-3"
                    : "text-gray-600 hover:text-blue-600 pb-3"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
