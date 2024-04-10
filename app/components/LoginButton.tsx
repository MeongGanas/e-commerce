import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function LoginButton() {
  const session = await getServerSession(authOptions);
  const actionLabel = session ? "Login" : "Logout";
  const actionUrl = session ? "/api/auth/login" : "/api/auth/signout";

  return (
    <Link href={actionUrl} className="text-white">
      {actionLabel}
    </Link>
  );
}
