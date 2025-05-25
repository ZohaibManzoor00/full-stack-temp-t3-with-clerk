import Link from "next/link";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="h-6 w-6" />
            <span className="text-xl font-bold">MyShop</span>
          </div>
          <p className="">
            A warm community where creators share their passion and connect with people who care.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">For Creators</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/getting-started">
                Getting Started
              </Link>
            </li>
            <li>
              <Link href="/creator-tips">
                Creator Tips
              </Link>
            </li>
            <li>
              <Link href="/success-stories">
                Success Stories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/help">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/forums">
                Creator Forums
              </Link>
            </li>
            <li>
              <Link href="/events">
                Community Events
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link href="/newsletter">
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} MyShop. Made with ❤️ for creators everywhere.</p>
      </div>
    </div>
  </footer>
  );
}
