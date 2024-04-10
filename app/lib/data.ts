import prisma from "@/prisma/client";

export async function getBarang() {
  const data = await prisma.barang.findMany();
  return { data };
}
