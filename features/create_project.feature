Feature: Crear un nuevo proyecto en Pivotal Tracker

@functional
Scenario: El usuario crea un nuevo proyecto
  Given el usuario ha iniciado sesión en Pivotal Tracker
    When el usuario crea un nuevo proyecto llamado "Proyecto de Prueba"
    Then el proyecto "Proyecto de Prueba" debería estar listado en los en el dashboard de proyectos
    