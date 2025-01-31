// import Navbar from "@/components/Navbar";
"use client";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React , {useRef,useEffect} from "react";
import Typed from "typed.js";
// import Image from "next/image";

export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []); 

  return (
    <main className="ml-6 mr-6 md:ml-12 md:mr-12 sm:ml-2 sm:mr-2">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Explore the Future of Technology with{" "}
            <span className="font-bold text-indigo-700 underline">
              PulsePost
            </span>{" "}
            <br className="hidden lg:block" />{" "}
            <span className="font-semibold  decoration-primary">
              <span ref = {el}/>
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            PulsePost – A tech-focused{" "}
            <span className="font-bold text-indigo-600">blog platform</span>{" "}
            <br className="hidden lg:block" /> to share insights, trends, and
            innovations with the world!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto "
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>10GB Storage</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Single User</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    50GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Up to 5 Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Daily Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    200GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "This service has been a game-changer for our business. Highly
                  recommend!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  John Doe
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CEO, Company A
                </p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Amazing experience! The team was professional and the results
                  were outstanding."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Jane Smith
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Marketing Director, Company B
                </p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Exceptional service and support. We couldn't be happier with
                  the results."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Michael Brown
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CTO, Company C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="/image_home1.jpg"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 1
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 2
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 3
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}

    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Branding */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">PulsePost</h2>
          <p className="text-sm text-gray-400">Your daily dose of insights.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-400 text-sm">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          <a href="#" className="hover:text-white text-lg"><FaFacebook /></a>
          <a href="#" className="hover:text-white text-lg"><FaTwitter /></a>
          <a href="#" className="hover:text-white text-lg"><FaInstagram /></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} PulsePost. All rights reserved.
      </div>
    </footer>
    </main>
  );
}
