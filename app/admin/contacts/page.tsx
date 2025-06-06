"use client"

import { useState } from "react"
import { MessageSquare, Search, Mail, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data
const mockContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+254 712 345678",
    interest: "Language Courses",
    course: "English Courses",
    message:
      "I'm interested in improving my English for business purposes. Could you provide more information about your advanced business English courses?",
    date: "2023-06-01T10:30:00",
    status: "new",
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "Smith",
    email: "mary.smith@example.com",
    phone: "+254 723 456789",
    interest: "Proficiency Exams",
    course: "IELTS Preparation",
    message:
      "I need to take the IELTS exam for university admission. I'm looking for an intensive preparation course that can help me achieve a band score of 7 or higher.",
    date: "2023-06-02T14:15:00",
    status: "new",
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Mwangi",
    email: "david.mwangi@example.com",
    phone: "+254 734 567890",
    interest: "Language Courses",
    course: "French Courses",
    message:
      "I'm planning to study in France next year and need to learn French from scratch. Do you offer intensive courses that can help me reach B1 level in 6 months?",
    date: "2023-06-03T09:45:00",
    status: "in-progress",
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Kimani",
    email: "sarah.kimani@example.com",
    phone: "+254 745 678901",
    interest: "Corporate Training",
    course: "Other",
    message:
      "I'm the HR manager at XYZ Company. We're interested in arranging Spanish language training for our team of 15 employees. Could you provide information about corporate packages?",
    date: "2023-06-04T11:20:00",
    status: "in-progress",
  },
]

export default function ContactSubmissions() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter contacts based on search term
  const filteredContacts = mockContacts.filter((contact) => {
    return (
      `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-800">New</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Contact Submissions</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{filteredContacts.length} submissions</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search submissions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>
                    {contact.firstName} {contact.lastName}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Mail className="h-3 w-3" /> {contact.email}
                    <span className="mx-1">•</span>
                    <Phone className="h-3 w-3" /> {contact.phone}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">{getStatusBadge(contact.status)}</div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(contact.date).toLocaleString()}</span>
                  <span className="mx-1">•</span>
                  <span>Interest: {contact.interest}</span>
                  <span className="mx-1">•</span>
                  <span>Course: {contact.course}</span>
                </div>
                <p className="text-sm line-clamp-2">{contact.message}</p>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button size="sm">Reply</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-10">
          <MessageSquare className="h-10 w-10 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No submissions found</h3>
          <p className="text-muted-foreground">
            {searchTerm ? "Try adjusting your search term" : "Contact submissions will appear here"}
          </p>
        </div>
      )}
    </div>
  )
}
