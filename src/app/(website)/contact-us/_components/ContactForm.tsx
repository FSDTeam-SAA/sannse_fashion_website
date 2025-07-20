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
    <div className="flex flex-col md:flex-row gap-6 container mx-auto p-6 lg:my-[83px] md:py-[70px] py-[65px]">
      {/* Left Side - Contact Form */}
      <Card className="w-2/3 bg-pink-50 border-pink-200">
        <CardContent className="p-6">
          <h2 className="lg:text-[32px] md:text-[28px] text-[20px] text-[#212121] leading-[120%] font-semibold mb-2">
            We&apos;re Here to Help!
          </h2>
          <p className="text-base leading-[150%] font-medium text-[#444444] mb-6 mt-4 ">
            If you have inquiries, partnerships, or additional information about
            how we can help your local business, please contact our support
            channel.
          </p>

          <div className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                className="w-full h-[51px] bg-white border-pink-300 focus:border-red-400 focus:ring-red-400"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Subject"
                className="w-full h-[51px] bg-white border-pink-300 focus:border-red-400 focus:ring-red-400"
              />
            </div>

            <div>
              <Textarea
                placeholder="Ask your Queries"
                rows={8}
                className="w-full bg-white border-pink-300 focus:border-red-400 focus:ring-red-400 resize-none"
              />
            </div>

            <Button
              className="w-full bg-[#EF1A26] hover:bg-red-600 text-white font-medium h-[51px] px-4 rounded-md"
              onClick={() => console.log("Form submitted")}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Right Side - Contact Info */}
      <Card className="flex-1 bg-pink-50 border-pink-200">
        <CardContent className="p-6">
          <h2 className="lg:text-[32px] md:text-[28px] text-[20px] text-[#212121] leading-[120%] font-semibold mb-10 mt-6">
            Get in touch
          </h2>

          <div className="space-y-10 mb-8">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold leading-[120%] text-[#212121] mb-2">
                  Address:
                </h3>
                <p className="text-base leading-[120%] font-medium">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold leading-[120%] text-[#212121] mb-2">
                  Phone:
                </h3>
                <p className="text-base leading-[120%] font-medium">
                  (671) 555-0110
                  <br />
                  (229) 555-0109
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold leading-[120%] text-[#212121] mb-2">
                  Email:
                </h3>
                <p className="text-base leading-[120%] font-medium">
                  felicia.reid@example.com
                  <br />
                  dolores.chambers@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Social Media
            </h3>
            <div className="flex gap-3">
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </div>
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <div className="bg-red-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
