let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️ ESPERA ${msToTime(time - new Date())}\n NO USER ESTE COMANDO CON UN MAL USO*`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘼𝙇 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙃𝘼𝙍𝘼 𝙎𝙋𝘼𝙈\n*❊ ${usedPrefix + command} number|text|amount*\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*❊ ${usedPrefix + command} 999999999999|Hola!!|35*`
if (!pesan) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘼𝙇 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙃𝘼𝙍𝘼 𝙎𝙋𝘼𝙈\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*❊ ${usedPrefix + command} 999999999999|Hola!!|35*`
if (jumlah && isNaN(jumlah)) throw `𝙀𝙉 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙄𝙍 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘼𝙇 𝙌𝙐𝙀 𝙎𝙀 𝙇𝙀 𝙃𝘼𝙍𝘼 𝙎𝙋𝘼𝙈\n*❊ ${usedPrefix + command} numero|texto|cantidad*\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*❊ ${usedPrefix + command} 999999999999|Hola!!|35*`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw `${fg}𝙈𝙄𝙉𝙄𝙈𝙊 *10* 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎 𝙋𝘼𝙍𝘼 𝙃𝘼𝘾𝙀𝙍 𝙀𝙇 𝙎𝙋𝘼𝙈`
await delay(10000)
await m.reply(`${eg}𝙀𝙇 𝙎𝙋𝘼𝙈 𝙎𝙀 𝙀𝙉𝙑𝙄𝙊 *${fixedJumlah}* 𝙑𝙀𝘾𝙀𝙎 𝘼 *${nomor}*`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 16
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
