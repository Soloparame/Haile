'use client'

import React from 'react'
import OurProductsSection from '@/components/OurProductsSection'

export default function ProductPage() {
    return (
        <div className="pt-20">
            <div className="bg-primary-dark py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Discover the tools and solutions we've built to help you succeed.
                </p>
            </div>
            <OurProductsSection />
        </div>
    )
}
