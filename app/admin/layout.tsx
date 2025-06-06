"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Users, BookOpen, Calendar, MessageSquare, Mail, Star, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
// Add the wrapper import at the top of the file
import AdminWrapper from "./wrapper"

// Define types
interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

// Mock authentication state
const useAuth = (): AuthState => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // Auto-login with demo credentials
    const autoLogin = (): void => {
      localStorage.setItem("admin_token", "mock_token_12345")
      setIsAuthenticated(true)
      setIsLoading(false)
    }

    autoLogin()
  }, [])

  const login = (email: string, password: string): boolean => {
    // Mock login - in a real app, this would call an API
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("admin_token", "mock_token_12345")
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = (): void => {
    localStorage.removeItem("admin_token")
    setIsAuthenticated(false)
  }

  return { isAuthenticated, isLoading, login, logout }
}

// Navigation items
const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Batch Management",
    href: "/admin/batches",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Contact Submissions",
    href: "/admin/contacts",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Newsletter",
    href: "/admin/newsletter",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "Student Reviews",
    href: "/admin/reviews",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Course Management",
    href: "/admin/courses/languages",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: <Users className="h-5 w-5" />,
  },
]

// Login component
function LoginForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    const success = login(email, password)
    if (!success) {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Dashboard</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Sign in to access the admin panel</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#0046ad] focus:border-[#0046ad] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0046ad] focus:border-[#0046ad] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0046ad] hover:bg-[#0067ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0046ad]"
            >
              Sign in
            </button>
          </div>

          <div className="text-sm text-center text-gray-500">
            <p>Demo credentials:</p>
            <p>Email: admin@example.com</p>
            <p>Password: password</p>
          </div>
        </form>
      </div>
    </div>
  )
}

// Sidebar component
function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <div className={`h-full ${className || ""}`}>
      <div className="px-4 py-4">
        <h2 className="px-2 text-xl font-semibold tracking-tight">Admin Panel</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item, i) => (
              <Button
                key={i}
                variant="ghost"
                asChild
                className={`w-full justify-start font-normal ${pathname === item.href ? "bg-muted" : ""}`}
              >
                <Link href={item.href}>
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </Button>
            ))}

            <Button
              variant="ghost"
              className="w-full justify-start font-normal text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={logout}
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

// Mobile navigation
function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="h-full py-6">
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
}

// Main layout component
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <AdminWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0046ad]"></div>
        </div>
      </AdminWrapper>
    )
  }

  if (!isAuthenticated) {
    return (
      <AdminWrapper>
        <LoginForm />
      </AdminWrapper>
    )
  }

  return (
    <AdminWrapper>
      <div className="flex h-screen overflow-hidden">
        <div className="hidden md:flex md:w-64 md:flex-col h-full">
          <div className="flex flex-col h-full border-r border-gray-200 bg-white">
            <Sidebar className="flex-1" />
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex items-center">
                <MobileNav />
                <h1 className="text-2xl font-semibold text-gray-900 ml-2 md:ml-0">Language Academy Admin</h1>
              </div>
            </div>
          </div>
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </AdminWrapper>
  )
}
