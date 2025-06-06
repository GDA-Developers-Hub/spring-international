"use client"

import { useState } from "react"
import { Star, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock data
const mockReviews = [
  {
    id: 1,
    name: "Sarah Kimani",
    email: "sarah.k@example.com",
    course: "English Advanced",
    rating: 5,
    review:
      "Language Academy transformed my English skills completely. The instructors are patient and knowledgeable, and the small class sizes ensure personalized attention. I passed my IELTS with a band 7.5!",
    date: "2023-06-01T10:30:00",
    status: "published",
  },
  {
    id: 2,
    name: "David Ochieng",
    email: "david.o@example.com",
    course: "French Beginner",
    rating: 5,
    review:
      "Learning French at Language Academy was one of the best decisions I've made. The immersive teaching methods and cultural insights have prepared me well for my studies in France. Merci beaucoup!",
    date: "2023-06-02T14:15:00",
    status: "published",
  },
  {
    id: 3,
    name: "Amina Hassan",
    email: "amina.h@example.com",
    course: "Arabic Beginner",
    rating: 4,
    review:
      "The Arabic course exceeded my expectations. The instructors make complex grammar concepts easy to understand, and the conversational practice has given me confidence to speak with native speakers.",
    date: "2023-06-03T09:45:00",
    status: "published",
  },
  {
    id: 4,
    name: "John Mwangi",
    email: "john.m@example.com",
    course: "TOEFL Preparation",
    rating: 5,
    review:
      "I needed to improve my TOEFL score for university admission, and Language Academy helped me achieve it in just 3 months. The exam preparation strategies were invaluable!",
    date: "2023-06-04T11:20:00",
    status: "published",
  },
]

export default function ReviewsManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter reviews based on search term
  const filteredReviews = mockReviews.filter((review) => {
    return (
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.review.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Published</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return null
    }
  }

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Student Reviews</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{filteredReviews.length} reviews</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search reviews..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{review.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span>{review.course}</span>
                      <span className="mx-1">•</span>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </CardDescription>
                    <div className="mt-1">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">{getStatusBadge(review.status)}</div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm line-clamp-2">{review.review}</p>
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

      {filteredReviews.length === 0 && (
        <div className="text-center py-10">
          <Star className="h-10 w-10 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No reviews found</h3>
          <p className="text-muted-foreground">
            {searchTerm ? "Try adjusting your search term" : "Student reviews will appear here"}
          </p>
        </div>
      )}
    </div>
  )
}
