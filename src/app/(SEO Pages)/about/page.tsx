import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Upload,
  Users,
  Sparkles,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            About MyShop
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Passion Into Your Personal Store
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {`MyShop is where creators, artists, and passionate individuals come
            together to share what they love. Whether you're selling handmade
            crafts, digital art, or offering personal services, this is your
            space to shine.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg">
              See Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {`We started MyShop because we believe everyone has something
                special to offer the world. Whether you're a weekend baker, a
                digital artist, a fitness coach, or someone with a unique skill
                - you deserve a beautiful space to share your passion.`}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {`We're not about big corporations or complex business strategies.
                We're about real people with real dreams, creating meaningful
                connections through the things they love to make and do.`}
              </p>
              <p className="text-lg text-gray-600">
                This is your community, your support system, and your launchpad
                to turn what you love into something more.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">12K+</div>
                  <div className="text-rose-100">Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85K+</div>
                  <div className="text-rose-100">Unique Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-rose-100">Happy Sellers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-rose-100">Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Made for Real People
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {`We've designed MyShop to be as warm and welcoming as your favorite
              local market, but with all the modern tools you need to succeed.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Upload className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Share What You Love</CardTitle>
                <CardDescription>
                  Upload your creations, services, or digital products in
                  minutes. No tech skills needed - just your passion.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Mobile-Friendly</CardTitle>
                <CardDescription>
                  {`Your customers can discover and buy from you whether they're
                  on their phone, tablet, or computer.`}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Beautiful & Simple</CardTitle>
                <CardDescription>
                  Choose from gorgeous templates that make your work shine, or
                  customize everything to match your style.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Safe & Secure</CardTitle>
                <CardDescription>
                  We handle all the technical stuff so you can focus on
                  creating. Your payments and data are always protected.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Supportive Community</CardTitle>
                <CardDescription>
                  {`Connect with other creators, share tips, and celebrate each
                  other's successes in our friendly community.`}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Heart className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Personal Touch</CardTitle>
                <CardDescription>
                  Tell your story, share your process, and build genuine
                  relationships with people who love what you do.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-gray-600">
              Three simple steps to sharing your passion with the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Create Your Space
              </h3>
              <p className="text-gray-600">
                Sign up and pick a beautiful template that feels like you. Add
                your personal touch with colors, fonts, and your own story.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Share Your Creations
              </h3>
              <p className="text-gray-600">
                Upload photos of your work, write heartfelt descriptions, and
                set your prices. Show the world what makes your creations
                special.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect & Grow
              </h3>
              <p className="text-gray-600">
                {`Go live and start connecting with people who appreciate your
                work. We'll handle payments and shipping while you focus on
                creating.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Share Your Passion?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            {`Join thousands of creators who have found their community here. Your
            story matters, your work is valuable, and we can't wait to see what
            you'll share.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-gray-100"
            >
              Start Creating Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600"
            >
              Meet Our Creators
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6" />
                <span className="text-xl font-bold">MyShop</span>
              </div>
              <p className="text-gray-400">
                A warm community where creators share their passion and connect
                with people who care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Creators</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/getting-started" className="hover:text-white">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/creator-tips" className="hover:text-white">
                    Creator Tips
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/forums" className="hover:text-white">
                    Creator Forums
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Community Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} MyShop. Made with ❤️ for
              creators everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
