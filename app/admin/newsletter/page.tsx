"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data
const mockSubscribers = [
  { id: 1, email: "john.doe@example.com", date: "2023-06-01T10:30:00", status: "active" },
  { id: 2, email: "mary.smith@example.com", date: "2023-06-02T14:15:00", status: "active" },
  { id: 3, email: "david.mwangi@example.com", date: "2023-06-03T09:45:00", status: "active" },
  { id: 4, email: "sarah.kimani@example.com", date: "2023-06-04T11:20:00", status: "active" },
  { id: 5, email: "james.ochieng@example.com", date: "2023-06-05T16:30:00", status: "active" },
  { id: 6, email: "grace.wanjiku@example.com", date: "2023-06-06T13:10:00", status: "unsubscribed" },
  { id: 7, email: "peter.kamau@example.com", date: "2023-06-07T10:00:00", status: "unsubscribed" },
]

export default function NewsletterManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter subscribers based on search term
  const filteredSubscribers = mockSubscribers.filter((subscriber) => {
    return subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Newsletter Management</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search subscribers..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Subscribers</CardTitle>
            <CardDescription>{filteredSubscribers.length} subscribers</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b bg-slate-50">
                    <th className="h-10 px-4 text-left font-medium">Email</th>
                    <th className="h-10 px-4 text-left font-medium">Date Subscribed</th>
                    <th className="h-10 px-4 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="border-b">
                      <td className="p-4">{subscriber.email}</td>
                      <td className="p-4">{new Date(subscriber.date).toLocaleDateString()}</td>
                      <td className="p-4">
                        {subscriber.status === "active" ? (
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        ) : (
                          <Badge className="bg-gray-100 text-gray-800">Unsubscribed</Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter Statistics</CardTitle>
          <CardDescription>Overview of your newsletter performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Total Subscribers</p>
              <p className="text-2xl font-bold">{mockSubscribers.length}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Active Subscribers</p>
              <p className="text-2xl font-bold">{mockSubscribers.filter((sub) => sub.status === "active").length}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Unsubscribed</p>
              <p className="text-2xl font-bold">
                {mockSubscribers.filter((sub) => sub.status === "unsubscribed").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
