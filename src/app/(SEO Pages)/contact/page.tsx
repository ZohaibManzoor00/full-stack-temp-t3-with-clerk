import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  MessageCircle,
  Mail,
  BookOpen,
  Users,
  Video,
  Upload,
  CreditCard,
  Settings,
  Smartphone,
  CheckCircle,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Help & Support
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {`We're Here to Help You Succeed`}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {`Whether you're just getting started or looking to grow your store,
            our support team and community are here to guide you every step of
            the way.`}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for help articles, tutorials, or common questions..."
              className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Help Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Upload className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Getting Started</CardTitle>
                <CardDescription>
                  Learn how to set up your store and upload your first products
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <CreditCard className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Payments & Orders</CardTitle>
                <CardDescription>
                  Understanding payments, fees, and managing your orders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Settings className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Store Customization</CardTitle>
                <CardDescription>
                  Make your store uniquely yours with themes and settings
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Mobile App</CardTitle>
                <CardDescription>
                  Managing your store on the go with our mobile app
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                How do I create my first store?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {`Creating your store is super easy! Just sign up for a free
                account, choose a beautiful template that matches your style,
                and start adding your products. Our step-by-step guide will walk
                you through everything, and you can have your store live in
                under 30 minutes.`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                What fees do you charge?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {`We believe in keeping things simple and fair. We only charge a
                small 3% transaction fee when you make a sale - no monthly fees,
                no setup costs, no hidden charges. You only pay when you earn,
                which means we're invested in your success!`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                How do I get paid?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {`Payments are automatically transferred to your bank account or
                PayPal every week. We handle all the payment processing
                securely, so you don't have to worry about the technical stuff.
                You'll get detailed reports of all your sales and earnings.`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Can I sell digital products and services?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {`Whether you're selling physical handmade items, digital
                downloads like art prints or courses, or offering services like
                coaching or consultations - MyShop supports it all. We have
                special tools for digital delivery and booking services.`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                Do I need technical skills to use MyShop?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {`Not at all! We've designed MyShop to be as easy as posting on
                social media. If you can upload a photo and write a description,
                you can create a beautiful store. Our drag-and-drop tools and
                pre-made templates make everything simple and intuitive.`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                How do I promote my store?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {`We provide lots of tools to help you share your store! You get a
                beautiful, shareable link for social media, built-in SEO to help
                people find you on Google, and access to our creator community
                where you can cross-promote with other makers. We also have
                guides on social media marketing written specifically for
                creators.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600">
              Our friendly support team is here for you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription className="mb-4">
                  {`Get instant help from our support team. We're online
                  Monday-Friday, 9am-6pm EST.`}
                </CardDescription>
                <Button className="bg-pink-500 hover:bg-pink-700">
                  Start Chat
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription className="mb-4">
                  {`Send us a detailed message and we'll get back to you within 24
                  hours.`}
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  Send Email
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <CardTitle>Community Forum</CardTitle>
                <CardDescription className="mb-4">
                  Connect with other creators, share tips, and get advice from
                  the community.
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-50"
                >
                  Join Forum
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Learning Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-pink-500" />
                  <div>
                    <CardTitle>Creator Guides</CardTitle>
                    <CardDescription>
                      Step-by-step tutorials for every aspect of your store
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Setting up your first store</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Photography tips for products</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Writing compelling product descriptions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Pricing your work fairly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Video className="h-8 w-8 text-pink-500" />
                  <div>
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>
                      Watch and learn with our easy-to-follow video guides
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Store setup walkthrough (5 min)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Customizing your store design (8 min)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Managing orders and customers (6 min)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Marketing your store on social media (12 min)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-lg font-semibold text-gray-900">
              All Systems Operational
            </span>
          </div>
          <p className="text-gray-600">
            MyShop is running smoothly with 99.9% uptime. Check our{" "}
            <Link href="/status" className="text-pink-500 hover:underline">
              status page
            </Link>{" "}
            for real-time updates.
          </p>
        </div>
      </section>
    </div>
  );
}
