"use client";

import BusinessesGrid from "./_components/businessesgrid";
import CallAction from "./_components/callaction";
import Features from "./_components/features";
import HeroBusiness from "./_components/herobnusines";

export default function BusinessPage() {
  return (
    <div dir="rtl" className="container mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <HeroBusiness />

      {/* Businesses Grid */}
      <BusinessesGrid />

      {/* Call to Action Section */}
      <CallAction />

      {/* Features Section */}
      <Features />
    </div>
  );
}
