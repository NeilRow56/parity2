import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { PageWithBackButton } from '@/components/dashboard/PagewithBackButton'
import React from 'react'
import { ProductDetailsForm } from "@/components/forms/ProductDetailsForm"

export default function CreateProductPage() {
  return (
    <div>
     <PageWithBackButton
      pageTitle="Create Product"
      backButtonHref="/products"
    >
     
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Product Details</CardTitle>
          </CardHeader>
          <CardContent>
           <ProductDetailsForm />
          </CardContent>
        </Card>
      
    </PageWithBackButton>
    </div>
  )
}
