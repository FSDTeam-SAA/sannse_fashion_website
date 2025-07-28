"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import SignInImage from "@/Public/images/signIn.svg";

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const AuthComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Image */}
      <div className="relative hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute top-8 left-8 z-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="text-2xl font-bold text-white">
              SAN<span className="text-red-400">IX</span>SE
            </span>
          </div>
        </div>

        <div className="relative w-full h-screen">
          <Image
            src={SignInImage}
            alt="Sign In Illustration"
            fill
            priority
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-start p-6 bg-gray-50">
        <div className="w-full max-w-2xl">
          <CardHeader className="text-start">
            <CardTitle className="lg:text-[40px] md:text-[30px] text-[24px] font-semibold leading-[120%] text-[#000000]">
              Welcome 👋
            </CardTitle>
            <p className="text-[#B0B0B0] text-base leading-[120%] font-normal mb-8">
              Please enter your details
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-base font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-[51px] border border-[#272727] mt-2"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-base font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-[51px] border border-[#272727] mt-2"
                />
              </div>

              <div className="flex items-center justify-between mt-2 pb-7">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    className="w-5 h-5 rounded-sm border-gray-300 text-red-600 focus:ring-red-500"
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        rememberMe: checked === true,
                      }))
                    }
                  />
                  <Label htmlFor="rememberMe" className="text-sm text-gray-700">
                    Remember Me
                  </Label>
                </div>

                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-700 transition"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full text-base h-[51px] bg-[#EF1A26] hover:bg-[#ee5e65] text-white py-2 rounded-md transition"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
