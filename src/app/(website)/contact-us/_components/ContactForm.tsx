"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 py-8 sm:py-10 md:py-[70px] lg:my-[83px]">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        {/* Left Side - Contact Form */}
        <Card className="w-full md:w-2/3 bg-pink-50 border-pink-200">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] text-[#212121] leading-[120%] font-semibold mb-2">
              We&apos;re Here to Help!
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-[150%] font-medium text-[#444444] mb-4 sm:mb-6 mt-3 sm:mt-4">
              If you have inquiries, partnerships, or additional information about
              how we can help your local business, please contact our support
              channel.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-[40px] sm:h-[51px] bg-white border-pink-300 focus:border-red-400 focus:ring-red-400"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-[40px] sm:h-[51px] bg-white border-pink-300 focus:border-red-400 focus:ring-red-400"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Ask your Queries"
                  rows={6}
                  className="w-full bg-white border-pink-300 focus:border-red-400 focus:ring-red-400 resize-none text-xs sm:text-sm md:text-base"
                />
              </div>

              <Button
                className="w-full bg-[#EF1A26] hover:bg-red-600 text-white font-medium h-[40px] sm:h-[51px] px-4 rounded-md"
                onClick={() => console.log("Form submitted")}
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Side - Contact Info */}
        <Card className="w-full md:flex-1 bg-pink-50 border-pink-200">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] text-[#212121] leading-[120%] font-semibold mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-6">
              Get in touch
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-10 mb-6 sm:mb-8">
              {/* Address */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[120%] text-[#212121] mb-1 sm:mb-2">
                    Address:
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-[120%] font-medium">
                    3517 W. Gray St. Utica, Pennsylvania 57867
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[120%] text-[#212121] mb-1 sm:mb-2">
                    Phone:
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-[120%] font-medium">
                    (671) 555-0110
                    <br />
                    (229) 555-0109
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[120%] text-[#212121] mb-1 sm:mb-2">
                    Email:
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-[120%] font-medium">
                    felicia.reid@example.com
                    <br />
                    dolores.chambers@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 sm:mt-12 md:mt-14">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Social Media
              </h3>
              <div className="flex gap-2 sm:gap-3">
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="bg-red-500 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;