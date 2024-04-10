"use client";
import { Google } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import SubmitButton from "../../components/button";
import { useFormState } from "react-dom";
import { register } from "../../lib/actions";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Circles from "@/app/components/circles";

export default function Page() {
  const [formState, dispatch] = useFormState(register, undefined);

  useEffect(() => {
    if (formState && formState.success) {
      redirect("/login");
    }
  }, [formState]);

  return (
    <form action={dispatch} method="POST" className="form">
      <Circles />
      <h1 className="text-3xl font-bold">Create your account</h1>
      <div className="my-5">
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="your username"
            className="input"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className="input"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="confirm" className="block mb-2 text-lg">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            className="input"
            required
          />
        </div>
      </div>
      <SubmitButton name="Register" />

      <div className="w-full flex justify-center py-5 items-center gap-3">
        <span className="w-full h-0.5 bg-slate-200 rounded-sm"></span>
        <h1 className="min-w-fit">or signup with</h1>
        <span className="w-full h-0.5 bg-slate-200 rounded-sm"></span>
      </div>

      <Button
        className="w-full bg-white font-semibold"
        radius="sm"
        startContent={<Google />}
      >
        Google
      </Button>

      {formState && !formState.success && (
        <p className="text-red-700 mt-5">Something went wrong</p>
      )}
    </form>
  );
}
