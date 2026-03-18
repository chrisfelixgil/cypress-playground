# 🌲 Cypress Playground

## 📲 Descripción

Este proyecto es un **playground personal** para experimentar y practicar con **Cypress**, creando pruebas end‑to‑end sobre diferentes escenarios y aplicaciones de ejemplo.  
El objetivo principal es aprender, probar ideas y documentar buenas prácticas de automatización de pruebas de frontend.

## 🗂️ Estructura del proyecto

Algunos directorios y archivos relevantes:

- `cypress/e2e/` – Carpeta donde viven los **test specs** de Cypress (por ejemplo, `start.cy.js`).
- `cypress/fixtures/` – Datos estáticos que se pueden reutilizar en las pruebas.
- `cypress/support/` – Configuración y comandos personalizados que se cargan antes de cada test.
- `cypress.config.js` – Archivo principal de **configuración de Cypress**.
- `package.json` – Dependencias del proyecto (incluye Cypress como `devDependency`) y scripts de npm.

## 🚀 Cómo ejecutar el proyecto

1. Instala las dependencias (solo la primera vez):

   ```bash
   npm install
   ```

2. Abre el Test Runner de Cypress en modo interactivo:

   ```bash
   npx cypress open
   ```

3. Para ejecutar las pruebas en modo headless (por ejemplo, en CI):

   ```bash
   npx cypress run
   ```

## 🧪 Objetivos de aprendizaje

En este playground se pretende:

- Practicar la escritura de **pruebas end‑to‑end** con Cypress.
- Entender la estructura de un proyecto típico de Cypress.
- Explorar selectores, aserciones, fixtures, intercepts y buenas prácticas.
- Dejar ejemplos que sirvan como referencia para futuros proyectos.

## 🛠️ Tecnologías utilizadas

[![Tecnologías](https://skillicons.dev/icons?i=nodejs,npm,js,cypress&theme=dark)](https://skillicons.dev)

- **Node.js** y **npm** – Gestión del proyecto y dependencias.
- **JavaScript** – Lenguaje principal de los tests.
- **Cypress** – Framework de pruebas end‑to‑end.

## 👤 Autor

- **Nombre:** Christian Gil

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT, lo que significa que puedes utilizarlo, modificarlo y distribuirlo libremente.