
import { EmptyState } from '@/components/dashboard/EmptyState'
import { getProducts } from '@/server/db/product'
import { RedirectToSignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
 const { userId} = await auth()

 if(userId == null) return <RedirectToSignIn />
  const products = await getProducts(userId, {limit: 6})

  if(products.length === 0) return <EmptyState
  title="You dont have any Products created"
            description="You currently dont have any Products. Once created you can
      see them here!"
            buttonText="Create Product"
            href="/products/newProduct"
  
  />
  return (
    <div>Dashboard Page</div>
  )
}