"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";

import { guestBookInsertSchema } from "../db/schema/guest-book-entries";
import { createGuestBookEntry } from "./actions";

export default function GuestbookClient() {
  const [lastResult, action] = useFormState(createGuestBookEntry, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: guestBookInsertSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className="mt-4 flex flex-col gap-2"
    >
      <Textarea
        label="Message"
        key={fields.message.key}
        name={fields.message.name}
        placeholder="Enter your message"
        className="w-full"
        isInvalid={!fields.message.valid}
        errorMessage={fields.message.errors}
      />
      <Button type="submit">Create</Button>
    </form>
  );
}