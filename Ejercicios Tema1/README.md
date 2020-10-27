## Ejercicios Tema 1, Arquitecturas software para la nube

### Ejercicio 1
**Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?**  
La aplicación que voy a usar es una práctica realizada en la asignatura de Programación y Diseño Orientado a Objetos, llamada Quitetet. Este aplicación era una versión del famoso juego Monopoly. Se desarrolló en los lenguajes Java y Ruby.\
El patrón que usamos en esta aplicación fue la de MVC, (Modelo Vista Controlador).\
Para evolucionar dicho patrón, se debería separar cada una de estas capas, siendo un microservicio la capa Modelo, otro la capa vista y otra la capa del controlador, ya que este patrón permite separarlos independientemente de cada uno.

### Ejercicio 2
**En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?**  
Sí se podría usar otros lenguajes diferentes, dado que se hizo tanto en Java y Ruby y también porque lo permite al tratarse de una aplicación que se puede desarrollar en cualquier idioma.\
Dado que es un juego, no hay datos almacenados realmente, los pocos que hay pertenecen a las clases de la aplicación. Aun así se podría sacar de la aplicación algunos datos para poder modificarlos a nuestro gusto, como por ejemplo las casillas del tablero y guardar los jugadores que hayan jugado. De primeras se podría usar alguna base de datos estilo SQL, ya que los datos están bien descritos, pero también sería posible usar otros tipos. También se podría almacenar algunos datos relevantes al juego en un almacén y los datos relevantes a los jugadores en otro tipo distinto de almacén de datos.
