import { db } from "@/drizzle/db";
import { ProductCustomizationTable, ProductTable } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";



export function getProducts(
    userId: string, {limit}: {limit?: number}
  )  {
    return db.query.ProductTable.findMany({
        where: (({clerkUserId}, {eq}) => eq(clerkUserId, userId)),
        orderBy: (({createdAt}, {desc}) => desc(createdAt)),
        limit
    })
  }

  export async function createProduct(data: typeof ProductTable.$inferInsert) {
    const [newProduct] = await db
      .insert(ProductTable)
      .values(data)
      .returning({ id: ProductTable.id, userId: ProductTable.clerkUserId })
  
    try {
      await db
        .insert(ProductCustomizationTable)
        .values({
          productId: newProduct.id,
        })
        .onConflictDoNothing({
          target: ProductCustomizationTable.productId,
        })
    } catch (e) {
        // Delete product if you cannot create a product AND an entry in to the ProductCustomizationTable, as we want an entry in both

      await db.delete(ProductTable).where(eq(ProductTable.id, newProduct.id))
    }
  
    // revalidateDbCache({
    //   tag: CACHE_TAGS.products,
    //   userId: newProduct.userId,
    //   id: newProduct.id,
    // })
  
    return newProduct
  }

  export async function deleteProduct({
    id,
    userId,
  }: {
    id: string
    userId: string
  }) {
    const { rowCount } = await db
      .delete(ProductTable)
      .where(and(eq(ProductTable.id, id), eq(ProductTable.clerkUserId, userId)))
  
    // if (rowCount > 0) {
    //   revalidateDbCache({
    //     tag: CACHE_TAGS.products,
    //     userId,
    //     id,
    //   })
    // }
  
    return rowCount > 0
  }