"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-600 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left "
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <div className="flex items-start space-x-4 flex-1">
          <span className="text-[20px] font-medium text-[#212121] leading-[120%]">
            {item.id}.
          </span>
          <h3 className="text-[20px] font-medium text-[#212121] leading-[120%]">
            {item.question}
          </h3>
        </div>
        <ChevronDown
          className={`w-8 h-8 text-gray-500 transition-transform duration-200 ml-4 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${item.id}`}
          className="pb-6 pl-8 pr-12 animate-in slide-in-from-top-2 duration-200"
        >
          <p className="text-[#4E4E4E] leading-[150%] text-base font-normal">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1])); // First item open by default

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus.",
    },
    {
      id: 5,
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="px-4 py-16 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column - 1/3 (4 of 12 columns) */}
        <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <div>
            <Link href="/faq">
              <Button className="bg-[#EF1A26] hover:bg-red-600 text-white px-6 h-[51px] rounded-md font-medium transition-all duration-200 group inline-flex items-center">
                Explore All
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - 2/3 (8 of 12 columns) */}
        <div className="lg:col-span-8 space-y-6">
          {faqData.map((item) => (
            <FAQItemComponent
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
