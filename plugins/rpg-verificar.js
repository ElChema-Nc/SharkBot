import { createHash } from 'crypto'
let nombre = 0, edad = 0, genero = 0, bio = 0, identidad = 0, pasatiempo = 0, registro, _registro, fecha, hora, tiempo, registrando
let pas1 = 0, pas2 = 0, pas3 = 0, pas4 = 0, pas5 = 0  

let handler = async function (m, { conn, text, command, usedPrefix }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? m.sender : m.sender
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0] 
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => 'undefined')
bio = biografia.status?.toString() || 'No encontrada'
let intervalId
function mensajeRegistro() {
if (edad === 0) {
clearInterval(intervalId)	
registrando = false
m.reply('```REGISTRO NO COMPLETADO. VUELVA A INTENTAR```')
return
}
if (user.registered === true) {
return 
}
if (typeof genero === 'string') {
global.db.data.users[m.sender]['registroC'] = true
registrando = false
conn.reply(m.chat, `*SU TIEMPO DE REGISTRO HA TERMINADO!!*\n\n_Si no continúa en este momento su registro no se guardará, si guarda más tarde su registro se habrá perdido_\n\n*Para continuar escriba:* ${usedPrefix}finalizar`, fkontak, m)
}else{
clearInterval(intervalId)
global.db.data.users[m.sender]['registroR'] = true		
registrando = false
conn.reply(m.chat, `*SU TIEMPO DE REGISTRO HA TERMINADO!!*\n\n_Si no continúa en este momento su registro no se guardará, si guarda más tarde su registro se habrá perdido_\n\n*Para continuar escriba:* ${usedPrefix}finalizar`, fkontak, m)}
}
		
if (user.registered === true) return m.reply(`${lenguajeGB['smsAvisoIIG']()}*YA ESTÁ REGISTRADO!!*\n*SI QUIERE ANULAR SU REGISTRO, USE ESTE COMANDO*\n*${usedPrefix}unreg numero de serie*\n\n*SI NO RECUERDA SU NÚMERO DE SERIE, USE ESTE COMANDO*\n*${usedPrefix}myns*`)	

if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
if (registrando === true) return m.reply('*ALGUIEN SE ESTÁ REGISTRANDO... ESPERE POR FAVOR 2 MINUTOS*')
conn.reply(m.chat, `*👀 CÓMO DESEA REGISTRARSE?*\n\n📑 *REGISTRO RÁPIDO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n\n*Escriba para el registro rápido:*\n${usedPrefix}reg1 nombre edad\n\n🗂️ *REGISTRO COMPLETO*\n• Insignia de verificación\n• Desbloquear comandos que requieran registro\n• Premium Temporal Gratis\n• Más opciones para este registro\n\n*Escriba para el registro completo:*\n${usedPrefix}nombre\n\n\`\`\`⭐ Considere que tendrá un tiempo para completar en caso de registrarse\`\`\``, fkontak, m)
}

if (command == 'reg1') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 2 * 60 * 1000) //2 min
setTimeout(() => {
clearInterval(intervalId)}, 126000) //2.1 min
}

registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2)
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}👉 *PARÁMETROS DEL REGISTRO:*\n${usedPrefix + command} nombre edad\n\n\`\`\`EJEMPLO:\`\`\`\n${usedPrefix + command} ${sk} 20\n\n*✨ CONSEJO:*\n• _Su nombre no debe de contener números_\n• _La edad no debe de contener letras_\n\n⭐ *Si desea personalizar más su registro, escriba:*\n${usedPrefix}nombre`, fkontak, m)
//if (_registro['length'] >= 3 || isNaN(_registro[1])) return 
//conn.sendButton(m.chat, fg + '🙃 *ESTÁ INTENTANDO SEPRAR SU NOMBRE O UNIR TODO?* ', '🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${sk}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${sk} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${sk} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro, de lo contraio vuelva a registrarse*\n➘ _Use el Botón de abajo_', null, [[`🌟 AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\0-9]/gi, "") + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")], ['📑 VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return m.reply(`${lenguajeGB['smsAvisoFG']()}*FALTA SU NOMBRE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``)
if (_registro[0].length >= 30) return m.reply(`${lenguajeGB['smsAvisoFG']()}*SU NOMBRE ES MUY LARGO, USE OTRO NOMBRE POR FAVOR*`)
if (_registro[0].length <= 2) return m.reply(`${lenguajeGB['smsAvisoFG']()}*SU NOMBRE ES MUY CORTO, USE OTRO NOMBRE POR FAVOR*`)
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
nombre = _registro[0]

if (!_registro[1]) return m.reply(`${lenguajeGB['smsAvisoFG']()}*FALTA SU EDAD, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``)
if (_registro[1] > 50) return m.reply(`${lenguajeGB['smsAvisoFG']()}*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``)
if (_registro[1] < 10) return m.reply(`${lenguajeGB['smsAvisoFG']()}*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``)
edad = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true

await conn.reply(m.chat, `*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:* ${nombre === 0 ? 'No encontrada' : nombre}\n*❖ EDAD:* ${edad === 0 ? 'No encontrada' : edad + ' años'}\n\n_Para completar su registro, escriba ${usedPrefix}finalizar_`, fkontak, m)	
}

if (command == 'nombre' || command == 'name') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 3 * 60 * 1000) //3 min
setTimeout(() => {
clearInterval(intervalId)}, 186000) //3.1 min
}
if (typeof nombre === 'string') return m.reply(`*NO PUEDE CAMBIAR DE NOMBRE*\n\n_Una vez completado no puede ser modificado_`)
if (verificar.test(text) == false || text.length <= 1) return conn.reply(m.chat, `${iig}👉 *PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}nombre ${sk}`, fkontak, m)
if (text.length >= 25) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*USE UN NOMBRE MÁS CORTO, EJEMPLO:*\n${usedPrefix}nombre ${sk}\n\n_Si quiere usar su nombre registrado en su WhatsApp, escriba ${usedPrefix}nombre2_`}, {quoted: fkontak})
if (text.length <= 2) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n${usedPrefix}nombre ${sk}\n\n_Si quiere usar su nombre registrado en su WhatsApp, escriba ${usedPrefix}nombre2_`}, {quoted: fkontak})
nombre = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
user.name = nombre
if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${nombre === 0 ? 'No encontrada' : nombre}\n\n🔢 *AHORA PUEDE REGISTRAR SU EDAD EJEMPLO:*\n${usedPrefix}edad 20`}, {quoted: fkontak})
}
	
if (command == 'nombre2' || command == 'name2') {
if (typeof nombre === 'string') fg + '*NO PUEDE CAMBIAR DE NOMBRE*\n\n_Una vez completado no puede ser modificado_'
if (nombreWA.slice(1).length < 2) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE DE WHATSAPP ES MUY CORTO PARA REGISTRAR*\n\n*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre usando ${usedPrefix}nombre ${sk}*`}, {quoted: fkontak})
if (nombreWA.slice(1).length > 25) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*SU NOMBRE DE WHATSAPP ES MUY LARGO PARA REGISTRAR*\n\n*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre usando ${usedPrefix}nombre ${sk}*`}, {quoted: fkontak})
nombre = nombreWA.replace(/\s+/g, '').replace(/[0-9]+/gi, "").slice(1).trim()
user.name = nombre
if (verificar.test(text) == false) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${nombre === 0 ? 'No encontrada' : nombre}\n\n🔢 *AHORA PUEDE REGISTRAR SU EDAD EJEMPLO:*\n${usedPrefix}edad 20`}, {quoted: fkontak})
}
		
if (command == 'edad' || command == 'age' || command == 'edad2' || command == 'age2') {
if (typeof edad === 'string') return m.reply(`${lenguajeGB['smsAvisoFG']()}*NO PUEDE CAMBIAR DE EDAD*\n\n_Una vez completado no puede ser modificado_`)
if (verificar.test(text.slice(1)) == false && !text) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoIIG']()}*👉 PERSONALICE SU EDAD PARA REGISTRAR, EJEMPLO:*\n${usedPrefix}edad 20`}, {quoted: fkontak})
if (isNaN(text)) return m.reply(`${lenguajeGB['smsAvisoFG']()}*INGRESE SOLO NÚMEROS*`)
if (text > 50) return m.reply(`${lenguajeGB['smsAvisoFG']()}*DEMASIADO MAYOR PARA SER REGISTRADO*`)
if (text < 10) return m.reply(`${lenguajeGB['smsAvisoFG']()}*DEMASIADO MENOR PARA SER REGISTRADO*`)
edad = text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")
user.age = edad
if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${nombre === 0 ? 'No encontrada' : nombre}\n*❖ EDAD:*\n${edad === 0 ? 'No encontrada' : edad + ' años'}\n\n🧬 *AHORA PUEDE REGISTRAR SU GÉNERO EJEMPLO:*\n${usedPrefix}genero`}, {quoted: fkontak})
}
	
if (command == 'genero' || command == 'género' || command == 'gender') {
let genText = `🌟 *SELECCIONA TU GÉNERO!!*
1️⃣ ️▸ _🚹 MASCULINO (Hombre)_
2️⃣ ▸ _🚺 FEMENINO (Mujer)_
3️⃣ ▸ _👤 OCULTAR GÉNERO (Omitir)_
🌟 *PUEDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA ELEGIR SU GÉNERO EJEMPLO:*
✓ ${usedPrefix}genero 2️⃣
✓ ${usedPrefix}genero 2`
if (!text) return conn.sendMessage(m.chat, { text: genText }, { quoted: fkontak })	
function asignarGenero(text) {
switch (text) {
case "1️⃣":
case "1":
case "🚹":
genero = "Hombre"
break
case "2️⃣":
case "2":
case "🚺":
genero = "Mujer"
break
case "3️⃣":
case "3":
case "👤":
genero = "Ocultado"
break
default:
return m.reply(`*RECUERDE USAR EL EMOJI NUMÉRICO, EMOJI DE GÉNERO O TEXTO NUMÉRICO PARA SELECCIONAR SU GÉNERO*`)
}}
asignarGenero(text)
user.genero = genero
if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${nombre === 0 ? 'No encontrada' : nombre}\n*❖ EDAD:*\n${edad === 0 ? 'No encontrada' : edad + ' años'}\n*❖ GENERO:*\n${genero === 0 ? 'No encontrada' : genero}\n\n*🌱 AHORA PUEDE REGISTRAR SU IDENTIDAD*\n${usedPrefix}identidad`}, {quoted: fkontak}) 
}
	
if (command == 'identidad' || command == 'identity') {
var generos = [
"Agénero", "Andrógino", "Andrógina", "Asexual", "Bigénero", "Bisexual",
"Cisgénero", "CrossDresser", "Demigénero", "Gay", "Género fluido", "Género neutro",
"Genderqueer", "Heterosexual", "Heteroflexible", "Homoflexible", "Homosexual",
"Intersexual", "Lesbiana", "Pansexual", "Pangénero", "Questioning", "Queer",
"Sapiosexual", "Transgénero", "Trigénero", "Variante/Género expansivo"
]
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4", "5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9" }
function asignarIdentidad(text) {
text = text.replace(/[\d️⃣]/g, function(match) {
return emojiANumero[match] || match
})
var numero = parseInt(text.replace(/[^\d]/g, ''))
if (!isNaN(numero) && numero >= 1 && numero <= generos.length) {
return generos[numero - 1]
} else {
return m.reply("*RECUERDE USAR EL EMOJI NUMÉRICO O TEXTO NUMÉRICO PARA ELEGIR SU IDENTIDAD*")
}}
let yyr = ''
yyr += `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮*
*┊ 🌱 SELECCIONE SU IDENTIDAD DE GÉNERO!!*
*┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯*\n`
generos.forEach(function (identidad, index) {
yyr += `*┊* \`\`\`[${index + 1}]\`\`\` » _${identidad}_\n`
})
yyr += `*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*`
if (!text) {
const { key } = await conn.sendMessage(m.chat, { text: yyr }, {quoted: m})	
await delay(1000)
await conn.sendMessage(m.chat, { text: yyr + `\n\n*AQUÍ UN EJEMPLO DE COMO SELECCIONAR:*\n${usedPrefix}identidad 4️⃣\n${usedPrefix}identidad 4`, edit: key })
} 
var identidadAsignada = asignarIdentidad(text)
identidad = identidadAsignada
user.identidad = identidad
pasatiempo = 0
pas1 = 0
pas2 = 0
pas3 = 0
pas4 = 0
pas5 = 0  
if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${nombre === 0 ? 'No encontrada' : nombre}\n*❖ EDAD:*\n${edad === 0 ? 'No encontrada' : edad + ' años'}\n*❖ GENERO:*\n${genero === 0 ? 'No encontrada' : genero}\n*❖ IDENTIDAD DE GÉNERO:*\n${identidad === 0 ? 'No encontrada' : identidad}\n\n❇️ AHORA REGISTRAR MIS PASATIEMPOS\n${usedPrefix}pasatiempo`}, {quoted: fkontak})
}
	
const sections = [
{ title: "❇️ SELECCIONE HASTA 5 PASATIEMPOS!!",
rows: [
{title: "👟 Acroyoga", rowId: usedPrefix + command + ' ' + text + '👟 Acroyoga' },		
{title: "🎭 Actuación", rowId: usedPrefix + command + ' ' + text + '🎭 Actuación' },	
{title: "🥋 Aikido", rowId: usedPrefix + command + ' ' + text + '🥋 Aikido' },	
{title: "🎯 Airrsoft", rowId: usedPrefix + command + ' ' + text + '🎯 Airrsoft' },
{title: "♟️ Ajedrez", rowId: usedPrefix + command + ' ' + text + '♟️ Ajedrez' },
{title: "🏔️ Alpinismo", rowId: usedPrefix + command + ' ' + text + '🏔️ Alpinismo' },
{title: "🖥️ Animación", rowId: usedPrefix + command + ' ' + text + '🖥️ Animación' },
{title: "🎉 Animador/a de Equipos", rowId: usedPrefix + command + ' ' + text + '🎉 Animador/a de Equipos' },
{title: "✏️ Anime dibujos", rowId: usedPrefix + command + ' ' + text + '✏️ Anime dibujos' },	
{title: "🐝 Apicultura", rowId: usedPrefix + command + ' ' + text + '🐝 Apicultura' },
{title: "💻 Aprender a programar", rowId: usedPrefix + command + ' ' + text + '💻 Aprender a programar' },
{title: "🌐 Aprender un idioma", rowId: usedPrefix + command + ' ' + text + '🌐 Aprender un idioma' },
{title: "💐 Arreglos florales", rowId: usedPrefix + command + ' ' + text + '💐 Arreglos florales' },
{title: "🎨 Arte", rowId: usedPrefix + command + ' ' + text + '🎨 Arte' },
{title: "🥋 Artes marciales", rowId: usedPrefix + command + ' ' + text + '🥋 Artes marciales' },
{title: "🥋 Artes marciales mixtas", rowId: usedPrefix + command + ' ' + text + '🥋 Artes marciales mixtas' },
{title: "🔭 Astrofotografía", rowId: usedPrefix + command + ' ' + text + '🔭 Astrofotografía' },
{title: "🔮 Astrología", rowId: usedPrefix + command + ' ' + text + '🔮 Astrología' },
{title: "👟 Atletismo", rowId: usedPrefix + command + ' ' + text + '👟 Atletismo' },
{title: "🩰 Ballet", rowId: usedPrefix + command + ' ' + text + '🩰 Ballet' },
{title: "💄 Belleza", rowId: usedPrefix + command + ' ' + text + '💄 Belleza' },
{title: "🏔️ Barranquismo", rowId: usedPrefix + command + ' ' + text + '🏔️ Barranquismo' },
{title: "💻 Blog", rowId: usedPrefix + command + ' ' + text + '💻 Blog' },
{title: "✏️ Bocetos", rowId: usedPrefix + command + ' ' + text + '✏️ Bocetos' },
{title: "✂️ Bordado", rowId: usedPrefix + command + ' ' + text + '✂️ Bordado' },
{title: "🎳 Bowling", rowId: usedPrefix + command + ' ' + text + '🎳 Bowling' },
{title: "🥊 Boxeo", rowId: usedPrefix + command + ' ' + text + '🥊 Boxeo' },
{title: "🏸 Bádminton", rowId: usedPrefix + command + ' ' + text + '🏸 Bádminton' },
{title: "🏀 Baloncesto", rowId: usedPrefix + command + ' ' + text + '🏀 Baloncesto' },
{title: "⚾ Béisbol", rowId: usedPrefix + command + ' ' + text + '⚾ Béisbol' },
{title: "🖋️ Caligrafía", rowId: usedPrefix + command + ' ' + text + '🖋️ Caligrafía' },
{title: "👟 Caminata", rowId: usedPrefix + command + ' ' + text + '👟 Caminata' },
{title: "🏕 Camping", rowId: usedPrefix + command + ' ' + text + '🏕 Camping' },
{title: "🛶 Canoa", rowId: usedPrefix + command + ' ' + text + '🛶 Canoa' },
{title: "🎤 Canto", rowId: usedPrefix + command + ' ' + text + '🎤 Canto' }, 
{title: "🎤 Canto a capela", rowId: usedPrefix + command + ' ' + text + '🎤 Canto a capela' },
{title: "✏️ Caricaturas", rowId: usedPrefix + command + ' ' + text + '✏️ Caricaturas' },
{title: "🪚 Carpintería", rowId: usedPrefix + command + ' ' + text + '🪚 Carpintería' },
{title: "🏎️ Carreras de autos", rowId: usedPrefix + command + ' ' + text + '🏎️ Carreras de autos' },
{title: "🐎 Carreras de caballos", rowId: usedPrefix + command + ' ' + text + '🐎 Carreras de caballos' },
{title: "🛵 Carreras de motocicletas", rowId: usedPrefix + command + ' ' + text + '🛵 Carreras de motocicletas' },
{title: "❄️ Carreras de moto de nieve", rowId: usedPrefix + command + ' ' + text + '❄️ Carreras de moto de nieve' },
{title: "🚧 Carreras de obstáculos", rowId: usedPrefix + command + ' ' + text + '🚧 Carreras de obstáculos' },
{title: "🦮 Carreras de perros", rowId: usedPrefix + command + ' ' + text + '🦮 Carreras de perros' },
{title: "🛷 Carreras de trineos", rowId: usedPrefix + command + ' ' + text + '🛷 Carreras de trineos' },
{title: "♿ Carreras en silla de ruedas", rowId: usedPrefix + command + ' ' + text + '♿ Carreras en silla de ruedas' },
{title: "🗺️ Cartografía", rowId: usedPrefix + command + ' ' + text + '🗺️ Cartografía' },
{title: "🏹 Caza", rowId: usedPrefix + command + ' ' + text + '🏹 Caza' },
{title: "🚲 Ciclismo", rowId: usedPrefix + command + ' ' + text + '🚲 Ciclismo' },
{title: "🎬 Cinematografía", rowId: usedPrefix + command + ' ' + text + '🎬 Cinematografía' },
{title: "🔮 Clarividencia", rowId: usedPrefix + command + ' ' + text + '🔮 Clarividencia' },
{title: "🍳 Cocinar", rowId: usedPrefix + command + ' ' + text + '🍳 Cocinar' },
{title: "🥗 Cocina saludable", rowId: usedPrefix + command + ' ' + text + '🥗 Cocina saludable' },
{title: "🧤 Coleccionar objetos", rowId: usedPrefix + command + ' ' + text + '🧤 Coleccionar objetos' },
{title: "🗝️ Coleccionar antigüedades", rowId: usedPrefix + command + ' ' + text + '🗝️ Coleccionar antigüedades' },
{title: "💥 Coleccionar cómics", rowId: usedPrefix + command + ' ' + text + '💥 Coleccionar cómics' },
{title: "📚 Coleccionar libros", rowId: usedPrefix + command + ' ' + text + '📚 Coleccionar libros' },
{title: "🎭 Comedia", rowId: usedPrefix + command + ' ' + text + '🎭 Comedia' },
{title: "👻 Conspiración", rowId: usedPrefix + command + ' ' + text + '👻 Conspiración' },	
{title: "🍕 Comer", rowId: usedPrefix + command + ' ' + text + '🍕 Comer' },
{title: "🎵 Composición de canciones", rowId: usedPrefix + command + ' ' + text + '🎵 Composición de canciones' },
{title: "🎶 Composición de música", rowId: usedPrefix + command + ' ' + text + '🎶 Composición de música' },
{title: "🚗 Conducir", rowId: usedPrefix + command + ' ' + text + '🚗 Conducir' },
{title: "🎩 Cosplay", rowId: usedPrefix + command + ' ' + text + '🎩 Cosplay' }, 
{title: "💐 Cultivo de flores", rowId: usedPrefix + command + ' ' + text + '💐 Cultivo de flores' },
{title: "🎼 Danza", rowId: usedPrefix + command + ' ' + text + '🎼 Danza' },
{title: "🥋 Defensa personal", rowId: usedPrefix + command + ' ' + text + '🥋 Defensa personal' },
{title: "👟 Deportes extremos", rowId: usedPrefix + command + ' ' + text + '👟 Deportes extremos' },
{title: "✏️ Dibujar", rowId: usedPrefix + command + ' ' + text + '✏️ Dibujar' },
{title: "✏️ Dibujar en 3D", rowId: usedPrefix + command + ' ' + text + '✏️ Dibujar en 3D' },
{title: "💤 Dormir", rowId: usedPrefix + command + ' ' + text + '💤 Dormir' },
{title: "👋 Estar en YouTube", rowId: usedPrefix + command + ' ' + text + '👋 Estar en YouTube' },
{title: "👋 Estar en TikTok", rowId: usedPrefix + command + ' ' + text + '👋 Estar en TikTok' },
{title: "👋 Estar en Facebook", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Facebook' },	
{title: "👋 Estar en Facebook Messenger", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Facebook Messenger' },
{title: "👋 Estar en Whatsapp", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Whatsapp' },	
{title: "👋 Estar en Instagram", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Instagram' },
{title: "👋 Estar en Twitter", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Twitter' },
{title: "👋 Estar en Pinterest", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Pinterest' },
{title: "👋 Estar en Telegram", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Telegram' },
{title: "👋 Estar en WeChat", rowId: usedPrefix + command + ' ' + text + '👋 Estar en WeChat' },
{title: "👋 Estar en Snapchat", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Snapchat' },
{title: "👋 Estar en Reddit", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Reddit' },	
{title: "📝 Escritura creativa", rowId: usedPrefix + command + ' ' + text + '📝 Escritura creativa' },
{title: "🎧 Escuchar música", rowId: usedPrefix + command + ' ' + text + '🎧 Escuchar música' },
{title: "📘 Estudiar", rowId: usedPrefix + command + ' ' + text + '📘 Estudiar' },
{title: "👻 Fantasmas y/o apariciones", rowId: usedPrefix + command + ' ' + text + '👻 Fantasmas y/o apariciones' },
{title: "👟 Fitness", rowId: usedPrefix + command + ' ' + text + '👟 Fitness' },
{title: "📸 Fotografía", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía' },
{title: "📸 Fotogénico/a", rowId: usedPrefix + command + ' ' + text + '📸 Fotogénico/a' },	
{title: "📸 Fotografía de moda", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de moda' },
{title: "📸 Fotografía de juegos", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de juegos' },
{title: "📸 Fotografía de animales", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de animales' },
{title: "📸 Fotografía de paisajes", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de paisajes' },
{title: "📸 Fotografía blanco y negro", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía blanco y negro' },
{title: "⚽ Fútbol", rowId: usedPrefix + command + ' ' + text + '⚽ Fútbol' },
{title: "🏈 Fútbol americano", rowId: usedPrefix + command + ' ' + text + '🏈 Fútbol americano' },
{title: "🎮 Gamer", rowId: usedPrefix + command + ' ' + text + '🎮 Gamer' },	
{title: "🏊 Gimnasia acuática", rowId: usedPrefix + command + ' ' + text + '🏊 Gimnasia acuática' },
{title: "🏒 Hockey", rowId: usedPrefix + command + ' ' + text + '🏒 Hockey' },
{title: "✏️ Ilustración", rowId: usedPrefix + command + ' ' + text + '✏️ Ilustración' },
{title: "🎤 Ir a concietos", rowId: usedPrefix + command + ' ' + text + '🎤 Ir a concietos' },
{title: "👟 Ir al gimnasio", rowId: usedPrefix + command + ' ' + text + '👟 Ir a gimnasio' },
{title: "🛍️ Ir de compra", rowId: usedPrefix + command + ' ' + text + '🛍️ Ir de compra' },
{title: "🎮 Juegos VR/AR", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos VR/AR' },
{title: "🎮 Juegos de rol", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de rol' },
{title: "🎮 Juegos de acción", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de acción' },
{title: "🎮 Juegos de pelea", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de pelea' },
{title: "🎮 Juegos de arcade", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de arcade' },
{title: "🎮 Juegos de aventura", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de aventura' },
{title: "🎮 Juegos de estrategia", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de estrategia' },
{title: "🎮 Juegos de simulación", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de simulación' },
{title: "🎮 Juegos de deportes", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de deportes' },
{title: "🎮 Juegos de carreras", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de carreras' },
{title: "🎮 Juegos de battle royale", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de battle royale' },
{title: "🎮 Juegos clásicos", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos clásicos' },
{title: "🃏 Juegos de cartas", rowId: usedPrefix + command + ' ' + text + '🃏 Juegos de cartas' },
{title: "🎲 Juegos de mesa", rowId: usedPrefix + command + ' ' + text + '🎲 Juegos de mesa' },
{title: "📖 Leer", rowId: usedPrefix + command + ' ' + text + '📖 Leer' },
{title: "👟 Lucha libre", rowId: usedPrefix + command + ' ' + text + '👟 Lucha libre' },
{title: "💄 Maquillaje artístico", rowId: usedPrefix + command + ' ' + text + '💄 Maquillaje artístico' },
{title: "😆 Memes", rowId: usedPrefix + command + ' ' + text + '😆 Memes' },
{title: "💭 Meditación", rowId: usedPrefix + command + ' ' + text + '💭 Meditación' },
{title: "🖥️ Modelado 3D", rowId: usedPrefix + command + ' ' + text + '🖥️ Modelado 3D' },
{title: "✨ Observación de estrellas", rowId: usedPrefix + command + ' ' + text + '✨ Observación de estrellas' },
{title: "🌕 Observación de la luna", rowId: usedPrefix + command + ' ' + text + '🌕 Observación de la luna' },
{title: "☁ Observación de las nubes", rowId: usedPrefix + command + ' ' + text + '☁ Observación de las nubes' },
{title: "📄 Origami", rowId: usedPrefix + command + ' ' + text + '📄 Origami' },
{title: "🎣 Pesca", rowId: usedPrefix + command + ' ' + text + '🎣 Pesca' },
{title: "🎨 Pintura", rowId: usedPrefix + command + ' ' + text + '🎨 Pintura' },
{title: "🎙️ Podcasts", rowId: usedPrefix + command + ' ' + text + '🎙️ Podcasts' },
{title: "📝 Poesía", rowId: usedPrefix + command + ' ' + text + '📝 Poesía' },
{title: "🎾 Tenis", rowId: usedPrefix + command + ' ' + text + '🎾 Tenis' },
{title: "🏓 Tenis de mesa", rowId: usedPrefix + command + ' ' + text + '🏓 Tenis de mesa' },
{title: "🎵 Toco un instrumento", rowId: usedPrefix + command + ' ' + text + '🎵 Toco un instrumento' },	
{title: "🎹 Tocar el piano", rowId: usedPrefix + command + ' ' + text + '🎹 Tocar el piano' },
{title: "🎸 Tocar la guitarra", rowId: usedPrefix + command + ' ' + text + '🎸 Tocar la guitarra' },
{title: "🎻 Tocar el violín", rowId: usedPrefix + command + ' ' + text + '🎻 Tocar el violín' },
{title: "🎷 Tocar el saxofón", rowId: usedPrefix + command + ' ' + text + '🎷 Tocar el saxofón' },
{title: "🎺 Tocar la trompeta", rowId: usedPrefix + command + ' ' + text + '🎺 Tocar la trompeta' },
{title: "🪘 Tocar el tamboril", rowId: usedPrefix + command + ' ' + text + '🪘 Tocar el tamboril' },
{title: "🥁 Tocar el tambor", rowId: usedPrefix + command + ' ' + text + '🥁 Tocar el tambor' },
{title: "📺 Ver televisión", rowId: usedPrefix + command + ' ' + text + '📺 Ver televisión' },
{title: "🌎 Viajar", rowId: usedPrefix + command + ' ' + text + '🌎 Viajar' },
{title: "🎒 Viajar de mochilero/a", rowId: usedPrefix + command + ' ' + text + '🎒 Viajar de mochilero/a' },
{title: "🫂 Visitar amigos", rowId: usedPrefix + command + ' ' + text + '🫂 Visitar amigos' },
{title: "📹 Vlog", rowId: usedPrefix + command + ' ' + text + '📹 Vlog' },
{title: "🏐 Voleibol", rowId: usedPrefix + command + ' ' + text + '🏐 Voleibol' },
{title: "👟 Yoga", rowId: usedPrefix + command + ' ' + text + '👟 Yoga' },
{title: "🎼 Ópera", rowId: usedPrefix + command + ' ' + text + '🎼 Ópera' }]},]
const listMessage = {
text: `👉 *SELECCIONE SUS PASATIEMPOS POR FAVOR*\n*❖ NOMBRE:* ${nombre === 0 ? 'No encontrada' : nombre}\n*❖ EDAD:* ${edad === 0 ? 'No encontrada' : edad}\n*❖ GÉNERO:* ${genero === 0 ? 'No encontrada' : genero}\n*❖ IDENTIDAD DE GÉNERO:* ${identidad === 0 ? 'No encontrada' : identidad}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "❇️ MI PASATIEMPO ❇️",
sections
}
if (command == 'pasatiempo' || command == 'hobby') {
//if (typeof pas1 === 'string') return conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m) 
if (!text) return conn.sendMessage(m.chat, {text: eg + `*👉SELECCIONE SUS PASATIEMPOS POR FAVOR :*\n❖ EJEMPLO: ${usedPrefix}pasatiempo 💻 Aprender a programar\n${usedPrefix}pasatiempo 👋 Estar en Whatsapp\n${usedPrefix}pasatiempo escucha musica\n❖ PUEDE PONER HASTA 5 PASATIEMPOS\n*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n*❖ NOMBRE:* ${nombre}\n*❖ EDAD:* ${edad === 0 ? 'No encontrada' : edad}\n*❖ GÉNERO:* ${genero === 0 ? 'No encontrada' : genero}\n*❖ IDENTIDAD DE GÉNERO:* ${identidad === 0 ? 'No encontrada' : identidad}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`}, {quoted: fkontak})
//conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
pas1 = text.trim()
pasatiempo = pas1
user.pasatiempo = pasatiempo
global.db.data.users[m.sender]['registroC'] = true
conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${pasatiempo === 0 ? 'No encontrada' : pasatiempo}*\nPuede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n❇️ AGREGAR OTRO PASATIEMPO\n${usedPrefix}pas2\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pasatiempo === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas2'], [`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}	
	
if (command == 'pas2') {
if (typeof pas2 === 'string') return conn.sendMessage(m.chat, {text: fg + `*NO PUEDE CAMBIAR DE PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\nUna vez seleccionado no puede ser modificado\n\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, {text: eg + `👉 *SELECCIONE SUS PASATIEMPOS POR FAVOR :*\n❖ EJEMPLO: ${usedPrefix}pasatiempo 💻 Aprender a programar\n${usedPrefix}pasatiempo 👋 Estar en Whatsapp\n${usedPrefix}pasatiempo escucha musica\n❖ PUEDE PONER HASTA 5 PASATIEMPOS\n\n*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n*❖ NOMBRE:* ${nombre}\n*❖ EDAD:* ${edad === 0 ? 'No encontrada' : edad}\n*❖ GÉNERO:* ${genero === 0 ? 'No encontrada' : genero}\n*❖ IDENTIDAD DE GÉNERO:* ${identidad === 0 ? 'No encontrada' : identidad}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`}, {quoted: fkontak})
//conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
if (pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*' 
global.db.data.users[m.sender]['registroC'] = true
pas2 = text.trim()	
pasatiempo = pas1 + ', ' + pas2
user.pasatiempo = pasatiempo
conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${pas2 === 0 ? 'No encontrada' : pasatiempo}*\nPuede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n❇️ AGREGAR OTRO PASATIEMPO\n${usedPrefix}pas3\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas2 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas3'], [`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas3') {
if (typeof pas3 === 'string') return conn.sendMessage(m.chat, {text: fg + `*NO PUEDE CAMBIAR DE PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\nUna vez seleccionado no puede ser modificado\n\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return //conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
if (pas2 == text || pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas3 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3
user.pasatiempo = pasatiempo
conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${pas3 === 0 ? 'No encontrada' : pasatiempo}*\nPuede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n❇️ AGREGAR OTRO PASATIEMPO\n${usedPrefix}pas4\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas3 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas4'], [`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas4') {
if (typeof pas4 === 'string') return conn.sendMessage(m.chat, {text: fg + `*NO PUEDE CAMBIAR DE PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\nUna vez seleccionado no puede ser modificado\n\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return //conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
if (pas3 == text || pas2 == text || pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas4 = text.trim()	
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4
user.pasatiempo = pasatiempo
conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${pas4 === 0 ? 'No encontrada' : pasatiempo}*\nPuede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n❇️ AGREGAR OTRO PASATIEMPO\n${usedPrefix}pas5\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas4 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas5'], [`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas5') {
if (typeof pas5 === 'string') return conn.sendMessage(m.chat, {text: fg + `*NO PUEDE CAMBIAR DE PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\nUna vez seleccionado no puede ser modificado\n\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, fg + '*NO PUEDE CAMBIAR DE PASATIEMPO*', 'Una vez seleccionado no puede ser modificado\n\n' + wm, null, [[`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
if (pas4 == text || pas3 == text || pas2 == text || pas1 == text) throw fg + '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true	
pas5 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4 + ', ' + pas5
user.pasatiempo = pasatiempo
conn.sendMessage(m.chat, {text: eg + `*GENIAL!! SE HA AGREGADO UN PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${pasatiempo === 0 ? 'No encontrada' : pasatiempo}*\nPuede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n❇️ AGREGAR OTRO PASATIEMPO\n${usedPrefix}pas2\n⏱️ FINALIZAR REGISTRO\n${usedPrefix}finalizar`}, {quoted: fkontak})
//conn.sendButton(m.chat, eg + '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n' + `${pas5 === 0 ? 'No encontrada' : pasatiempo}`, 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
if (user.premLimit === 0) {	
tiempo = user.premLimit === 1 ? 0 : 10800000 //3 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
}
fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = nombre === 0 ? 'No encontrada' : nombre + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.descripcion = bio
user.age = edad === 0 ? 'No encontrada' : edad >= 18 ? edad += ' Años *||* ' + '(Persona Adulta)' : edad += ' Años *||* ' + '(Persona Joven)'
user.genero = genero === 0 ? 'No encontrada 👤' : genero == 'Ocultado' ? `${genero} 🕶️` : genero == 'Mujer' ? `${genero} 🚺` : genero == 'Hombre' ? `${genero} 🚹` : 'No encontrada 👤'
user.identidad = identidad === 0 ? 'No encontrada' : identidad
user.pasatiempo = pasatiempo === 0 ? 'No encontrada' : pasatiempo
}else{
fecha = `${week}, ${date} || `
hora = `${time}`
user.tiempo = fecha + hora
user.name = nombre === 0 ? 'No encontrada' : nombre + 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ'
user.age = edad === 0 ? 'No encontrada' : `${edad >= 18 ? edad += ' Años *||* ' + '(Persona Adulta)' : edad += ' Años *||* ' + '(Persona Joven)'}`
user.descripcion = bio	
}
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
registrando = false
clearInterval(intervalId)
		
/*let caption = `
🍃 \`\`\`VERIFICACIÓN EXITOSA\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*
👑 *REGISTRADO POR*
❱❱ ${wm}
📑 *TIPO DE REGISTRO* 
❱❱ ${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}
⌛ *FECHA/HORA*
❱❱ ${user.tiempo} 
🛅 *CÓDIGO DE REGISTRO*
❱❱ ${sn}
✅ *INSIGNIA DE VERIFICACIÓN*
❱❱   *${user.registered === true ? ' ͜͡𝘴𝘬' : ''}*
✨ *NOMBRE* 
❱❱ ${user.name}
👀 *DESCRIPCIÓN*
❱❱ ${user.descripcion}
🔢 *EDAD* 
❱❱ ${user.age}
${user.registroC === true ? `☘️ *GENERO*
❱❱ ${user.genero}
🌱 *IDENTIDAD DE GÉNERO*
❱❱ ${user.identidad}
❇️ *PASATIEMPO(S)*
❱❱ ${user.pasatiempo}
${user.premLimit === 1 ? '' : `🎟️ *PREMIUM*
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +3 HORAS || ${user.premiumTime - now} ms`}`}   ` : ''} 
`.trim()*/
await m.reply('🍄 ```VERIFICANDO DATOS...```')
await conn.reply(m.chat, `🍃 \`\`\`VERIFICACIÓN EXITOSA\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*
👑 *REGISTRADO POR*
❱❱ ${wm}
📑 *TIPO DE REGISTRO* 
❱❱ ${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}
⌛ *FECHA/HORA*
❱❱ ${user.tiempo} 
🛅 *CÓDIGO DE REGISTRO*
❱❱ ${sn}
✅ *INSIGNIA DE VERIFICACIÓN*
❱❱   *${user.registered === true ? ' ͜͡𝘴𝘬' : ''}*
✨ *NOMBRE* 
❱❱ ${user.name}
👀 *DESCRIPCIÓN*
❱❱ ${user.descripcion}
🔢 *EDAD* 
❱❱ ${user.age}
${user.registroC === true ? `☘️ *GENERO*
❱❱ ${user.genero}
🌱 *IDENTIDAD DE GÉNERO*
❱❱ ${user.identidad}
❇️ *PASATIEMPO(S)*
❱❱ ${user.pasatiempo}
${user.premLimit === 1 ? '' : `🎟️ *PREMIUM*
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +3 HORAS || ${user.premiumTime - now} ms`}`}   ` : ''}`, fkontak,  m)
//await conn.sendButton(m.chat, caption, user.registroC === true ? 'Si elimina su registro se eliminará los datos e insignia y dejara de tener acceso a los comandos con registro\n\nTendrá Premium solo la premira vez que se registre si llega a volver a registrarse no tendrá premium a excepción si compra usando #pase premium\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}` : 'Si elimina su registro se eliminará los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}`, [['𝘼𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤!! ✅', '/profile']], m)
await m.reply(`${sn}`)	
}}
handler.command = ['verify', 'verificar', 'register', 'registrar', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'identidad', 'pasatiempo', 'hobby', 'identity', 'finalizar', 'pas2', 'pas3', 'pas4', 'pas5']  ///^(verify|verificar|reg(ister)?)$/i
handler.private = true 
export default handler
function pickRandom(list) { 
return list[Math.floor(Math.random() * list.length)]} 
  
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
