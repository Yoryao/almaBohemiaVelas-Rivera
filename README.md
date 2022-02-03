# Proyecto Final 

## Curso React

## Proyecto Final : E-Commerce

| **Camada** | 19770 |
| --- | --- | 
| **Profesor** | Horacio G. E. |
| **Tutor** | Emanuel A. |
| **Alumno** | Jorge Rivera |
| **Git-Hub** |[Yoryao](https://github.com/Yoryao) |

## Trailer

***

[Video del Flujo](https://www.loom.com/embed/26aeba46df234f9fbc59e3c39cc97f2f)

***

## Contenido

1. Introducción.

Como proyecto final del Curso de React se desarrollaró la app de un e-commerce para poder vender productos de un rubro a elección. El producto a elección fueron velas y esencias.     Actualmente, la App se encuentra en estado de pausa, posterior a la entrega y se actualizará con las correcciones del Profesor y/o Tutor.

2. Recursos.

Para el desarrollo de la aplicación se utilizó las siguientes tecnologías:
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
    - Formik - Se utilizo para la validación del formulario.
    - Bootstrap - Se utilizo en el menu desplegable de categorias.
   



3. Descripcion.

La app se divide en 3 partes principales: _Navbar, Main y Footer._
El **Navbar** incluye el Brand principal, links hacia las secciones: _Nosotros, Productos, Contacto y menu de categorias_ y el _CartWidget_ que direcciona al carrito y enumera la cantidad de Items en el mismo.

El **Main** incluye por su parte, los componentes necesarios para el renderizado de los productos en su totalidad o en unidad (detalle), listado de productos por categoria, el Carrito, el Cajero, el Formulario de datos y las secciones Nosotros y Contacto. Tambien se incluyen los componentes ItemCount y Cart Context.

El **Footer** incluye simplemente información de diseño y cumple fines esteticos.

4. Flujo.  
    
    Al ingresar en la app, el usuario podra optar por interactuar con el NavBar:
    1. Brand: dirige al inicio y muestra la totalidad de los productos. 
    2. Nosotros: breve texto introductorio sobre la empresa.
    3. Productos: dirige al inicio y muestra la totalidad de los productos.
    4. Contacto: Exhibe los datos de contacto de la empresa.
    5. Menu de Categorias: que filtra los productos por categoria.
    6. CartWidget: Dirige al carrito de compras, donde se podra interactura con los productos elegidos. Si no se hubieran elegido productos, indicará que se encuentra vacio y ofrecerá continuar comprando.
   
En caso de no interactuar con el NavBar, una vez se hayan renderizado los productos, los mismos exhibiran nombre, precio e imagen, y un boton para acceder al detalle de los mismos. Desde esta instancia, solo se puede avanzar presionando el boton de _Ver Detalle_, el cual nos llevara a la pagina _Detalle de Producto_. Aqui veremos la imagen, el nombre, descripción y precio. Tambien podremos elegir la cantidad de productos que deseamos y agregarlos al carrito.

Luego de agregar los items al carrito, aparecerá un mensaje de confirmación con la cantidad agregada y 2 botones que ofrecen opciones al usuario:

1. **Seguir Comprando**, el cual nos llevará nuevamente al listado de productos. 
2. **Terminar Compra**, el cual nos llevará al carrito, para poder revisar las cantidades y modificar las misma. 

El carrito tiene las siguientes funcionalidades:

- _Vaciar Carrito_.
- _Incrementar - Decrementar_ cantidad.
- _Eliminar Producto_. Cuando se eliminan todos los productos, se produce el mismo rederizado que al vaciar carrito.
- _Seguir comprando_, para volver al listado de productos. 

Una vez que se tienen en el carrito todos los productos, para simular el pago del mismo se solicita al usuario que ingrese nombre, telefono y confirme su mail ingresandolo 2 veces. Luego se autoriza la ejecución del boton **Pagar**.

Luego de ejecutar el pago, se agradece al cliente la compra y se otorga un numero de ID generado automaticamente por _Firebase_ y vinculado con los datos de los productos y la información del cliente. Desde esta pagina se puede regresar al listado de productos. 
5. Componentes:

El header cuenta con los siguientes componentes:
    - NavLink. 
    - Navbar. (Con varios Navlink en su interior)
    - CartWidget. (Alojado en otro NavLink)
    
El main, por su parte, incluye los siguientes componentes:
    -   Nosotros, con información de la empresa
    -   ItemListContainer, que contiene la logica de obteción de datos de los productos. 
    -   ItemList, que prepara la información para ser visualizada por el siguiente componente.
    -   Item, que visualiza la información. 
    -   ItemDetailContainer que obtiene la información de 1 producto para mostrar el detalle del mismo. 
    -   ItemDetail, que visualiza la información de ese producto. 
    -   ItemCount, que determina la cantidad de tal producto que se agregará al carrito.
    -   Cart, que visualiza la información de los productos en el carrito. 
    -   Formulario, que recibe y valida la información del comprador.
    -   Cashier, que muestra la información una vez realizada la compra.
    -   Contact, con información de la contacto de la empresa.

El footer es un componente en si mismo. 

Y por ultimo el componente CartContext, que es el encargado de inicializar la mayoria de los estados y de la creacción del _Provider_.

6. Implementaciones Pendientes
  
    1. Login inicial con datos de cuenta.
    2. Wishlist para los productos.
    3. Responsive Design.
    4. Carrito persistente con la sesion => SessionStorage.
    5. Ajuste de diseño en CSS.
    
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

8. Autor

Jorge Rivera
Mailto:     jorgejoaquinrivera@gmail.com
Linkedin:   [Jorge Rivera](https://es.reactjs.org/)
Git-Hub:    [Yoryao](https://github.com/Yoryao) 
