'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Star } from 'lucide-react'

interface ReviewFormData {
  rating: number
  review: string
  name: string
  email: string
  saveInfo: boolean
}

const CustomerReviews: React.FC = () => {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    review: '',
    name: '',
    email: '',
    saveInfo: false
  })

  const [hoveredRating, setHoveredRating] = useState<number>(0)

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating)
  }

  const handleInputChange = (field: keyof ReviewFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Review submitted:', formData)
  }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const isActive = i <= (hoveredRating || formData.rating)
      stars.push(
        <button
          key={i}
          type="button"
          className="focus:outline-none"
          onClick={() => handleRatingClick(i)}
          onMouseEnter={() => handleRatingHover(i)}
          onMouseLeave={() => setHoveredRating(0)}
        >
          <Star
            className={`w-5 h-5 transition-colors duration-200 ${
              isActive 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'fill-none text-gray-300 hover:text-yellow-400'
            }`}
          />
        </button>
      )
    }
    return stars
  }

  return (
    <div className="container mx-auto px-4 bg-white lg:mb-[58px] md:mb-[43px] mb-[38px]">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="lg:text-[32px] md:text-[28px] text-[20px] font-semibold leading-[120%] mb-8">
            Customer Reviews
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Be the first to review This Product
            </h2>
            
            <p className="text-sm text-gray-600">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating Section */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">
              Your Rating
            </label>
            <div className="flex items-center gap-1">
              {renderStars()}
            </div>
          </div>

          {/* Review Textarea */}
          <div className="space-y-2">
            <Textarea
              placeholder="Your Review"
              value={formData.review}
              onChange={(e) => handleInputChange('review', e.target.value)}
              className="min-h-[120px] resize-none border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 h-[51px]"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 h-[51px]"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="save-info"
              checked={formData.saveInfo}
              onCheckedChange={(checked) => handleInputChange('saveInfo', checked as boolean)}
              className="border-gray-300 w-[22px] h-[22px]" 
            />
            <label
              htmlFor="save-info "
              className="text-base text-gray-700 cursor-pointer"
            >
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomerReviews