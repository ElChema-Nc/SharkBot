/* 
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
try{
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
      
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista2'](), rowId: `${usedPrefix}creador`},
{title: lenguajeGB['smsLista3'](), rowId: `${usedPrefix}ping`},
{title: lenguajeGB['smsLista4'](), rowId: `${usedPrefix}infomenu`},
{title: lenguajeGB['smsLista5'](), rowId: `${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista6'](), rowId: `${usedPrefix}instalarbot`},
{title: lenguajeGB['smsLista7'](), rowId: `${usedPrefix}serbot`},
{title: lenguajeGB['smsLista8'](), rowId: `${usedPrefix}términos`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista9']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista10'](), rowId: `${usedPrefix}top`},
{title: lenguajeGB['smsLista11'](), rowId: `${usedPrefix}listprem`},
{title: lenguajeGB['smsLista12'](), rowId: `${usedPrefix}pase premium`},
{title: lenguajeGB['smsLista13'](), rowId: `${usedPrefix}inventario 3`},
{title: lenguajeGB['smsLista14'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeGB['smsLista15'](), rowId: `${usedPrefix}buy`},
{title: lenguajeGB['smsLista16'](), rowId: `${usedPrefix}inventory`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista17']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista18'](), rowId: `${usedPrefix}descargasmenu`},
{title: lenguajeGB['smsLista19'](), rowId: `${usedPrefix}buscarmenu`},
{title: lenguajeGB['smsLista20'](), rowId: `${usedPrefix}convertidormenu`},
{title: lenguajeGB['smsLista21'](), rowId: `${usedPrefix}audioefectomenu`},
{title: lenguajeGB['smsLista21_1'](), rowId: `${usedPrefix}herramientasmenu`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista22']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista23'](), rowId: `${usedPrefix}juegosmenu`},
{title: lenguajeGB['smsLista24'](), rowId: `${usedPrefix}audios`},
{title: lenguajeGB['smsLista25'](), rowId: `${usedPrefix}stickermenu`},
{title: lenguajeGB['smsLista26'](), rowId: `${usedPrefix}makermenu`},
{title: lenguajeGB['smsLista27'](), rowId: `${usedPrefix}menulogos2`},
{title: lenguajeGB['smsLista28'](), rowId: `${usedPrefix}randommenu`},
{title: lenguajeGB['smsLista29'](), rowId: `${usedPrefix}hornymenu`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista30']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista31'](), rowId: `${usedPrefix}grupomenu`},
{title: lenguajeGB['smsLista32'](), rowId: `${usedPrefix}listas`},
{title: lenguajeGB['smsLista33'](), rowId: `${usedPrefix}on`},
{title: lenguajeGB['smsLista34'](), rowId: `${usedPrefix}ownermenu`}
]}]

const listMessage = {
text: `╭━⊰ *${ucapan()}* ⊱━⬣
┃
┃ *︾ U S U A R I O ︾*
┃
┃»» *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : name}*
┃»» *Mi estado* ➺ ${typeof user.miestado !== 'string' ? '_#miestado || Estado no asignado_' : '_Me siento ' + user.miestado + '_'}
┃»» *Registrado ➺ ${user.registered === true ? '✅' : '❌ _#verificar_'}* 
┃»» *Premium ➺ ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}*
┃
┃ *︾ M E N U ︾*
┃
┃✜ *${lenguajeGB['smsVersion']()}* 
┃➺ \`\`\`${vs}\`\`\`
┃✜ *Tipo de registro* 
┃➺ ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '_' + usedPrefix + 'verificar_'} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeGB['smsTotalUsers']()}* 
┃➺ _${Object.keys(global.db.data.users).length}_
┃✜ *Registrados* 
┃➺ _${rtotalreg}/${totalreg}_
┃✜ *${lenguajeGB['smsMode']()}* 
┃➺ _${global.opts['self'] ? `*${lenguajeGB['smsModePrivate']()}*` : `*${lenguajeGB['smsModePublic']()}*`}_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeGB['smsTime']()}* 
┃➺ _${time}_ 	    
┃✜ *${lenguajeGB['smsUptime']()}* 
┃➺ _${uptime}_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeGB['smsBanChats']()}* 
┃➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
┃✜ *${lenguajeGB['smsBanUsers']()}* 
┃➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
┃
╰━⊰ *${wm}* ⊱━⬣\n
*»» ✨ Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
*»» ${lenguajeGB['smsPareja']()} ➺ ${pareja ? `${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n»» *Sub Bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}`,
footer: `*↓ TRUSTED LINK* ✅
${readMore}${redesMenu.getRandom()}`, //${name} ${ucapan()} //lenguajeGB['smsMenu']()
title: null,
buttonText: `${lenguajeGB['smsListaMenu']()}`, 
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})


} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `${lenguajeGB['smsSaludo']()}`
  if (time >= 4) {
    res = `${lenguajeGB['smsDia']()}`
  }
  if (time >= 11) {
    res = `${lenguajeGB['smsTarde']()}`
  }
  if (time >= 15) {
    res = `${lenguajeGB['smsTarde2']()}`
  }
  if (time >= 17) {
    res = `${lenguajeGB['smsNoche']()}`
  }
  return res
} 
*/
