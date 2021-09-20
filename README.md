# clima

Este proyecto consume el API de Dark sky: https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/LAT,LONG mostrando la meteorología de una ciudad definiendo su latitud y longitud permitiendo al usuario acceder a los datos meteorologicos actuales, por horas y días de la ciudad definida anteriormente.

## Requisitos

Para este proyecto necesitas tener instalado lo siguiente:
* Node.js
* Usar el clima_proxy que esta en el siguiente repositorio: https://github.com/welfar/clima_proxy y sigue las instrucciones

### Configuración

Para configurar este proyecto de forma local sigue estas instrucciones:

1.Clona el proyecto de Git:
~~~
git clone
~~~
2.Instala las dependencias con YARN ó NPM, el que tu prefieras:
 ~~~
npm install
ó
yarn install
~~~
3.Crea un archivo .env con la variable de entorno:
~~~
REACT_APP_BASE_URL=http://localhost:8000/
~~~
Ejecuta el proyecto con el siguiente comando:
~~~
npm start
ó
yarn start
~~~
### Como interactuar

La aplicación muestra un header en el cual se encuentra una entrada de texto, en la que se va ingresar una ciudad de la lista de opciones de ciudades disponibles, permitiendo la selección de ella.
En el body se va a mostrar la información meteorológica actual más relevante, seguido de una tabla con los datos climatológicos de las próximas 49 y por último hay una tabla que despliega la información diaria de los próximos 8 días.

