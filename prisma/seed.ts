import { prisma } from "../src/config/prisma";
import bcrypt from "bcrypt";

async function main() {
  console.log("Seeding database...");

  const hashedPassword = await bcrypt.hash("krinssstym123", 10);

  await prisma.user.create({
    data: {
      fullName: "Admin",
      email: "admin@nutrigo.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
