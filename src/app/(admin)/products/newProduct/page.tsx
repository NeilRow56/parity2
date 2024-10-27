import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { PageWithBackButton } from '@/components/dashboard/PagewithBackButton'
import React from 'react'

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
           PRODUCT DETAILS FORM
          </CardContent>
        </Card>
      
    </PageWithBackButton>
    </div>
  )
}
