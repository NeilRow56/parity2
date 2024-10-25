import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { SignUpButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers"
import { cn } from "@/lib/utils"



export function PricingCard({
    name,
    priceInCents,
    maxNumberOfVisits,
    maxNumberOfProducts,
    canRemoveBranding,
    canAccessAnalytics,
    canCustomizeBanner,
  }: (typeof subscriptionTiersInOrder)[number]) {
    const isMostPopular = name === "Standard"
  
    return (
      <Card
        className={cn(
          "relative shadow-none rounded-3xl overflow-hidden",
          isMostPopular ? "border-accent border-2" : "border-none"
        )}
      >
        {isMostPopular && (
          <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
            Most popular
          </div>
        )}
        <CardHeader>
          <div className="text-orange-500 font-semibold mb-8">{name}</div>
          <CardTitle className="text-xl font-bold">
            ${priceInCents / 100} /mo
          </CardTitle>
          <CardDescription>
            Number of Visits
            {/* {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpButton>
            <Button
              className="text-lg w-full rounded-lg"
            //   variant={isMostPopular ? "accent" : "default"}
            >
              Get Started
            </Button>
          </SignUpButton>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 items-start">
            Card Footer
          {/* <Feature className="font-bold">
            {maxNumberOfProducts}{" "}
            {maxNumberOfProducts === 1 ? "product" : "products"}
          </Feature>
          <Feature>PPP discounts</Feature>
          {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
          {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
          {canCustomizeBanner && <Feature>Banner customization</Feature>} */}
        </CardFooter>
      </Card>
    )
  }