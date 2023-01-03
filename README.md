# PedidosNow

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.
##### Recorda hacer un npm install para installar los modulos
# Errores
## Si tenes el siguiente **error** :
![image](https://user-images.githubusercontent.com/48962903/210418576-986b2022-4239-45a2-b512-f7514cdfe294.png)

## Solución de compatibilidad con la libreria **firebase/compat**

- Tenes que ir al archivo node_modules/@angular/fire/compat/firestore/interfaces.d.ts
- Una vez ahi tenes que agregar la interfaz `<t>` al final de cada linea como se muestra en la imagen a continuación.


## Antes :
![image](https://user-images.githubusercontent.com/48962903/210418944-63102ddb-c45f-4883-8361-f28f85306c15.png)


## Despues :
![image](https://user-images.githubusercontent.com/48962903/210419023-769d91e4-318d-4d4f-86a6-fd19f44f3af9.png)

