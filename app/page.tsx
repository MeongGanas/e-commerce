import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="container">
      <h1 className="text-3xl">
        Hello, {session ? session?.user?.name : "Guest"}!
      </h1>
    </div>
  );
}
