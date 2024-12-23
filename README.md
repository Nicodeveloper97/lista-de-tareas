# Aplicación de Lista de Tareas

Esta es una aplicación de lista de tareas construida con React, TypeScript y Tailwind CSS. Permite a los usuarios gestionar sus tareas, categorizarlas y filtrarlas.

## Características

- Agregar, editar y eliminar tareas
- Marcar tareas como completadas
- Categorizar tareas
- Filtrar tareas por categoría
- Buscar tareas
- Persistencia de datos en el almacenamiento local del navegador


## Instalación

1. Clona este repositorio:
   
   git clone https://github.com/tu-usuario/mi-app-de-tareas.git
   

2. Navega al directorio del proyecto:
   
   cd mi-app-de-tareas
   

3. Instala las dependencias:
   
   npm install
   


Para iniciar la aplicación en modo de desarrollo, ejecuta:


npm start



## Decisiones de diseño y arquitectura


**Arquitectura de componentes**: 
   - App.tsx: Componente principal que maneja el estado global y la composición de la aplicación.
   - Layout.tsx: Gestiona la estructura general de la aplicación.
   - Sidebar.tsx: Maneja la visualización y selección de categorías.
   - Lista.tsx: Renderiza la lista de tareas.
   - Tarea.tsx: Representa una tarea individual.
   - AgregarTarea.tsx: Formulario para agregar nuevas tareas.
   - Buscador.tsx: Permite la búsqueda de tareas.


**Diseño responsivo**: La aplicación está diseñada para ser completamente responsiva, adaptándose a diferentes tamaños de pantalla.

**Accesibilidad**: Se han incluido atributos ARIA y se ha prestado atención a la accesibilidad en los componentes interactivos.


