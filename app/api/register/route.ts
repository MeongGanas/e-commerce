import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, email, password, confirm } = await req.json();

    if (password !== confirm) {
      return NextResponse.json({
        success: false,
        mssg: "Confirm password must match with password!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: { name: username, password: hashedPassword, email },
    });

    return NextResponse.json({
      success: true,
      mssg: "Create account success!",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      mssg: error,
    });
  }
}
