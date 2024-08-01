Feature: Crear una historia de usuario en Pivotal Tracker

@smoke
Scenario: El usuario crea una nueva historia de usuario en un proyecto nuevo
    Given el usuario ha iniciado sesión en Pivotal Tracker
        And el usuario ha creado un proyecto nuevo llamado "Proyecto de Prueba"
        When el usuario crea una nueva historia de usuario llamada "Historia de Usuario de Prueba"
        Then la historia de usuario "Historia de Usuario de Prueba" debería estar listada en el proyecto "Proyecto de Prueba"