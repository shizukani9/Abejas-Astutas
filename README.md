# Proyecto de Automatización - Pivotal Tracker

## Descripción del Proyecto

Este proyecto tiene como objetivo automatizar las pruebas de regresión para la aplicación Pivotal Tracker, utilizando herramientas como Selenium WebDriver, Cucumber, y Node.js. La automatización abarca diferentes funcionalidades de la aplicación, como la creación, actualización y eliminación de proyectos, así como la gestión de historias y miembros.

## Estructura del Proyecto

- **src/**
  - **pages/**: Contiene las clases que representan las diferentes páginas de la aplicación Pivotal Tracker. Cada clase incluye los selectores y métodos necesarios para interactuar con los elementos de la UI.
    - `dashboard_page.js`: Contiene los selectores para interactuar con el dashboard principal.
    - `project_settings_page.js`: Define los selectores para la configuración del proyecto.
    - `introduction_page.js`: Incluye los selectores de la página de introducción, como la creación de nuevos proyectos.
    - `login_page.js`: Define los selectores para el proceso de inicio de sesión.
    - Otros archivos que representan diferentes partes de la UI.
  - **steps/**: Contiene los archivos que definen los pasos de Cucumber. Cada archivo corresponde a una funcionalidad específica de la aplicación.
    - `login_steps.js`: Define los pasos para el inicio de sesión.
    - `create_project_steps.js`: Pasos para la creación de un proyecto.
    - `delete_project_steps.js`: Pasos para la eliminación de un proyecto.
    - Otros archivos que contienen pasos para diferentes funcionalidades.
  - **support/**: Incluye archivos de soporte como `driverFactory.js` para manejar las instancias de WebDriver, y `hooks.js` que contiene las configuraciones de hooks de Cucumber.

- **features/**: Contiene los archivos `.feature` que describen los escenarios de prueba en lenguaje Gherkin.
  - `login.feature`: Escenarios de prueba para el inicio de sesión.
  - `create_project.feature`: Escenarios para la creación de un proyecto.
  - Otros archivos `.feature` para distintas funcionalidades.

- **config/**: Contiene archivos de configuración como `configuration.json` y `environment.json`, donde se almacenan las configuraciones del entorno de pruebas y las credenciales.

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión recomendada: >= 14)
- npm (gestor de paquetes de Node.js)

### Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-repositorio.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd tu-repositorio
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecución de las Pruebas

Para ejecutar las pruebas de automatización, utiliza el siguiente comando:

```bash
npm run test
```

Este comando ejecutará todos los escenarios definidos en los archivos `.feature` utilizando Cucumber.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de los mismos (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.