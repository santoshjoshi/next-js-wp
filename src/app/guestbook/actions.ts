"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import guestbookEntries, { guestBookInsertSchema } from "../db/schema/guest-book-entries";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import requireAuth from "../utils/require-auth";
import { getServerSession } from "next-auth";
import options from "../config/auth";

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