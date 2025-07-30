
'use client'

import React from 'react'

interface BulletPoint {
  text: string
}

interface ContentSection {
  title?: string
  paragraph?: string
  bulletPoints?: BulletPoint[]
}

const ProductDetailsContent: React.FC = () => {
  const contentSections: ContentSection[] = [
    {
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor urna. Sed sed felis dui. Suspendisse nec ligula vel nulla ullamcorper volutpat. Integer luctus facilisis nunc, sit amet mattis odio vestibulum sit amet. Vestibulum sed egestas augue. Nullam ac cursus felis. Vivamus mattis quam ut leo finibus finibus. Pellentesque vehicula lorem vitae vehicula ultrices. Quisque sit amet dui ex. Sed vitae maximus odio, et pretium diam. Vestibulum consequat egestas massa, et aliquet justo eu."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      bulletPoints: [
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { text: "Morbi varius sapien in mauris rutrum, non commodo arcu egestas." },
        { text: "Integer vel nulla placerat, convallis risus eget, condimentum ligula." },
        { text: "Nulla sit amet felis id urna ultrices condimentum et vitae odio." },
        { text: "Nam sed risus feugiat, dapibus turpis nec, pharetra turpis." },
        { text: "Sed mattis quam non elit tristique, non rutrum dui finibus." },
        { text: "Nullam laoreet tortor at dolor ultrices, a blandit lectus tristique." },
        { text: "Morbi in sapien non nulla feugiat dapibus." }
      ]
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor urna. Sed sed felis dui. Suspendisse nec ligula vel nulla ullamcorper volutpat. Integer luctus facilisis nunc, sit amet mattis odio vestibulum sit amet. Vestibulum sed egestas augue. Nullam ac cursus felis. Vivamus mattis quam ut leo finibus finibus. Pellentesque vehicula lorem vitae vehicula ultrices. Quisque sit amet dui ex. Sed vitae maximus odio, et pretium diam. Vestibulum consequat egestas massa, et aliquet justo eu."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dolor urna. Sed sed felis dui. Suspendisse nec ligula vel nulla ullamcorper volutpat. Integer luctus facilisis nunc, sit amet mattis odio vestibulum sit amet. Vestibulum sed egestas augue. Nullam ac cursus felis. Vivamus mattis quam ut leo finibus finibus. Pellentesque vehicula lorem vitae vehicula ultrices. Quisque sit amet dui ex. Sed vitae maximus odio, et pretium diam. Vestibulum consequat egestas massa, et aliquet justo eu.",
      bulletPoints: [
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { text: "Morbi varius sapien in mauris rutrum, non commodo arcu egestas." },
        { text: "Integer vel nulla placerat, convallis risus eget, condimentum ligula." },
        { text: "Nulla sit amet felis id urna ultrices condimentum et vitae odio." },
        { text: "Nam sed risus feugiat, dapibus turpis nec, pharetra turpis." },
        { text: "Sed mattis quam non elit tristique, non rutrum dui finibus." },
        { text: "Nullam laoreet tortor at dolor ultrices, a blandit lectus tristique." },
        { text: "Morbi in sapien non nulla feugiat dapibus." }
      ]
    }
  ]

  return (
    <div className="container mx-auto py-6 bg-white px-4 lg:px-0 md:px-0">
      {/* Main Heading */}
      <div className="mb-8">
        <h1 className="lg:text-[32px] md:text-[28px] text-[20px] font-semibold leading-[120%] mb-4">
          What will you get?
        </h1>
        
        {/* Content Sections */}
        <div className="space-y-8">
          {contentSections.map((section, index) => (
            <div key={index} className="space-y-4">
              {/* Section Title */}
              {section.title && (
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
              )}
              
              {/* Section Paragraph */}
              {section.paragraph && (
                <p className="text-gray-700 leading-relaxed text-justify">
                  {section.paragraph}
                </p>
              )}
              
              {/* Bullet Points */}
              {section.bulletPoints && (
                <ul className="space-y-2 ml-4">
                  {section.bulletPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsContent