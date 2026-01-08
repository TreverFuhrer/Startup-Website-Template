"use client"

import { useState } from "react";

interface PricingTabProps {
  yearly: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    yearly: number
  }
  planDescription: string
  features: string[]
}

export function PricingTab({
  yearly,
  popular,
  planName,
  price,
  planDescription,
  features,
}: PricingTabProps) {
  return (
    <div className="h-full">
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-(--surface) border border-white/20 shadow shadow-black/80">
        {popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-(--brand-2) text-black rounded-full shadow-sm shadow-slate-950/5">Top Pick</div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-white/70 font-semibold mb-1">{planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-white/70 font-bold text-3xl">$</span>
            <span className="text-white/50 font-bold text-4xl">{yearly ? price.yearly : price.monthly}</span>
            <span className="text-white/70 font-medium">/mo</span>
          </div>
          <div className="text-sm text-white/70 mb-5">{planDescription}</div>
          <button
            type="button"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-(--brand-1) px-3.5 py-2.5 text-sm font-medium text-black shadow-sm shadow-black/20 hover:bg-(--brand-3) focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
          >
            Primary CTA
          </button>
        </div>
        <div className="text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {features.map((feature) => {
            return (
              <li key={feature} className="flex items-center">
                <svg className="w-3 h-3 fill-(--brand-2) mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true)

  return (
    <div>

      {/* Pricing toggle */}
      <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-(--surface) rounded-full">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span className={`absolute inset-0 w-1/2 bg-(--brand-1) rounded-full shadow-sm shadow-(--brand-1) transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : ' text-white/70'}`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
            type="button"
          >
            Yearly <span className={`${isAnnual ? 'text-white/80' : 'text-slate-400 dark:text-slate-500'}`}>-20%</span>
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white/70' : ' text-white'}`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={!isAnnual}
            type="button"
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Edit these three cards to match your real plans. */}
      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

        {/* Pricing tab 1 */}
        <PricingTab
          yearly={isAnnual}
          planName="Plan Name"
          price={{ yearly: 29, monthly: 35 }}
          planDescription="Plan description goes here."
          features={[
            'Feature one',
            'Feature two',
            'Feature three',
            'Feature four',
          ]} />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Plan Name"
          price={{ yearly: 49, monthly: 55 }}
          planDescription="Plan description goes here."
          features={[
            'Feature one',
            'Feature two',
            'Feature three',
            'Feature four',
            'Feature five',
          ]} />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={isAnnual}
          planName="Plan Name"
          price={{ yearly: 79, monthly: 85 }}
          planDescription="Plan description goes here."
          features={[
            'Feature one',
            'Feature two',
            'Feature three',
            'Feature four',
            'Feature five',
            'Feature six',
          ]} />

      </div>

    </div>
  )
}
