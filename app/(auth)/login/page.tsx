"use client";
import { Google } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import SubmitButton from "../../components/button";
import { authorize } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import Circles from "@/app/components/circles";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const [formState, dispatch] = useFormState(authorize, undefined);

  useEffect(() => {
    if (formState && formState.success) {
      redirect("/");
    }
  }, [formState]);

  return (
    <form action={dispatch} method="POST" className="form">
      <Circles />
      <h1 className="text-3xl font-bold">Login to continue</h1>
      <div className="my-5">
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
      </div>
      <SubmitButton name="Login" />

      <div className="w-full flex justify-center py-5 items-center gap-3">
        <span className="w-full h-0.5 bg-slate-50 rounded-sm"></span>
        <h1 className="min-w-fit">or login with</h1>
        <span className="w-full h-0.5 bg-slate-50 rounded-sm"></span>
      </div>

      <Button
        className="w-full bg-white font-semibold"
        radius="sm"
        startContent={<Google />}
      >
        Google
      </Button>

      {formState && !formState.success && (
        <p className="text-red-400 mt-5">Something went wrong</p>
      )}
    </form>
  );
}
