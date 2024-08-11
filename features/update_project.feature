@configuracion @proyecto @update
Feature: Actualizar la configuración del proyecto

  @configuracionGeneral @update @critico
  Scenario: Cambiar la configuración general del proyecto
    Given que he creado un proyecto y estoy en la página de configuración del proyecto
    When cambio el Título del Proyecto a "ProjectAA"
    And cambio la Descripción del Proyecto a "apruebenos inge"
    And cambio el Inicio de Iteraciones a "Monday"
    And cambio la Fecha de Inicio del Proyecto a "12/08/2024"
    And cambio la Zona Horaria del Proyecto a "Alaska"
    And cambio la Escala de Puntos a "Fibonacci"
    And guardo los cambios
    Then debería ver los cambios guardados correctamente
    And elimino el proyecto
