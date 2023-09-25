> <b>�0�4  VERSION 7.5.3</b>
 
<div align="center">
<a href="https://youtube.com/@thechema06?si=OWCbVDp_LvQ0thJ-">
<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
</a>
<a href="https://instagram.com/josh_artl">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
</a>
</div>

### �7�9�1�5 GRUPO OFICIAL
<a href="https://chat.whatsapp.com/JO5LstGfk6RBccr0gjzNwI" target="blank"><img src="https://img.shields.io/badge/1�1�5�6�6_COMUNIDAD-SHARKBOT_�0�0-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</a>

### �7�3 SHARKBOT OFICIAL
<a href="http://wa.me/50585826826?text=.menu" target="blank"><img src="https://img.shields.io/badge/1�1�5�6�6_�3�2�3�7�3�0�3�7�3�0-�3�5�3�4�3�9�9�4�0�0-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</a>

# �9�9 Atajos del README

| TEMA | DESCRIPCI�0�7N | ATAJO |
|------|-------------|-------|
| **TERMUX** | ***INSTALACI�0�7N AUTOM�0�9TICA*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-opci��n-1-instalaci��n-autom��tica-por-termux-) |
| **TERMUX** | ***INSTALACI�0�7N MANUAL*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-opci��n-2-instalaci��n-manual-por-termux---github) |
| **TERMUX** | ***INSTALACI�0�7N POR ARCHIVOS*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-opci��n-3-instalaci��n-por-termux---archivos) |
| **TERMUX 24/7** | ***COMANDOS*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-usar-gatabot-247-en-termux) |
| **TERMUX UPDATE** | ***COMANDOS PARA ACTUALIZAR GATABOT*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-actualizar-gatabot) |
| **HEROKU** | ***INSTALACI�0�7N POR HEROKU*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-activar-en-heroku) |
| **BOXMINE** | ***INSTALACI�0�7N POR BOXMINE*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-boxminehost) |
| **REPLIT** | ***INSTALACI�0�7N POR REPLIT*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-replit---gatabot) |
| **KOYEB** | ***INSTALACI�0�7N POR KOYEB*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-activar-en-koyeb) |
| **WINDOWS** | ***INSTALACI�0�7N POR WINDOWS*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-para-usuarios-de-windowsvpsrdp) |
| **PREGUNTAS FRECUENTES** | ***DESPEJAR DUDAS*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-gatabot-md---preguntas) |
| **SOBRE GATABOT** | ***SECCIONES DE INFORMACI�0�7N*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#sobre-gatabot--gb-global) |
| **DESARROLLADORES** | ***PARTICIPATES DEL PROYECTO*** |[ver](https://github.com/GataNina-Li/GataBot-MD/#-creador) |
-----
### �0�0 (OPCI�0�7N 1) INSTALACI�0�7N AUTOM�0�9TICA POR TERMUX
> **Note** Comandos para instalar de forma autom��tica en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/ElChema-Nc/SharkBot/master/shark.sh | bash
```
```js
// PERSONALIZAR INSTALACI�0�7N AUTOM�0�9TICA (En caso de una Bifurcaci��n)
// Par��metros editables

// REFERENCIA
"wget -O - https://raw.githubusercontent.com/ElChema-Nc/SharkBot/master/shark.sh | bash"

// PAR�0�9METROS QUE PUEDE SER MODIFICADOS --> "[...]"
"wget -O - https://raw.githubusercontent.com/[usuario]/[repositorio]/[rama]/shark.sh | bash"
```
#### MODIFICAR ARCHIVO [`gata.sh`](https://github.com/ElChema-Nc/SharkBot/blob/master/shark.sh)
```js
//L�0�1NEAS A MODIFICAR
205 --> "git clone https://github.com/[user]/[repositorio].git"
//Ejemplo: git clone https://github.com/ElChema-Nc/SharkBot.git

209 --> "cd [repositorio]"
//Ejemplo: cd SharkBot

//Una vez hecho estos cambios ejecute los nuevos comandos en Termux
```
-----
### �0�2 (OPCI�0�7N 2) INSTALACI�0�7N MANUAL POR TERMUX - GITHUB 
> **Note** Comandos para instalar de forma manual
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install git nodejs ffmpeg imagemagick yarn && git clone https://github.com/ElChema-Nc/SharkBot && cd SharkBot && yarn install && npm install && npm start
```
> **Warning** Si aparece (Y/I/N/O/D/Z) [default=N] ? use la letra "y" + "ENTER" para continuar con la instalaci��n 
----
### �0�4 USAR EL SHARKBOT 24/7 EN TERMUX 
> Ejecutar estos comandos dentro de la carpeta SharkBot
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### �8�9�1�5 Opciones Disponibles
> **Warning** Esto eliminar�� todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecuci��n use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecuci��n de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecuci��n de Termux use:
```bash 
pm2 start index
``` 
----
### �9�9 ACTUALIZAR SHARKBOT
> **Note** Comandos para actualizar el SharkBot de forma autom��tica
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/ElChema-Nc/SharkBot/master/update.sh | bash 
```
#### Para que no pierda su progreso en SharkBot, estos comandos realizar��n un respaldo de su `database.json` y se agregar�� a la versi��n m��s reciente.
> **Warning** Estos comandos solo funcionan para TERMUX, REPLIT, LINUX                           
----
### �0�9 ACTIVAR EN HEROKU 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ElChema-Nc/SharkBot) 
### �9�5 A�0�9ada lo siguente al Buildpack: 
```bash
heroku/nodejs
```
```bash
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
```
```bash
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
-----
- [x] Resultado <details><summary>Buildpack</summary><img src="https://i.imgur.com/t3Xzgnh.jpeg"></details>
------------------
### �7�3 REPLIT - SHARKBOT
<a target="_blank" href="https://replit.com/github/ElChema-Nc/SharkBot"><img alt="Ejecutarse en Replit" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg"></a>
<a href="https://replit.com/github/ElChema-Nc/SharkBot"> <img src="https://media0.giphy.com/media/lMwu8EJAnv9kmn51KQ/giphy.gif" height="29px"></a>

------------------
### �9�7 ACTIVAR EN KOYEB 

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/ElChema-Nc/SharkBot&branch=master&name=sharkbot)

------------------
### �7�8�1�5 ACTIVAR EN RENDER 
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://dashboard.render.com/blueprint/new?repo=https%3A%2F%2Fgithub.com%2FElChema-Nc%2FSharkBot) 

------------------
## �9�1 PARA USUARIOS DE WINDOWS/VPS/RDP

* Descargar e instala Git [`Aqu��`](https://git-scm.com/downloads)
* Descargar e instala NodeJS [`Aqu��`](https://nodejs.org/en/download)
* Descargar e instala FFmpeg [`Aqu��`](https://ffmpeg.org/download.html) (**No olvide agregar FFmpeg a la variable de entorno PATH**)
* Descargar e instala ImageMagick [`Aqu��`](https://imagemagick.org/script/download.php)
* Descargar e instala Yarn [`Aqu��`](https://classic.yarnpkg.com/en/docs/install#windows-stable)
```bash
git clone https://github.com/ElChema-Nc/SharkBot && cd SharkBot && npm install && npm update && node .
```
## �9�1 Instalaci��n de FFmpeg para Windows 
* Descarga cualquiera de las versiones de FFmpeg disponibles haciendo clic en [FFmpeg](https://www.gyan.dev/ffmpeg/builds/).
* Extraer archivos a `C:\` path.
* Cambie el nombre de la carpeta extra��da a `ffmpeg`.
* Ejecute el s��mbolo del sistema como administrador.
* Ejecute el siguiente comando:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Si tiene ��xito, le dar�� un mensaje como: `SUCCESS: specified value was saved`.
* Ahora que tiene FFmpeg instalado, verifique que funcion�� ejecutando este comando para ver la versi��n:
```cmd
> ffmpeg -version
```
----  
### �7�2 SharkBot - Preguntas 
<details>
<summary><b>Configuraci��n</b></summary>

  - [x] **�0�7Como puedo hacer una bifurcaci��n?**<br>
  _Puede hacerlo desde [`�0�5 Aqu��`](https://github.com/ElChema-Nc/SharkBot/fork)._
  
  - [x] **�0�7D��nde puedo agregar el n��mero del Bot?**<br>
  _Puedes hacerlo desde el archivo [`�7�5�1�5 config.js`](https://github.com/ElChema-Nc/SharkBot/blob/master/config.js). En el apartado `global.owner` puede agregar el n��mero del Bot y m��s n��meros como Owner._
  ```js
  global.owner = [
  ["50585826826", '�3�2�3�7�3�0�3�7�3�0-�3�5�3�4�3�9�9�4�0�0', true], // N��mero del Bot: Ejemplo +505 8582 6826
  ['34623289459'], // Owner 1 +34 623 28 94 59
  ['50578213790'] // Owner 2 +505 7821 3790
]
  ```
  - [x] **�0�7C��mo edito el texto del Bot?**<br>
  _Ir a la carpeta [`idiomas �7�8`](https://github.com/ElChema-Nc/SharkBot/tree/master/lib/idiomas) y selecciona el archivo del idioma que quiera modificar su contenido._
  
  - [x] **�0�7D��nde puedo cambiar el idioma del SharkBot?**<br>
  _Puede cambiar el idioma ingresando [`Aqu��`](https://github.com/ElChema-Nc/SharkBot/blob/4a1eb2d4b4e2613a8b69996ea6bbb252001604cc/config.js#L30)_
</details>

<details>
<summary><b>Preguntas sobre Termux</b></summary>

  - [x] **�0�7C��mo puedo instalar el SharkBot en Termux?**<br>
  _Puede usar la [`Instalaci��n Autom��tica �9�9`](https://github.com/GataNina-Li/GataBot-MD/#-opci%C3%B3n-1-instalaci%C3%B3n-autom%C3%A1tica-por-termux-) si es la primera vez que va instalar._<br>
  
  - [x] **�0�7C��mo puedo descargar Termux?**<br>
  _Puede descargar la versi��n de Termux e instalar [`Aqu�� �9�5`](https://f-droid.org/repo/com.termux_118.apk)._
  
  - [x] **�0�7C��mo conectar a SharkBot si se cierra la aplicaci��n de Termux?**<br>
  _Primero abrir Termux, luego usar este comando para iniciar el SharkBot si previamente ya hizo su instalaci��n `cd SharkBot && npm start`_
 
  - [x] **�0�7C��mo iniciar el SharkBot si me encuentro dentro de su carpeta?**<br>
  _Usar `npm start` para iniciar el SharkBot si ya est�� dentro de la carpeta_
  
  - [x] **�0�7C��mo detengo Termux?**<br>
  _Use el bot��n de termux `CTRL` + Tecla `Z` para detener termux._
  
  - [x] **Quiero tener Termux 24/7 �0�7C��mo lo hago?**<br>
  _Desde la carpeta del SharkBot use los comandos [`24/7 Termux �0�4`](https://github.com/GataNina-Li/GataBot-MD/#-usar-gatabot-247-en-termux)_
    
  - [x] **Comandos para obtener nuevo c��digo QR:**<br>
  _Diga estos comandos desde la carpeta del SharkBot `rm -rf SharkBotSession && npm start`_
  
  - [x] **�0�7C��mo actualizar el SharkBot?**<br>
  _Desde la carpeta de SharkBot usar los commandos para [`�7�5�1�5 Actualizar SharkBot`](https://github.com/GataNina-Li/GataBot-MD/#-actualizar-gatabot)_
  
  - [x] **�0�7Que hago si no responde el Bot despu��s de iniciar o si muestra un mensje diciendo "Mensaje en espera"?**<br>
  _Detenga Termux y elimine la sesi��n del SharkBot para obtener un nuevo c��digo QR._
</details>

----
### SOBRE EL SHARKBOT
<details>
<summary><b>Objetivo</b></summary><br>

  - [x] _Proporcionar un Bot funcional para WhatsApp que ofrezca una amplia gama de funciones, compatibilidad con m��ltiples idiomas, automatizaci��n y una alta eficiencia en su desempe�0�9o._
  - [x] _El Bot estar��a dise�0�9ado para brindar una experiencia de usuario intuitiva y accesible, permitiendo a los usuarios realizar diversas tareas sin la necesidad de salir de la aplicaci��n de WhatsApp._
  - [x] _Proporcionar una herramienta que sea ��til para una amplia audiencia, al mismo tiempo que ofrezca una soluci��n efectiva y sencilla para las necesidades cotidianas en el uso de WhatsApp._

</details>

<details>
<summary><b>Funcionamiento</b></summary><br>

  - [x] _SharkBot utiliza la utilidad de Javascript y Shell para crear un c��digo altamente funcional que permite gestionar la compatibilidad con WhatsApp._
  - [x] _Con el uso de la biblioteca de c��digo abierto Baileys, SharkBot establece una conexi��n directa con la aplicaci��n de WhatsApp, lo que permite una experiencia de usuario fluida._
  - [x] _Se utiliza fuentes externas, APIs, im��genes, videos y documentos en l��nea para proporcionar una herramienta aut��ntica y completa que solventa una amplia gama de necesidades dentro de WhatsApp. Con estas caracter��sticas, los usuarios pueden disfrutar de una experiencia de usuario mejorada y eficiente al utilizar el SharkBot._

</details>

<details>
<summary><b>Privacidad</b></summary><br>

  - [x] _En SharkBot, la seguridad y privacidad de los usuarios son una prioridad fundamental. El c��digo del Bot est�� dise�0�9ado para ser seguro tanto para el propietario del Bot como para los usuarios que interact��an con ��l._
  - [x] _En lo que respecta a la recopilaci��n de datos, SharkBot solo recopila informaci��n p��blica, como el nombre de usuario, la descripci��n y la foto de perfil, con el ��nico prop��sito de mantener el progreso del usuario en el Bot o identificar valores necesarios para realizar las funciones del Bot._
  - [x] _El c��digo de SharkBot es completamente p��blico y puede ser revisado detalladamente sin ning��n inconveniente. Con estas caracter��sticas, los usuarios pueden estar seguros de que su informaci��n y privacidad est��n protegidas al interactuar con el SharkBot._

</details>

<details>
<summary><b>Edici��n & Material</b></summary><br>

  - [x] _SharkBot est�� dise�0�9ado para ser altamente personalizable, por lo que si tienes conocimientos previos de c��digo, puedes realizar modificaciones libremente en el c��digo del Bot. Sin embargo, aunque el c��digo es p��blico y editable, por favor no olvides mencionar los cr��ditos correspondientes para que el SharkBot siga recibiendo m��s novedades y mejoras en el futuro._
  - [x] _La personalizaci��n del Bot puede hacerse tanto a nivel de c��digo como a trav��s de herramientas de configuraci��n, dependiendo de la plataforma o framework que se est�� utilizando._  
  - [x] _En cuanto al material que contiene el SharkBot, los usuarios pueden esperar encontrar una amplia variedad de contenido, incluyendo memes, inteligencia artificial que depende del PROMPT que reciba, contenido para adultos (quedando en el juicio del usuario asumir si tiene la edad suficiente para comprender dicho contenido), informaci��n que cambia dependiendo de la solicitud del usuario, audios y stickers. Por favor, ten en cuenta que nos reservamos el derecho de juzgar dicho contenido y tomar las medidas necesarias para mantener un ambiente seguro y apropiado en el uso de SharkBot._

</details>

<details>
<summary><b>T��rminos de uso</b></summary><br>

  - [x] _Es importante mencionar que el uso del Bot es bajo la responsabilidad del usuario, y que el propietario del Bot no se hace responsable del uso indebido que se pueda hacer de ��l._
  - [x] _Es recomendable establecer restricciones claras sobre el tipo de uso que se puede hacer del Bot._
  - [x] _Es importante mencionar que el Bot no est�� dise�0�9ado para cometer spam, phishing u otros tipos de actividades maliciosas, y que su uso con estos fines est�� prohibido._

</details>

<details>
<summary><b>Recomendaciones</b></summary><br>

  - [x] _Es importante mencionar que se recomienda tener una buena conexi��n a Internet, no solo para una experiencia de usuario m��s fluida, sino tambi��n para garantizar un correcto funcionamiento del Bot._
  - [x] _Es recomendable tener suficiente espacio de almacenamiento libre para el Bot, ya que esto puede afectar su capacidad para procesar y almacenar datos. Tener una memoria RAM m��nima de 3 GB, ya que esto puede ayudar a garantizar una experiencia de usuario fluida y evitar que el Bot se bloquee o se ralentice._
  - [x] _Es importante mencionar que se recomienda usar el WhatsApp Messenger para el Bot, ya que esto puede garantizar una mayor flexibilidad en cuanto a la compatibilidad con diferentes dispositivos y sistemas operativos._
  - [x] _Es recomendable tener en cuenta que el Bot puede funcionar de manera estable en un m��ximo de 30 grupos considerando las caracter��sticas anteriores._
  - [x] _Es importante mencionar que el Bot funciona a��n si el WhatsApp no tiene Internet._
  - [x] _Si encuentra alguna falla de visibilidad de mensajes, se recomienda volver a escanear el c��digo QR para garantizar una conexi��n correcta entre el Bot y el WhatsApp._

</details>

<details>
<summary><b>Actualizaciones y cambios</b></summary><br>

  - [x] _SharkBot est�� en constante evoluci��n y mejora, cada actualizaci��n busca solucionar errores, mejorar la eficiencia de las funciones existentes, agregar nuevas funciones y optimizar los recursos para una experiencia m��s fluida. Le recomendamos que se mantenga actualizado con las ��ltimas versiones para disfrutar de todas las mejoras y nuevas caracter��sticas que se implementen en el futuro. �0�3Gracias por usar SharkBot!_

</details>

----
### �9�4 [`IDIOMAS DISPONIBLES PARA PARA EL SHARBOT`](https://github.com/ElChema-Nc/SharkBot/blob/master/config.js) 
#### �0�0 Espa�0�9ol  
#### �9�9 Ingl��s (English) 
----

### �9�1 CREADOR
[![GataNina-Li](https://github.com/ElChema-Nc.png?size=100)](https://github.com/ElChema-Nc) 

### �0�9�6�9�9�5 DESARROLLADORES
<a href="https://github.com/ElChema-Nc/SharkBot/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ElChema-Nc/SharkBot" /> 
</a>
