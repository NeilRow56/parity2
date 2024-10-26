import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import { ReactNode } from "react"

export function Feature ({
    children,
    className,
  }: {
    children: ReactNode
    className?: string
  }) {
    return(
        <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-primary bg-accent/90 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
    )
}