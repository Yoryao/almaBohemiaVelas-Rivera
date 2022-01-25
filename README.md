# Proyecto Final 

## Curso React

## Proyecto Final : E-Commerce

| **Camada** | 19770 |
| --- | --- | 
| **Profesor** | Horacio G. E. |
| **Tutor** | Emanuel A. |
| **Alumno** | Jorge Rivera |
| **Git-Hub** | ?????? |

## Contenido

1. Introducción.

    Como proyecto final del Curso de React se desarrollaró la app de un e-commerce para poder vender productos de un rubro a elección.

    El producto a elección fueron velas y esencias.

    Actualmente, la App se encuentra en estado de pausa, posterior a la entrega y se actualizará con las correcciones del Profesor y/o Tutor.

2. Recursos.

    Para el desarrollo se utilizó:

    -   [HTML](https://developer.mozilla.org/es/docs/Glossary/HTML)
    -   [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
    -   [JS](https://developer.mozilla.org/es/docs/Web/JavaScript)
    -   [REACT](https://es.reactjs.org/)
    -   [FIREBASE](https://firebase.google.com/)
    
    y las siguientes dependencias:

    - firebase  
    - react-dom  
    - react-router-dom
    - react-scripts  

1. Descripcion.
    La app se divide en 3 partes principales: _Navbar, Main y Footer._

    El **Navbar** incluye el Brand principal, links hacia las secciones: _Nosotros, Productos, Categoria1, Categoria2 y Contacto_ y el CartWidget que direcciona al carrito y enumera la cantidad de Items en el mismo.

    El **Main** incluye por su parte, los componentes necesarios para el renderizado de los productos en su totalidad o en unidad (detalle), listado de productos por categoria, el Carrito, el Cajero, el Formulario de datos y las secciones Nosotros y Contacto. 

    Tambien se incluyen los componentes ItemCount y Cart Context.

    El **Footer** incluye simplemente información de diseño y cumple fines esteticos.


4. Flujo.  
Al ingresar en la app, el usuario podra optar por interactuar con el NavBar:
    1. Brand: dirige al inicio y muestra la totalidad de los productos. 
    2. Nosootros: breve texto introductorio sobre la empresa.
    3. Productos: dirige al inicio y muestra la totalidad de los productos.
    4. Velas: filtra los productos que responden a la categoria.
    5. Escencia: filtra los productos que responden a la categoria.
    6. Contacto: Exhibe los datos de contacto de la empresa.
    7. CartWidget: Dirige al carrito de compras, donde se podra interactura con los productos elegidos. Si no se hubieran elegido productos, indicará que se encuentra vacio y ofrecerá continuar comprando. 


Una vez visualizado los productos, los mismos exhibiran nombre, precio e imagen, y un boton para acceder al detalle de los mismos. Desde aqui, solo se puede avanzar presionando el boton de









 recibira los productos encontrados en la Base de Datos. 

4. Información Técnica.  

5. Futuras implemnentaciones.
>
>
>
>




>
>
7. Base de Datos.

Para la base de datos se utilizo la herramienta **Firebase** de la empresa Google. Por un lado se utilizo la coleccion **productos**, para alojar información sobre los elementos a la venta, los cuales tiene la siguiente estructura.

```
producto = {
categoria: "(string)",  
descripcion: "(string)",
img: "(string)",
nombre: "(string)",
precio: (number)
}
```

Por otro lado, se utilizo la colección **orders** para registrar información sobre el comprador y los productos adquiridos, con la siguiente estructura:

```
order = {
cliente: "(string)",  
email: "(string)",
fecha: "(string)",
productos: { object },
telefono: (number),
total: (number)
}
```




Italic	
*italicized text*

Blockquote
> blockquote
Ordered List	
1. First item
2. Second item
3. Third item
Unordered List	
- First item
- Second item
- Third item
Code
	`code`
Horizontal Rule	
---
Link	[title](https://www.example.com)
Image	![alt text](image.jpg)
Extended Syntax
These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

Element	Markdown Syntax
Table	
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |


Emoji
(see also Copying and Pasting Emoji)	
That is so funny! :joy:
Highlight	
I need to highlight these ==very important words==.
Subscript
	H~2~O
Superscript	
X^2^