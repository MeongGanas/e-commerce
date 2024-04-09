"use server";

import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

// export async function Authenticate(
//   prevState: { success: boolean; message: string } | undefined,
//   formData: FormData
// ) {
//     try{

//     } catch (error){
//         if(error instanceof )
//     }
// }

export async function Register(
  prevState: { success: boolean; message: string } | undefined,
  formData: FormData
) {
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirm = formData.get("confirm")?.toString();

  try {
    if (password && password === confirm) {
      const hashedPass = await bcrypt.hash(password, 10);

      await prisma.user.create({
        data: { name: username, email, password: hashedPass },
      });

      return { success: true, message: "Register success!" };
    } else {
      return {
        success: false,
        message: "Confirm password must match with Password",
      };
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return {
        success: false,
        message: `Something went wrong ${error.message}`,
      };
    }
    return {
      success: false,
      message: `Something went wrong`,
    };
  }
}
