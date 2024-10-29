"use client"

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"
import { deleteProduct } from "@/server/actions/products"
import { useTransition } from "react"

export function DeleteProductAlertDialogContent({ id }: { id: string }) {
  const [isDeletePending, startDeleteTransition] = useTransition()
  const { toast } = useToast()

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle><span className="text-2xl text-red-500 font-bold">Are you sure?</span></AlertDialogTitle>
        <AlertDialogDescription>
          <span className="font-bold">This action cannot be undone. This will permanently delete this
          product.</span>
          
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
        className="bg-red-500"
          onClick={() => {
            startDeleteTransition(async () => {
              const data = await deleteProduct(id)
              if (data.message) {
                toast({
                  title: data.error ? "Error" : "Success",
                  description: data.message,
                  variant: data.error ? "destructive" : "default",
                })
              }
            })
          }}
          disabled={isDeletePending}
        >
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}