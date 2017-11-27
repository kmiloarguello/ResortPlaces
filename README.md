# Resort Places

Applicación móvil para visualizar los mejores Hoteles de Bogotá.

## Getting Started

Para poder abrir el proyecto se debe ejecutar:

```
git clone https://github.com/kmiloarguello/ResortPlaces.git
```


### Prerequisites

Hecha en Linux así que necesitas
Necesitas tener instalado NodeJs, Android Studio, React y React-Native actualizado.


### Installing

Para instalar las dependencias del proyecto

```
cd ResortPlaces
```
Y luego

```
npm install
```
Una vez finalizada la instalación puedes lanzar la aplicación.

## Running 

Para ejecutar la Aplicación debes escribir el tu terminal:

```
react-native run-android
```
Esto crea un llamado a los paquetes de librerias para que tomen `App.js` y ejecuten el código javascript, a traves del JavascriptV8

## Estructura

Está compuesto por archivos de App.js

Y dentro de la carpeta src
Posee archivos de:

HomeView.js
HotelBox.js
HotelList.js
HotelBoxDetail.js
HotelDetailView.js

El flujo es de la siguiente manera.

App.js pide la lista desde la base de datos y compila esa data en las HotelList, las cuales cada una tiene un HotelBox que Y que tiene un evento onPress para poder abrir la seccion de HotelDetailBox

## Authors

* **CAMILO ARGUELLO** - *Initial work* - [Camilo Arguello](https://github.com/kmiloarguello)
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
