"use server";

import options from "@/config/auth";
import { parseWithZod } from "@conform-to/zod";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../../db";
import guestbookEntries, { guestBookInsertSchema } from "../../db/schema/guest-book-entries";
import requireAuth from "../../utils/require-auth";

export async function createGuestBookEntry(prevState: unknown, formData: FormData) {
  
    await requireAuth();

    const submission = parseWithZod(formData, {
    schema: guestBookInsertSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

   // ( .... )! means session is not undefined
   /// session.user.id will complain
  const session = (await getServerSession(options))!;

 await db.insert(guestbookEntries).values ({
    userId: session.user.id,
    message : submission.value.message,
 })

  revalidatePath("/guestbook");
  redirect("/guestbook");
}