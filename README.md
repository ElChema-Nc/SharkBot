> <b>🚀 VERSIÓN 9.9.9</b>

### ❇️ GRUPO OFICIAL
<a href="https://chat.whatsapp.com/JO5LstGfk6RBccr0gjzNwI" target="blank"><img src="https://img.shields.io/badge/1️⃣_COMUNIDAD-SHARKBOT_🦈-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</a>

### ✅ SHARK-BOT OFICIAL
<a href="http://wa.me/50585826826?text=.menu" target="blank"><img src="https://img.shields.io/badge/1️⃣_𝙎𝙝𝙖𝙧𝙠-𝘽𝙤𝙩ㅤ🦈-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</a>

-----
# 📍 Atajos del README

| TEMA | DESCRIPCIÓN | ATAJO |
|------|-------------|-------|
| **TERMUX** | ***INSTALACIÓN AUTOMÁTICA*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-opción-1-instalación-automática-por-termux-) |
| **TERMUX** | ***INSTALACIÓN MANUAL*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-opción-2-instalación-manual-por-termux---github) |
| **TERMUX** | ***INSTALACIÓN POR ARCHIVOS*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-opción-3-instalación-por-termux---archivos) |
| **TERMUX 24/7** | ***COMANDOS*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-usar-gatabot-247-en-termux) |
| **TERMUX UPDATE** | ***COMANDOS PARA ACTUALIZAR EL SHARK-BOT*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-actualizar-gatabot) |
| **HEROKU** | ***INSTALACIÓN POR HEROKU*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-activar-en-heroku) |
| **BOXMINE** | ***INSTALACIÓN POR BOXMINE*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-boxminehost) |
| **REPLIT** | ***INSTALACIÓN POR REPLIT*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-replit---shark-bot) |
| **KOYEB** | ***INSTALACIÓN POR KOYEB*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-activar-en-koyeb) |
| **WINDOWS** | ***INSTALACIÓN POR WINDOWS*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-para-usuarios-de-windowsvpsrdp) |
| **PREGUNTAS FRECUENTES** | ***DESPEJAR DUDAS*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#-shark-bot---preguntas) |
| **SOBRE SHARK-BOT** | ***SECCIONES DE INFORMACIÓN*** |[ver](https://github.com/ElChema-Nc/Shark-Bot/#sobre-sharkbot--sk-global) |
-----
### 🫠 (OPCIÓN 1) INSTALACIÓN AUTOMÁTICA POR TERMUX

> **Note** Comandos para instalar de forma automática en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://github.com/ElChema-Nc/Shark-Bot/master/shark.sh | bash
```
```js
// PERSONALIZAR INSTALACIÓN AUTOMÁTICA (En caso de una Bifurcación)
// Parámetros editables

// REFERENCIA
"wget -O - https://raw.githubusercontent.com/ElChema-Nc/Shark-Bot/master/shark.sh | bash"

// PARÁMETROS QUE PUEDE SER MODIFICADOS --> "[...]"
"wget -O - https://raw.githubusercontent.com/[usuario]/[repositorio]/[rama]/shark.sh | bash"
```
#### MODIFICAR ARCHIVO [`shark.sh`](https://github.com/ElChema-Nc/Shark-Bot/blob/master/shark.sh)
```js
//LÍNEAS A MODIFICAR
205 --> "git clone https://github.com/[user]/[repositorio].git"
//Ejemplo: git clone https://github.com/ElChema-Nc/Shark-Bot.git

209 --> "cd [repositorio]"
//Ejemplo: cd Shark-Bot

//Una vez hecho estos cambios ejecute los nuevos comandos en Termux
```
-----
### 🪄 (OPCIÓN 2) INSTALACIÓN MANUAL POR TERMUX - GITHUB 

> **Note** Comandos para instalar de forma manual
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install git nodejs ffmpeg imagemagick yarn && git clone https://github.com/ElChema-Nc/Shark-Bot && cd Shark-Bot && yarn install && npm install && npm start
```
> **Warning** Si aparece (Y/I/N/O/D/Z) [default=N] ? use la letra "y" + "ENTER" para continuar con la instalación 
------------------
### 📁 (OPCIÓN 3) INSTALACIÓN POR TERMUX - ARCHIVOS
> **Note** Descargué y Descomprime
### [`Shark-Bot ~ Archivos`](https://github.com/ElChema-Nc/Shark-Bot/archive/refs/heads/master.zip)
```bash
termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
cd storage/downloads/Shark-Bot-master/Shark-Bot-master 
yarn install
npm install
npm start
```
* #### APLICACIÓN RECOMENDADA PARA [`DESCOMPRIMIR`](https://play.google.com/store/apps/details?id=com.rarlab.rar)
* #### APLICACIÓN RECOMENDADA PARA EDITAR [`NÚMERO DE OWNER`](https://play.google.com/store/apps/details?id=com.rhmsoft.code)
> **Note** Guardar los archivos en la ubicación: storage/downloads/Shark-Bot-master/Shark-Bot-master   
----
### 🚀 USAR GATABOT 24/7 EN TERMUX 
> Ejecutar estos comandos dentro de la carpeta Shark-Bot
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### ⬇️ Opciones Disponibles
> **Warning** Esto eliminará todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecución de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecución de Termux use:
```bash 
pm2 start index
``` 
----
### ACTUALIZAR SHARK-BOT 🦈
> **Note** Comandos para actualizar Shark-Bot de forma automática
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/ElChema-Nc/Shark-Bot/master/update.sh | bash 
```
#### Para que no pierda su progreso con el Shark-Bot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.
> **Warning** Estos comandos solo funcionan para TERMUX, REPLIT, LINUX                           
----
### 🟣 ACTIVAR EN HEROKU 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ElChema-Nc/Shark-Bot-Heroku) 
### 👇 Añada lo siguente al Buildpack: 
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
-----

### ✅ BOXMINEHOST 
> Activar el Shark-Bot 24/7 en BoxMine Host

<a href="https://boxmineworld.com"><img src="https://i.imgur.com/allAyd4.png" height="125px"></a>
### BoxMine World

- Pagina Oficial: [`https://boxmineworld.com`](https://boxmineworld.com)
- Dashboard: [`https://dash.boxmineworld.com`](https://dash.boxmineworld.com)
- Panel: [`https://panel.boxmineworld.com`](https://panel.boxmineworld.com)

------------------
### ⚡ REPLIT - SHARK-BOT
<a target="_blank" href="https://replit.com/github/ElChema-Nc/Shark-Bot"><img alt="Run on Replit" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg"></a>
<a href="https://replit.com/github/ElChema-Nc/Shark-Bot"> <img src="https://media0.giphy.com/media/lMwu8EJAnv9kmn51KQ/giphy.gif" height="29px"></a>

-------------------
### 🌱 ACTIVAR EN KOYEB 

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/ElChema-Nc/Shark-Bot&branch=master&name=shark-bot)

------------------
### ☁️ ACTIVAR EN RENDER 
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://dashboard.render.com/blueprint/new?repo=https%3A%2F%2Fgithub.com%2FElChema-Nc%2FShark-Bot) 

------------------
## 💻 PARA USUARIOS DE WINDOWS/VPS/RDP

* Descargar e instala Git [`Aquí`](https://git-scm.com/downloads)
* Descargar e instala NodeJS [`Aquí`](https://nodejs.org/en/download)
* Descargar e instala FFmpeg [`Aquí`](https://ffmpeg.org/download.html) (**No olvide agregar FFmpeg a la variable de entorno PATH**)
* Descargar e instala ImageMagick [`Aquí`](https://imagemagick.org/script/download.php)
* Descargar e instala Yarn [`Aquí`](https://classic.yarnpkg.com/en/docs/install#windows-stable)
```bash
git clone https://github.com/ElChema-Nc/Shark-Bot && cd Shark-Bot && npm install && npm update && node .
```
## 💻 Instalación de FFmpeg para Windows 
* Descarga cualquiera de las versiones de FFmpeg disponibles haciendo clic en [FFmpeg](https://www.gyan.dev/ffmpeg/builds/).
* Extraer archivos a `C:\` path.
* Cambie el nombre de la carpeta extraída a `ffmpeg`.
* Ejecute el símbolo del sistema como administrador.
* Ejecute el siguiente comando:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Si tiene éxito, le dará un mensaje como: `SUCCESS: specified value was saved`.
* Ahora que tiene FFmpeg instalado, verifique que funcionó ejecutando este comando para ver la versión:
```cmd
> ffmpeg -version
```
----  
### ❓ Shark-Bot - Preguntas ❔
<details>
<summary><b>Configuración</b></summary>

  - [x] **¿Como puedo hacer una bifurcación?**<br>
  _Puede hacerlo desde [`💚 Aquí`](https://github.com/ElChema-Nc/Shark-Bot/fork)._
  
  - [x] **¿Dónde puedo agregar el número del Bot?**<br>
  _Puede hacerlo desde el archivo [`⚙️ config.js`](https://github.com/ElChema-Nc/Shark-Bot/blob/master/config.js). En el apartado `global.owner` puede agregar el número del Bot y más números como Owner._
  ```js
  global.owner = [
  ['34671660629', '𝙀𝙡ㅤ𝘾𝙝𝙚𝙢𝙖ㅤ🔱', true],  
  ['50578213790', '𝙊𝙬𝙣𝙚𝙧 (𝙊𝙨𝙤) 💻', true],
  ['50585826826', '𝙎𝙝𝙖𝙧𝙠-𝘽𝙤𝙩ㅤ🦈', true]
]
  ```
  - [x] **¿Cómo edito el texto del Bot?**<br>
  _Ir a la carpeta [`idiomas ✨`](https://github.com/ElChema-Nc/Shark-Bot/tree/master/lib/idiomas) y selecciona el archivo del idioma que quiera modificar su contenido._
  
  - [x] **¿Dónde puedo cambiar el idioma del Shark-Bot?**<br>
  _Puede cambiar el idioma ingresando [`Aquí`](https://github.com/ElChema-Nc/Shark-Bot/blob/362ee2d694a033923efd9bf9ca16a2b0694e3073/config.js#L41)_
</details>

<details>
<summary><b>Preguntas sobre Termux</b></summary>

  - [x] **¿Cómo puedo instalar el Shark-Bot en Termux?**<br>
  _Puede usar la [`Instalación Automática 🗿`](https://github.com/ElChema-Nc/Shark-Bot/#-opci%C3%B3n-1-instalaci%C3%B3n-autom%C3%A1tica-por-termux-) si es la primera vez que va instalar._<br>
  
  - [x] **¿Cómo puedo descargar Termux?**<br>
  _Puede descargar la versión de Termux e instalar [`Aquí 👻`](https://f-droid.org/es/packages/com.termux/)._
  
    - [x] **¿Cómo conectar al Shark-Bot si se cierra la aplicación de Termux?**<br>
  _Primero abrir Termux, luego usar este comando para iniciar el Shark-Bot si previamente ya hizo su instalación `cd Shark-Bot && npm start`_
  
  - [x] **¿Cómo iniciar el Shark-Bot si me encuentro dentro de su carpeta?**<br>
  _Usar `npm start` para iniciar el Shark-Bot si ya está dentro de la carpeta_
  
  - [x] **¿Cómo detengo Termux?**<br>
  _Use el botón de termux `CTRL` + Tecla `Z` para detener termux._
  
  - [x] **Quiero tener Termux 24/7 ¿Cómo lo hago?**<br>
  _Desde la carpeta del Shark-Bot use los comandos [`24/7 Termux 🚀`](https://github.com/ElChema-Nc/Shark-Bot/#-usar-shark-bot-247-en-termux)_

  - [x] **Comandos para obtener nuevo código QR:**<br>
  _Diga estos comandos desde la carpeta del Shark-Bot `rm -rf SharkBotSession && npm start`_
  
  - [x] **¿Cómo actualizar GataBot?**<br>
  _Desde la carpeta de GataBot usar los commandos para [`♻️ Actualizar el Shark-Bot`](https://github.com/ElChema-Nc/Shark-Bot/#-actualizar-shark-bot)_
  
  - [x] **¿Que hago si no responde el Bot después de iniciar o si muestra un mensje diciendo "Mensaje en espera"?**<br>
  _Detenga Termux y elimine la sesión del Shark-Bot para obtener un nuevo código QR._
</details>

----
### SOBRE EL SHARK-BOT ~ SK-GLOBAL
<details>
<summary><b>Objetivo</b></summary><br>

  - [x] _Proporcionar un Bot funcional para WhatsApp que ofrezca una amplia gama de funciones, compatibilidad con múltiples idiomas, automatización y una alta eficiencia en su desempeño._
  - [x] _El Bot estaría diseñado para brindar una experiencia de usuario intuitiva y accesible, permitiendo a los usuarios realizar diversas tareas sin la necesidad de salir de la aplicación de WhatsApp._
  - [x] _Proporcionar una herramienta que sea útil para una amplia audiencia, al mismo tiempo que ofrezca una solución efectiva y sencilla para las necesidades cotidianas en el uso de WhatsApp._

</details>

<details>
<summary><b>Funcionamiento</b></summary><br>

  - [x] _SharkBot utiliza la utilidad de Javascript y Shell para crear un código altamente funcional que permite gestionar la compatibilidad con WhatsApp._
  - [x] _Con el uso de la biblioteca de código abierto Baileys, Shark-Bot establece una conexión directa con la aplicación de WhatsApp, lo que permite una experiencia de usuario fluida._
  - [x] _Se utiliza fuentes externas, APIs, imágenes, videos y documentos en línea para proporcionar una herramienta auténtica y completa que solventa una amplia gama de necesidades dentro de WhatsApp. Con estas características, los usuarios pueden disfrutar de una experiencia de usuario mejorada y eficiente al utilizar GataBot._

</details>

<details>
<summary><b>Privacidad</b></summary><br>

  - [x] _En el Shark-Bot, la seguridad y privacidad de los usuarios son una prioridad fundamental. El código del Bot está diseñado para ser seguro tanto para el propietario del Bot como para los usuarios que interactúan con él._
  - [x] _En lo que respecta a la recopilación de datos, el Shark-Bot solo recopila información pública, como el nombre de usuario, la descripción y la foto de perfil, con el único propósito de mantener el progreso del usuario en el Bot o identificar valores necesarios para realizar las funciones del Bot._
  - [x] _El código del Shark-Bot es completamente público y puede ser revisado detalladamente sin ningún inconveniente. Con estas características, los usuarios pueden estar seguros de que su información y privacidad están protegidas al interactuar con el Shark-Bot._

</details>

<details>
<summary><b>Términos de uso</b></summary><br>

  - [x] _Es importante mencionar que el uso del Bot es bajo la responsabilidad del usuario, y que el propietario del Bot no se hace responsable del uso indebido que se pueda hacer de él._
  - [x] _Es recomendable establecer restricciones claras sobre el tipo de uso que se puede hacer del Bot._
  - [x] _Es importante mencionar que el Bot no está diseñado para cometer spam, phishing u otros tipos de actividades maliciosas, y que su uso con estos fines está prohibido._

</details>

<details>
<summary><b>Recomendaciones</b></summary><br>

  - [x] _Es importante mencionar que se recomienda tener una buena conexión a Internet, no solo para una experiencia de usuario más fluida, sino también para garantizar un correcto funcionamiento del Bot._
  - [x] _Es recomendable tener suficiente espacio de almacenamiento libre para el Bot, ya que esto puede afectar su capacidad para procesar y almacenar datos. Tener una memoria RAM mínima de 3 GB, ya que esto puede ayudar a garantizar una experiencia de usuario fluida y evitar que el Bot se bloquee o se ralentice._
  - [x] _Es importante mencionar que se recomienda usar el WhatsApp Messenger para el Bot, ya que esto puede garantizar una mayor flexibilidad en cuanto a la compatibilidad con diferentes dispositivos y sistemas operativos._
  - [x] _Es recomendable tener en cuenta que el Bot puede funcionar de manera estable en un máximo de 30 grupos considerando las características anteriores._
  - [x] _Es importante mencionar que el Bot funciona aún si el WhatsApp no tiene Internet._
  - [x] _Si encuentra alguna falla de visibilidad de mensajes, se recomienda volver a escanear el código QR para garantizar una conexión correcta entre el Bot y el WhatsApp._

</details>

<details>
<summary><b>Actualizaciones y cambios</b></summary><br>

  - [x] _El Shark-Bot está en constante evolución y mejora, cada actualización busca solucionar errores, mejorar la eficiencia de las funciones existentes, agregar nuevas funciones y optimizar los recursos para una experiencia más fluida. Le recomendamos que se mantenga actualizado con las últimas versiones para disfrutar de todas las mejoras y nuevas características que se implementen en el futuro. ¡Gracias por usar GataBot!_

</details>

----
### 💠 [`IDIOMAS DISPONIBLES PARA SHARK-BOT`](https://github.com/ElChema-Nc/Shark-Bot/blob/master/config.js) 
#### 🌐 Español  
#### 🌐 Inglés (English) 
- [x] Ejemplo <details><summary>Idioma</summary><img src="https://i.imgur.com/RMWFgZo.jpeg"></details>
----

### 🌟 CREADOR
[![ElChema-Nc](https://github.com/ElChema-Nc.png?size=100)](https://github.com/ElChema-Nc) 

### 🌟 AGRADECIMIENTOS
[![TheShadowBrokers1](https://github.com/BrunoSobrino.png?size=60)](https://github.com/BrunoSobrino) 

