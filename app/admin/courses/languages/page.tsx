"use client"

import { useState } from "react"
import { BookOpen, Search, Calendar, Users, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data
const mockCourses = [
  {
    id: 1,
    name: "English Beginner",
    language: "English",
    level: "Beginner (A1)",
    duration: "12 weeks",
    schedule: "Mon, Wed, Fri (9:00 AM - 11:00 AM)",
    price: 25000,
    students: 45,
    description:
      "A comprehensive beginner course for students with little to no prior knowledge of English. Focuses on basic vocabulary, grammar, and everyday conversation.",
    status: "active",
  },
  {
    id: 2,
    name: "English Intermediate",
    language: "English",
    level: "Intermediate (B1)",
    duration: "12 weeks",
    schedule: "Mon, Wed, Fri (2:00 PM - 4:00 PM)",
    price: 28000,
    students: 38,
    description:
      "For students who have a basic understanding of English. Focuses on expanding vocabulary, more complex grammar structures, and improving fluency in various contexts.",
    status: "active",
  },
  {
    id: 3,
    name: "English Advanced",
    language: "English",
    level: "Advanced (C1)",
    duration: "12 weeks",
    schedule: "Tue, Thu (5:00 PM - 8:00 PM)",
    price: 32000,
    students: 25,
    description:
      "For students with a strong command of English. Focuses on advanced grammar, idiomatic expressions, academic writing, and professional communication.",
    status: "active",
  },
  {
    id: 4,
    name: "French Beginner",
    language: "French",
    level: "Beginner (A1)",
    duration: "12 weeks",
    schedule: "Tue, Thu (9:00 AM - 11:00 AM)",
    price: 25000,
    students: 32,
    description:
      "A comprehensive beginner course for students with little to no prior knowledge of French. Focuses on basic vocabulary, grammar, and everyday conversation.",
    status: "active",
  },
]

export default function LanguageCoursesManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter courses based on search term
  const filteredCourses = mockCourses.filter((course) => {
    return (
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Language Courses</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>
                    {course.language} - {course.level}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{course.students} students enrolled</span>
                </div>
                <div className="mt-2">
                  <Badge
                    className={`
                      ${course.status === "active" ? "bg-green-100 text-green-800" : ""}
                      ${course.status === "inactive" ? "bg-gray-100 text-gray-800" : ""}
                    `}
                  >
                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2 pt-2">
              <div className="text-sm text-muted-foreground">Price: KES {course.price.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">ID: {course.id}</div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-10">
          <BookOpen className="h-10 w-10 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No courses found</h3>
          <p className="text-muted-foreground">
            {searchTerm ? "Try adjusting your search term" : "No courses available"}
          </p>
        </div>
      )}
    </div>
  )
}
