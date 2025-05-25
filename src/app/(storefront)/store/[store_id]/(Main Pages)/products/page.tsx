"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Star,
  Download,
  Calendar,
  MapPin,
  Globe,
  Twitter,
  Instagram,
  Heart,
  Grid3X3,
  List,
} from "lucide-react";

// Mock data for the seller and their products
const seller = {
  id: "sarah-designs",
  name: "Sarah Chen",
  avatar: "/bg-placeholder.svg?height=120&width=120",
  coverImage: "/placeholder.svg?height=300&width=1200",
  bio: "Digital artist and UI/UX designer creating beautiful templates and resources to help fellow creators shine ✨",
  location: "San Francisco, CA",
  joinDate: "2022",
  totalSales: "2.4k",
  rating: 4.9,
  reviewCount: 847,
  followers: "12.3k",
  website: "sarahchen.design",
  social: {
    twitter: "@sarahdesigns",
    instagram: "@sarah.creates",
  },
  specialties: ["UI/UX Design", "Digital Templates", "Brand Identity"],
};

const products = [
  {
    id: 1,
    title: "Modern Dashboard UI Kit",
    description:
      "Complete dashboard interface with 50+ components and dark/light modes",
    price: 49,
    originalPrice: 79,
    image: "/bg-placeholder.svg?height=300&width=400",
    category: "UI Kits",
    tags: ["Dashboard", "Components", "Figma"],
    rating: 4.8,
    sales: 234,
    featured: true,
    type: "Template",
    fileTypes: ["Figma", "Sketch", "Adobe XD"],
  },
  {
    id: 2,
    title: "Brand Identity Starter Pack",
    description:
      "Everything you need to build a cohesive brand: logos, colors, typography guides",
    price: 35,
    image: "/bg-placeholder.svg?height=300&width=400",
    category: "Branding",
    tags: ["Logo", "Brand Guide", "Typography"],
    rating: 4.9,
    sales: 189,
    featured: false,
    type: "Template",
    fileTypes: ["AI", "PSD", "PDF"],
  },
  {
    id: 3,
    title: "E-commerce Mobile App Design",
    description:
      "Complete mobile shopping app design with user flows and prototypes",
    price: 65,
    image: "/bg-placeholder.svg?height=300&width=400",
    category: "Mobile Design",
    tags: ["Mobile", "E-commerce", "Prototype"],
    rating: 4.7,
    sales: 156,
    featured: true,
    type: "Template",
    fileTypes: ["Figma", "Principle"],
  },
  {
    id: 4,
    title: "Social Media Template Bundle",
    description:
      "200+ Instagram and Twitter templates for consistent social presence",
    price: 25,
    originalPrice: 40,
    image: "/placeholder.png",
    category: "Social Media",
    tags: ["Instagram", "Twitter", "Templates"],
    rating: 4.6,
    sales: 423,
    featured: false,
    type: "Template",
    fileTypes: ["PSD", "Canva", "AI"],
  },
  {
    id: 5,
    title: "Design System Masterclass",
    description:
      "Learn to build scalable design systems from scratch with real examples",
    price: 89,
    image: "/bg-placeholder.svg?height=300&width=400",
    category: "Courses",
    tags: ["Design System", "Tutorial", "Advanced"],
    rating: 4.9,
    sales: 78,
    featured: true,
    type: "Course",
    duration: "4.5 hours",
  },
  {
    id: 6,
    title: "Minimalist Portfolio Template",
    description:
      "Clean, modern portfolio template perfect for designers and developers",
    price: 29,
    image: "/placeholder.png",
    category: "Web Design",
    tags: ["Portfolio", "Minimalist", "Responsive"],
    rating: 4.8,
    sales: 312,
    featured: false,
    type: "Template",
    fileTypes: ["HTML", "CSS", "Figma"],
  },
];

const categories = [
  "All",
  "UI Kits",
  "Branding",
  "Mobile Design",
  "Social Media",
  "Courses",
  "Web Design",
];

export default function SellerAllProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );
        const matchesCategory =
          selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.featured ? 1 : -1;
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "popular":
            return b.sales - a.sales;
          case "rating":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-64 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-6xl mx-auto flex items-end gap-6">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage
                  src={seller.avatar || "/placeholder.svg"}
                  alt={seller.name}
                />
                <AvatarFallback className="text-2xl">
                  {seller.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-white pb-2">
                <h1 className="text-3xl font-bold mb-2">{seller.name}</h1>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {seller.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Creating since {seller.joinDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Seller Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {seller.bio}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {seller.specialties.map((specialty) => (
                <Badge
                  key={specialty}
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link
                href={`https://${seller.website}`}
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <Globe className="w-4 h-4" />
                {seller.website}
              </Link>
              <Link
                href={`https://twitter.com/${seller.social.twitter.slice(1)}`}
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <Twitter className="w-4 h-4" />
                {seller.social.twitter}
              </Link>
              <Link
                href={`https://instagram.com/${seller.social.instagram.slice(
                  1
                )}`}
                className="flex items-center gap-1 hover:text-purple-600"
              >
                <Instagram className="w-4 h-4" />
                {seller.social.instagram}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {seller.totalSales}
                    </div>
                    <div className="text-sm text-gray-600">Total Sales</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {seller.followers}
                    </div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="col-span-2 pt-4 border-t">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{seller.rating}</span>
                      <span className="text-gray-600">
                        ({seller.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Heart className="w-4 h-4 mr-2" />
              Follow Sarah
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search Sarah's products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-4"
          >
            <TabsList className="grid w-full grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-1 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {viewMode === "grid" ? (
                <>
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {product.featured && (
                      <Badge className="absolute top-3 left-3 bg-purple-600">
                        Featured
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-red-500">
                        Sale
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg leading-tight">
                        {product.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {product.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.sales})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {product.fileTypes && (
                      <div className="text-xs text-gray-500 mb-3">
                        Includes: {product.fileTypes.join(", ")}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-purple-600">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Buy Now
                      </Button>
                    </div>
                  </CardFooter>
                </>
              ) : (
                <div className="flex gap-4 p-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={120}
                    height={90}
                    className="w-30 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{product.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-purple-600">
                          ${product.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {product.rating}
                      </div>
                      <span>{product.sales} sales</span>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
