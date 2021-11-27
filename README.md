# datafilter

Bienvenido al Readme del DataFilter: es una vista desarrollada en angular para el manejo dinámicos de datos, cargados desde un JSON.
El proyecto solo incluye una vista, realizada desde el app component, con sus respectivos y sencillos estilos en CSS puro.

* Para la conexión con los datos he agregado dos métodos:
* * El principal es un JSON alojado en Firebase - Firestore
* * El segundo es un auxiliar y es un JSON dentro del archivo (Este con fines de manejos de datos en la prueba por si se alcanza el límite de consultas en Firestore)
* Por eso si la primera opción no está disponible por favor cambiar dentro del `onInit(): void { this.getServices }` por `onInit(): void { this.getLocalServices }`

Eso sería todo, espero que el código compile de manera correcta. :smile:
