# QUIRON Fuerza

Proyecto de un gimnasio platense.

## Objetivos

El objetivo de crear una e-commerce para un gimnasio, donde facilmente podras comprar la indumentario del lugar y lo necesario para entrenar. La idea principal es que se puedan hacer todas las acciones para realizar la compra dentro de la pagina.

## Demostración

-Navegacion
-Ver Productos
-Sumar al carrito
-Restar del carrito
-Limpiar carrito
-Envio de orden de compra con formulario

![Demonstration](https://www.loom.com/share/f2a80501ee2645ea895dbe6d6677ccf0)


### Tecnologias

- React Js 
- HTML
- CSS

### Paso a paso para la visualizacion del proyecto 
 - En Visual Studio Code, esribir 'git clone'y luego pegar la la siguiente URL 'https://github.com/paughiorzi/QUIRON-F'
 - Luego de clonar el repositorio, para poder abrir el proyecto, se deben instalar los siguientes complementos:
	- reac-router.dom : es una libreria para una mejor navegabilidad. Para instalarla se debe ejecutar:
	npm install react-router-dom
 - Una vez instalado el react router dom, lo que deben hacer es ejecutar el siguiente codigo:
	npm star

El proyecto se ejecutar en modo desarrollo, en un localhost:3000. La pagina tiene actualizacion automatica si se realizar alguna correcion.


### Proyecto
El proyecto aun en construccion cuenta con lo siguientes componentes:
- Nav Bar: barra de navegacion
- ItemListContainer: componente para renderizar la informacion, en este caso de ItemList
- ItemList: componenta para mapear las props de los objetos
- Item: contiene los cards de cada objeto
- ItemCount: componente creado para el contador de los productos
- ItemDetailContainer: idem ItemListContainer pero usado para ItemDetail
- ItemDetail: idem Item pero con mas detalle para el consumidor y la opcion de agregarlo al Card
