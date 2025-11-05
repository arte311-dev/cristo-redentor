import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    //url: env.DATABASE_URL, // Comentar o borrar
    url: 'mysql://admin-credentor:4Z3pfjXDLecpoT@100.90.185.88:3309/cristo-redentor', // Usar la URL directa
  },
});