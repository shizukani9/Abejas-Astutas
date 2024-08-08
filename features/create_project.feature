Feature: Crear y eliminar un proyecto en Pivotal Tracker

  Scenario: Crear un nuevo proyecto
    Given que estoy en la página de introducción
    When ingreso el nombre del proyecto como "prueba 1"
    And hago clic en el botón "Crear proyecto"
    Then debería ver la página de configuración del proyecto

  Scenario: Eliminar el proyecto
    Given que estoy en la página de configuración del proyecto
    When hago clic en la opción "Más"
    And hago clic en "Eliminar Proyecto"
    And confirmo la eliminación
    Then debería ser redirigido a la página de introducción
    And debería ver la opción para crear un nuevo proyecto
