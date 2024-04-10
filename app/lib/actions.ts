import { signIn } from "next-auth/react";

export async function register(
  formState: { success: boolean; mssg: string } | undefined,
  formData: FormData
) {
  const response = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    }),
  });

  const json: { success: boolean; mssg: string } = await response.json();

  return json;
}

export async function authorize(
  formState: { success: boolean; mssg: string } | undefined,
  formData: FormData
) {
  const signInData = await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: true,
  });

  if (signInData?.error) {
    return { success: false, mssg: signInData.error };
  }

  return { success: true, mssg: "Login success!" };
}
