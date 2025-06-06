"use client"

import { useState } from "react"
import { Users, Search, Mail, Phone, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+254 712 345 678",
    role: "student",
    status: "active",
    joinDate: "2023-01-15",
    courses: ["English Advanced", "IELTS Preparation"],
    location: "Nairobi, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Mary Smith",
    email: "mary.smith@example.com",
    phone: "+254 723 456 789",
    role: "student",
    status: "active",
    joinDate: "2023-02-10",
    courses: ["French Beginner"],
    location: "Mombasa, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "David Mwangi",
    email: "david.mwangi@example.com",
    phone: "+254 734 567 890",
    role: "student",
    status: "inactive",
    joinDate: "2023-01-05",
    courses: ["Spanish Intermediate"],
    location: "Kisumu, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+254 745 678 901",
    role: "instructor",
    status: "active",
    joinDate: "2022-11-20",
    courses: ["English Beginner", "English Intermediate", "English Advanced"],
    location: "Nairobi, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Jean Pierre",
    email: "jean.pierre@example.com",
    phone: "+254 756 789 012",
    role: "instructor",
    status: "active",
    joinDate: "2022-12-05",
    courses: ["French Beginner", "French Intermediate"],
    location: "Nairobi, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Grace Wanjiku",
    email: "grace.wanjiku@example.com",
    phone: "+254 767 890 123",
    role: "admin",
    status: "active",
    joinDate: "2022-10-15",
    courses: [],
    location: "Nairobi, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+254 778 901 234",
    role: "instructor",
    status: "active",
    joinDate: "2022-11-10",
    courses: ["IELTS Preparation", "TOEFL Preparation"],
    location: "Nairobi, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Elizabeth Akinyi",
    email: "elizabeth.akinyi@example.com",
    phone: "+254 789 012 345",
    role: "student",
    status: "active",
    joinDate: "2023-03-01",
    courses: ["German Beginner"],
    location: "Eldoret, Kenya",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  // Filter users based on search term and role filter
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role === roleFilter

    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Badge
            onClick={() => setRoleFilter("all")}
            className={`cursor-pointer px-3 py-1 ${
              roleFilter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            All
          </Badge>
          <Badge
            onClick={() => setRoleFilter("student")}
            className={`cursor-pointer px-3 py-1 ${
              roleFilter === "student" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            Students
          </Badge>
          <Badge
            onClick={() => setRoleFilter("instructor")}
            className={`cursor-pointer px-3 py-1 ${
              roleFilter === "instructor"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            Instructors
          </Badge>
          <Badge
            onClick={() => setRoleFilter("admin")}
            className={`cursor-pointer px-3 py-1 ${
              roleFilter === "admin" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            Admins
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <div className="flex gap-2 mt-1">
                    <Badge
                      className={`
                        ${user.role === "student" ? "bg-blue-100 text-blue-800" : ""}
                        ${user.role === "instructor" ? "bg-purple-100 text-purple-800" : ""}
                        ${user.role === "admin" ? "bg-amber-100 text-amber-800" : ""}
                      `}
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                    <Badge
                      className={`
                        ${user.status === "active" ? "bg-green-100 text-green-800" : ""}
                        ${user.status === "inactive" ? "bg-gray-100 text-gray-800" : ""}
                      `}
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined: {new Date(user.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{user.location}</span>
                </div>
                {user.role === "student" || user.role === "instructor" ? (
                  <div className="mt-2">
                    <p className="text-muted-foreground mb-1">
                      {user.role === "student" ? "Enrolled in:" : "Teaching:"}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {user.courses.map((course, index) => (
                        <Badge key={index} variant="outline" className="bg-slate-50">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-10">
          <Users className="h-10 w-10 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No users found</h3>
          <p className="text-muted-foreground">
            {searchTerm ? "Try adjusting your search term" : "Add a new user to get started"}
          </p>
        </div>
      )}
    </div>
  )
}
