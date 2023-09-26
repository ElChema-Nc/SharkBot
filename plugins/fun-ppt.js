let timeout = 60000
let poin = 600 
let poin_lose = -100
let poin_bot = 200
global.suit = global.suit ? global.suit : {}
let handler = async (m, { conn, usedPrefix, command, text }) => {
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()}𝙏𝙀𝙍𝙈𝙄𝙉𝘼 𝙏𝙐 𝙋𝘼𝙍𝙏𝙄𝘿𝘼 𝘼𝙉𝙏𝙀𝙎 𝘿𝙀 𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙊𝙏𝙍𝘼`
let textquien = `${lenguajeGB['smsAvisoMG']()}𝘼 𝙌𝙐𝙄𝙀𝙉 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝘿𝙀𝙎𝘼𝙁𝙄𝘼𝙍 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n${usedPrefix + command} @${global.prems}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {quoted: fkontak }, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `${lenguajeGB['smsAvisoIIG']()}𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝘼 𝙇𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝘿𝙀𝙎𝘼𝙁𝙄𝘼𝙍 𝘼 𝙐𝙉 𝙀𝙎𝙏𝘼 𝙅𝙐𝙂𝘼𝙉𝘿𝙊 𝙊𝙏𝙍𝘼 𝙋𝘼𝙍𝙏𝙄𝘿𝘼, 𝙀𝙎𝙋𝙀𝙍𝙀 𝘼 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀 𝘿𝙀 𝙅𝙐𝙂𝘼𝙍`
let id = 'suit_' + new Date() * 1
let caption = `${lenguajeGB['smsAvisoIIG']()}🎮👾 𝙂𝘼𝙈𝙀𝙎 - 𝙋𝙑𝙋 - 𝙂𝘼𝙈𝙀𝙎 🎮👾\n\n@${m.sender.split`@`[0]} 𝘿𝙀𝙎𝘼𝙁𝙄𝘼 𝘼 @${m.mentionedJid[0].split`@`[0]} 𝘼 𝙐𝙉 (𝙋𝙑𝙋) 𝘿𝙀 𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n_*Escribe (aceptar) para aceptar*_\n_*Escribe (rechazar) para rechazar*_`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendMessage(m.chat, { text: caption }, {mentions: conn.parseMention(caption)}),
//await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}⏳ 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝙀𝙎𝙋𝙀𝙍𝘼 𝙁𝙄𝙉𝘼𝙇𝙄𝙕𝘼𝘿𝙊, 𝙀𝙇 𝙋𝙑𝙋 𝙎𝙀 𝘾𝘼𝙉𝘾𝙀𝙇𝘼 𝙋𝙊𝙍 𝙁𝘼𝙇𝙏𝘼 𝘿𝙀 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼`, m)
  
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt|suitpvp)$/i
handler.group = true
handler.game = true
handler.register = true
export default handler
