import { countries } from './countries';
import { states } from './states';
import { PrismaClient } from '.prisma/client';
import { cities } from './cities';

const prisma = new PrismaClient();

async function main() {
  for (const country of countries) {
    await prisma.country.create({
      data: country,
    });
  }

  for (const state of states) {
    await prisma.state.create({
      data: state,
    });
  }

  for (const city of cities) {
    await prisma.city.create({
      data: city,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
