"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

// Types for our chart data
interface EnrollmentData {
  name: string;
  count: number;
}

interface RevenueData {
  name: string;
  amount: number;
}

interface LanguageData {
  name: string;
  students: number;
}

// Sample data for charts
const enrollmentData: EnrollmentData[] = [
  { name: "Jan", count: 45 },
  { name: "Feb", count: 52 },
  { name: "Mar", count: 49 },
  { name: "Apr", count: 62 },
  { name: "May", count: 55 },
  { name: "Jun", count: 60 },
  { name: "Jul", count: 68 },
  { name: "Aug", count: 75 },
]

const revenueData: RevenueData[] = [
  { name: "Jan", amount: 12500 },
  { name: "Feb", amount: 14200 },
  { name: "Mar", amount: 13800 },
  { name: "Apr", amount: 16500 },
  { name: "May", amount: 15200 },
  { name: "Jun", amount: 16800 },
  { name: "Jul", amount: 18500 },
  { name: "Aug", amount: 20200 },
]

const languageDistribution: LanguageData[] = [
  { name: "English", students: 320 },
  { name: "French", students: 240 },
  { name: "Spanish", students: 180 },
  { name: "German", students: 120 },
  { name: "Arabic", students: 90 },
  { name: "Swahili", students: 60 },
]

export default function Charts() {
  return (
    <Tabs defaultValue="enrollments" className="w-full">
      <TabsList>
        <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
        <TabsTrigger value="revenue">Revenue</TabsTrigger>
        <TabsTrigger value="languages">Language Distribution</TabsTrigger>
      </TabsList>

      <TabsContent value="enrollments" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Enrollments</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#0046ad" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="revenue" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#0067ff" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="languages" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Students by Language</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={languageDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#0046ad" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
} 