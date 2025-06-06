"use client"

import { useState } from "react"
import { Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data
const mockBatches = [
  {
    id: 1,
    course: "English Advanced",
    startDate: "2023-06-15",
    endDate: "2023-08-30",
    days: "Mon, Wed, Fri",
    time: "9:00 AM - 11:00 AM",
    instructor: "Dr. Sarah Johnson",
    capacity: 20,
    enrolled: 15,
    status: "upcoming",
  },
  {
    id: 2,
    course: "French Beginner",
    startDate: "2023-06-20",
    endDate: "2023-09-05",
    days: "Tue, Thu",
    time: "2:00 PM - 4:00 PM",
    instructor: "Jean Pierre",
    capacity: 15,
    enrolled: 12,
    status: "upcoming",
  },
  {
    id: 3,
    course: "IELTS Preparation",
    startDate: "2023-07-01",
    endDate: "2023-08-15",
    days: "Mon, Wed, Fri",
    time: "5:00 PM - 7:00 PM",
    instructor: "Dr. Michael Brown",
    capacity: 25,
    enrolled: 22,
    status: "upcoming",
  },
  {
    id: 4,
    course: "Spanish Intermediate",
    startDate: "2023-07-10",
    endDate: "2023-09-25",
    days: "Tue, Thu, Sat",
    time: "10:00 AM - 12:00 PM",
    instructor: "Maria Rodriguez",
    capacity: 18,
    enrolled: 10,
    status: "upcoming",
  },
]

export default function BatchManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter batches based on search term
  const filteredBatches = mockBatches.filter((batch) => {
    return (
      batch.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      batch.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Batch Management</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search batches..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBatches.map((batch) => (
          <Card key={batch.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{batch.course}</CardTitle>
                  <CardDescription>{batch.instructor}</CardDescription>
                </div>
                <Badge
                  className={`
                    ${batch.status === "upcoming" ? "bg-blue-100 text-blue-800" : ""}
                    ${batch.status === "active" ? "bg-green-100 text-green-800" : ""}
                    ${batch.status === "completed" ? "bg-gray-100 text-gray-800" : ""}
                  `}
                >
                  {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span>{new Date(batch.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">End Date:</span>
                  <span>{new Date(batch.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Schedule:</span>
                  <span>
                    {batch.days}, {batch.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enrollment:</span>
                  <span>
                    {batch.enrolled}/{batch.capacity}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 pt-2">
              <div className="text-sm text-muted-foreground">ID: {batch.id}</div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredBatches.length === 0 && (
        <div className="text-center py-10">
          <Calendar className="h-10 w-10 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No batches found</h3>
          <p className="text-muted-foreground">
            {searchTerm ? "Try adjusting your search term" : "No batches available"}
          </p>
        </div>
      )}
    </div>
  )
}
