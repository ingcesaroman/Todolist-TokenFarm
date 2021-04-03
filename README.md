# Como contruir una App en Blockchain - Ethereum Lista de tareas 2021

Titulo Original (How to Build Blockchain App - Ethereum Todo List 2019)
Traduccion del trabajo de DAPPUniverity de **Gregory McCubbin** para fines educativos.

Bajo Licencia Creative Commons (CC)

<iframe width="602" height="339" src="https://www.youtube.com/embed/rzvk2kdjr2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Pueden ver la construcción de la aplicación en el video que se muestra arriba. Se da una guía paso a paso en el tutorial. Antes de que se inicie con la construcción de la app, seria bueno conocer como es que trabaja una aplicación en blockchain.

## Introducción


### ¿Como trabaja una apllicacion Blockchain?

Se escogió una aplicación de tarea (todo list) para el tutorial porque es la forma mas común de aprender cualquier lenguaje de programación.

Nos enseñará a leer y escribir datos de la cadena de bloques, así como a ejecutar la lógica empresarial que regirá el comportamiento de nuestra aplicación de lista de tareas pendientes. Le enseñará los fundamentos sobre cómo funciona una cadena de bloques y cómo escribir contratos inteligentes de Ethereum.

Para entender cómo funciona una aplicación blockchain, primero veamos cómo una lista de tareas podría funcionar como una aplicación web. Para acceder a la lista de tareas, usaría un navegador web que se comunicaría con un servidor web a través de Internet. El servidor contiene todo el código y los datos de la lista de tareas pendientes.

![Diagrama de una Aplicación Web](https://www.dappuniversity.com/blockchain-app-tutorial/web-application-diagram.png)

Aquí hay una lista de lo que encontrará en el servidor:

- Archivos del lado del cliente en HTML, CSS y JavaScript
- Código de back-end responsable de la lógica empresarial de la aplicación.
- Base de datos que almacena las tareas en la lista de tareas pendientes

Este servidor es una entidad centralizada que controla todos los aspectos de la aplicación. Cualquiera con acceso completo al servidor puede cambiar cualquier parte del código o los datos en cualquier momento. Una aplicación blockchain funciona de manera bastante diferente. Todo el código y los datos de la lista de tareas pendientes no se encuentran en un servidor centralizado. En cambio, se distribuye a través de la cadena de bloques. Todo el código y los datos se comparten y no se pueden cambiar en la cadena de bloques.

Para ilustrar esto, examinemos cómo funcionará nuestra lista de tareas pendientes basada en blockchain. 

![Diagrama de una Aplicación Web](https://www.dappuniversity.com/blockchain-app-tutorial/blockchain-application-diagram.png)

Este servidor es una entidad centralizada que controla todos los aspectos de la aplicación. Cualquiera con acceso completo al servidor puede cambiar cualquier parte del código o los datos en cualquier momento. Una aplicación blockchain funciona de manera bastante diferente. Todo el código y los datos de la lista de tareas pendientes no se encuentran en un servidor centralizado. En cambio, se distribuye a través de la cadena de bloques. Todo el código y los datos se comparten y no se pueden cambiar en la cadena de bloques.

Para ilustrar esto, examinemos cómo funcionará nuestra lista de tareas pendientes basada en blockchain. 

#### ¿Que es el Blockchain?

Una cadena de bloques es una red punto a punto (peer-to-peer) de computadoras o nodos que se comunican entre sí. Es una red distribuida donde todos los participantes comparten la responsabilidad de administrar la red. Cada participante de la red mantiene una copia del código y los datos en la cadena de bloques. Todos estos datos están contenidos en paquetes de registros llamados "bloques" que están "encadenados" para formar la cadena de bloques. Todos los nodos de la red garantizan que estos datos sean seguros e inmutables, a diferencia de una aplicación centralizada donde el código y los datos se pueden cambiar en cualquier momento. ¡Eso es lo que hace que la cadena de bloques sea tan poderosa! Debido a que la cadena de bloques es responsable de almacenar datos, fundamentalmente es una base de datos. Y debido a que es una red de computadoras que se comunican entre sí, es una red. Puede pensar en ello como una red y una base de datos, todo en uno.

También debo destacar otra distinción fundamental entre las aplicaciones web tradicionales y las aplicaciones blockchain: en lugar de ser un usuario de la aplicación en sí, eres un usuario de la red blockhain. La aplicación no gestiona ningún dato de usuario. ¡Esa es la responsabilidad de blockchain!

#### ¿Que es un Contrato Inteligente?

Todo el código de la cadena de bloques está contenido en contratos inteligentes, que son programas que se ejecutan en la cadena de bloques. Son los componentes básicos de las aplicaciones blockchain. Escribiremos un contrato inteligente en este tutorial para impulsar nuestra lista de tareas pendientes. Será responsable de obtener todas las tareas de nuestra lista de tareas pendientes de la cadena de bloques, agregar nuevas tareas y completar tareas.

Los contratos inteligentes están escritos en un lenguaje de programación llamado Solidity, que se parece mucho a JavaScript. Todo el código del contrato inteligente es inmutable o inmutable. Una vez que implementemos el contrato inteligente en la cadena de bloques, no podremos cambiar ni actualizar ninguno de los códigos. Esta es una característica de diseño que garantiza que el código sea confiable y seguro. A menudo comparo contratos inteligentes con microservicios en la web. Actúan como una interfaz para leer y escribir datos de la cadena de bloques, así como para ejecutar la lógica empresarial. Son de acceso público, lo que significa que cualquier persona con acceso a blockchian puede acceder a su interfaz.

#### ¿Como funiona un lista de tareas con Blockchain

Recapitulemos para entender cómo funcionará la aplicación que crearemos en este tutorial. Crearemos una aplicación del lado del cliente para la lista de tareas pendientes que se comunicará directamente con la cadena de bloques. Usaremos la cadena de bloques Ethereum en este tutorial, al que podemos acceder conectando nuestra aplicación del lado del cliente a un solo nodo Ethereum. Escribiremos un contrato inteligente en Solidity que impulse la lista de tareas pendientes y lo implementaremos en la cadena de bloques Ethereum. También nos conectaremos a la red blockchain con nuestra cuenta personal usando una billetera Ethereum para interactuar con la aplicación de lista de tareas pendientes.

#### Vista previa de la aplicación

Aquí hay una vista previa de la aplicación de lista de tareas que crearemos en este tutorial. Podremos enumerar todas las tareas en la lista de tareas pendientes, crear nuevas y completarlas.

![Lista de Tareas](https://www.dappuniversity.com/blockchain-app-tutorial/ethereum-todo-list-application.png)

## Pre-requisitos

### Instalación de dependencias

Ahora instalemos todas las dependencias que necesitamos para construir su proyecto. Primero, configuraremos una blockchain de persona para desarrollar la aplicación localmente.

### Blockchain personal de Ganache

La dependencia es una cadena de bloques personal, que es una cadena de bloques de desarrollo local que se puede utilizar para imitar el comportamiento de una cadena de bloques pública. Recomiendo usar [Ganache](https://www.trufflesuite.com/ganache) como su blockchain personal para el desarrollo de Ethereum. Le permitirá implementar contratos inteligentes, desarrollar aplicaciones y ejecutar pruebas. Está disponible en Windows, Mac y Linux como una aplicación de escritorio y una herramienta de línea de comandos.


![Ganache](https://www.dappuniversity.com/blockchain-developer-toolkit/1-ganache.png)

Lo guiaré a través de la configuración de la aplicación de escritorio en este tutorial. Puede encontrar la última versión para su sistema operativo aquí. Una vez que haya descargado el paquete archivado, extraiga el instalador y ejecute los pasos de configuración. Una vez que lo haya instalado, debería ver esta pantalla cada vez que la abra:

![Ganache blockchain](https://www.dappuniversity.com/blockchain-developer-toolkit/2-ganache.png)

¡Hurra! 🎉 ¡Ahora tienes una red blockchain personal en funcionamiento! Puede ver algunos detalles sobre el servidor en el que se ejecuta Ganache, junto con una lista de cuentas conectadas a la red. A cada cuenta se le han acreditado 100 éter. ¡Esto es un gran ahorro de tiempo! Si tuviera que crear su propia red blockchain personal desde cero, o desarrollar su aplicación en una red de prueba, tendría que crear las 10 cuentas manualmente y acreditar cada cuenta con ether. Afortunadamente, Ganache ya ha hecho esto por nosotros para que no tengamos que preocuparnos por eso.



## Tutorial paso a paso



## Correr la aplicacion

Confirmar que se tenga instalado NodeJS y Truffle 

    $ node -v
    $ npm install -g truffle@5.0.2


Descargar el resto de las dependencias con:

    $ npm install

Para compilar nuestro primer contrato inteligente agregamos:

    $ truffle compile

Para iniciar la migracion de datos colocamos:

    $ truffle migrate

En ocaciones necesitaremos reiniciar la migracion para empezar de nuevo con:

    $ truffle migrate --restart

Y probar nuestro codigo desde la consola con:

    $ truffle test

Por ultimo para ver el resultado de nuestra app, tendremos que abrirlo desde una segunda terminal y ejecutar al siguiente linea para inciar nuestro servidor, para abrir nuestra aplicacion en un localhost.

    $ npm run start

Para probar que nuestra aplicacion funciona y agregar DApp tokens a los inversionistas, lo podemos simular desde la consola con:

    truffle exec scripts/issueTokens.js
