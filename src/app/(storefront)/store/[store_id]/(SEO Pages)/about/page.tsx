import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function StoreAboutPage() {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-balance">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            About StoreBuilder
          </Badge>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl tracking-tight m-4 font-bold">
            Empowering Everyone to Build Their Dream Store
          </h1>
          <p className="text-lg lg:text-2xl xl:text-3xl max-w-screen-xl">
            {`StoreBuilder is a revolutionary platform that makes it incredibly
            easy for anyone to create, customize, and manage their own online
            store. Whether you're selling products or services, we've got you
            covered.`}
          </p>
        </div>
      </section>

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
              className="border-white text-rose hover:bg-white hover:text-rose-600"
            >
              Meet Our Creators
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
