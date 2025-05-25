"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
// import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inventory: number
  featured: boolean
}

const FAKE_STORE_ID = 1
export default function AddProductPage() {
  const router = useRouter()
//   const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    inventory: "",
    featured: false,
  })

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Books",
    "Toys & Games",
    "Health & Beauty",
    "Automotive",
    "Lifestyle",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.description || !formData.price || !formData.category || !formData.inventory) {
    //   toast({
    //     title: "Missing Fields",
    //     description: "Please fill in all required fields.",
    //     variant: "destructive",
    //   })
      return
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: Number.parseFloat(formData.price),
      image: "/placeholder.svg?height=300&width=300",
      category: formData.category,
      inventory: Number.parseInt(formData.inventory),
      featured: formData.featured,
    }

    // Get existing products
    const existingProducts = JSON.parse(localStorage.getItem("products") || "[]")
    const updatedProducts = [...existingProducts, newProduct]

    // Save to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts))

    // toast({
    //   title: "Product Added",
    //   description: "Your product has been successfully added to the store.",
    // })

    router.back()
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href={`/store/${FAKE_STORE_ID}/admin`}>
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-gray-600 mt-2">Create a new product for your store</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter product name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your product"
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        placeholder="0.00"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inventory">Inventory *</Label>
                      <Input
                        id="inventory"
                        type="number"
                        min="0"
                        value={formData.inventory}
                        onChange={(e) => handleInputChange("inventory", e.target.value)}
                        placeholder="0"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload product image</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    <Button variant="outline" className="mt-4">
                      Choose File
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Note: For this demo, a placeholder image will be used.</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="featured">Featured Product</Label>
                      <p className="text-sm text-gray-500">Show this product prominently</p>
                    </div>
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => handleInputChange("featured", checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button type="submit" className="w-full">
                    Add Product
                  </Button>
                  <Link href="/admin">
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Use clear, descriptive product names</li>
                    <li>• Write detailed descriptions to help customers</li>
                    <li>• Set competitive pricing</li>
                    <li>• Keep inventory levels updated</li>
                    <li>• Use high-quality product images</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
