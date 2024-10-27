import { db } from "@/drizzle/db"
import { UserSubscriptionTable } from "@/drizzle/schema"

export async function createUserSubscription(
    data: typeof UserSubscriptionTable.$inferInsert
  ) {

    return db.insert(UserSubscriptionTable).values(data)
   // To avoid duplicating a user 
      .onConflictDoNothing({
        target: UserSubscriptionTable.clerkUserId,
      })   
  }