
import { EmptyState } from '@/components/dashboard/EmptyState'
import { ProductGrid } from '@/components/dashboard/ProductGrid'
import { Button } from '@/components/ui/button'
import { getProducts } from '@/server/db/product'
import { RedirectToSignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { ArrowRightIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
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

    <>
    <h2 className="mb-6 text-3xl font-semibold flex justify-between">
      <Link
        className="group flex gap-2 items-center hover:underline"
        href="/products"
      >
        Products
        <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
      </Link>
      <Button asChild>
        <Link href="/products/newProduct">
          <PlusIcon className="size-4 mr-2" />
          New Product
        </Link>
      </Button>
    </h2>
    <ProductGrid products={products} />
    <h2 className="mb-6 text-3xl font-semibold flex justify-between mt-12">
      <Link
        href="/analytics"
        className="flex gap-2 items-center hover:underline group"
      >
        Analytics
        <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </h2>
    
  </>
  )
}