// components/OrderStatusTracker.tsx
"use client";

import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface StatusStep {
  step: number;
  name: string;
}

interface OrderStatusTrackerProps {
  statusSteps: StatusStep[];
  currentStatus: number;
}

export default function OrderStatusTracker({ statusSteps, currentStatus }: OrderStatusTrackerProps) {
  return (
    <Card className="bg-white border border-gray-200 rounded-lg text-gray-900 shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Order Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between relative py-4">
          {statusSteps.map((step, index) => (
            <div key={step.step} className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  currentStatus >= step.step ? "bg-red-500" : "bg-gray-300"
                )}
              >
                {currentStatus >= step.step ? (
                  <CheckCircle className="h-5 w-5 text-white" />
                ) : (
                  <span className="text-sm font-bold text-gray-700">{step.step}</span>
                )}
              </div>
              <span className="mt-2 text-sm text-gray-700">{step.name}</span>

              {index < statusSteps.length - 1 && (
                <div
                  className={cn(
                    "absolute h-1 top-1/2 -translate-y-1/2",
                    `left-[calc(${index * (100 / (statusSteps.length - 1))}% + 20px)]`,
                    `w-[calc(${100 / (statusSteps.length - 1)}% - 40px)]`,
                    currentStatus > step.step ? "bg-red-500" : "bg-gray-300"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
