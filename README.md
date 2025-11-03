# Sistema de Gestión Parroquial - Cristo Redentor

Este es un sistema integral diseñado para la Parroquia Cristo Redentor en Ciudad Juárez, Chihuahua, México, con el objetivo de optimizar la gestión de documentos sacramentales. El sistema permitirá capturar, almacenar, gestionar e imprimir constancias de Fe de Bautismo, Primera Comunión (Sacramento de la Eucaristía), Confirmación y Matrimonio.

## Visión General

El proyecto busca modernizar y facilitar la administración de los registros parroquiales, proporcionando una herramienta robusta y fácil de usar para el personal de la parroquia.

## Tecnologías Utilizadas

El sistema está siendo desarrollado con un stack tecnológico moderno y eficiente:

* **Frontend:**
    * **Next.js 16:** Framework de React para el desarrollo de aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.
    * **Shadcn UI:** Componentes de interfaz de usuario accesibles y personalizables para React.
* **Backend:**
    * **Prisma:** ORM de nueva generación para bases de datos Node.js y TypeScript.
    * **MySQL:** Sistema de gestión de bases de datos relacional robusto y ampliamente utilizado.
    * **Better Auth:** (Se asume un paquete o implementación para autenticación)
    * **Arcjet:** (Se asume un paquete o servicio específico para seguridad o alguna funcionalidad adicional).
* **Infraestructura:**
    * **Servidor Privado:** Alojado en un servidor privado.
    * **Ubuntu Server:** Sistema operativo para el servidor.
    * **Docker:** Para la contenerización de la aplicación y sus servicios, facilitando el despliegue y la gestión.
    * **Cloudflare:** Gestión de DNS y posibles mejoras de seguridad y rendimiento para el dominio.

## Funcionalidades Principales

El sistema permitirá gestionar los siguientes tipos de constancias sacramentales, capturando los datos específicos de cada una:

### 1. Constancia de Fe de Bautismo

* **Nombre**
* **Fecha de Nacimiento**This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

* **Fecha de Bautismo**
* **Padrinos**
* **Padres**
* **Libro, Folio, Partida**
* **Parroquia de Bautismo**
* **Ministro (Bautizante), Párroco**

### 2. Constancia de Primera Comunión (Sacramento de la Eucaristía)

* **Nombre**
* **Fecha de Primera Comunión**
* **Parroquia de Primera Comunión**
* **Padrinos**
* **Padres**
* **Bautizado(a) en la Parroquia (Nombre y Fecha)**
* **Libro, Folio, Partida (Bautismo)**
* **Celebrante, Párroco**

### 3. Constancia de Confirmación

* **Nombre**
* **Fecha de Confirmación**
* **Parroquia de Confirmación**
* **Padrinos**
* **Padres**
* **Bautizado(a) en la Parroquia (Nombre y Fecha)**
* **Libro, Folio, Partida (Bautismo)**
* **Obispo (Ministro), Párroco**

### 4. Constancia de Matrimonio

* **Parroquia de Matrimonio**
* **Fecha del Matrimonio**
* **Nombres de los contrayentes (Sr. y Sra.)**
* **Testigos (Sr. y Sra.)**
* **Sacerdote que presidió el acto**
* **Libro, Folio, Partida**
* **Párroco**

## Futuras Mejoras (Roadmap)

* **Implementación de Inteligencia Artificial:** Explorar la integración de IA para automatizar y facilitar procesos, como la extracción de datos de documentos escaneados o la generación de reportes avanzados.

## Instalación y Configuración (Próximamente)

Se detallarán los pasos para configurar el entorno de desarrollo, instalar dependencias, configurar la base de datos y desplegar la aplicación.

## Contribución

Se proporcionarán guías para aquellos interesados en contribuir al desarrollo del sistema.

## Licencia

[Pendiente de definir la licencia]

## Contacto

Para cualquier pregunta o sugerencia, por favor contactar a Arturo Garcia Raygoza arte311@gmail.com.
