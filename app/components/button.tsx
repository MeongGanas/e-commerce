"use client";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ name }: { name: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      radius="sm"
      className="w-full bg-black text-white font-semibold"
      isLoading={pending}
      type="submit"
    >
      {name}
    </Button>
  );
}
