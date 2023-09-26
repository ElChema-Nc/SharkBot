let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*`
if (text.length < 8) throw `${fg} 🫡 *Mínimo 10 caracteres para hacer El Reporte.*`
if (text.length > 1000) throw `${fg} 😛 *Máximo 1000 caracteres para hacer El Reporte.*`
let teks = `*╭━━[ 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 ]━━━⬣*\n*┃*\n*┃* *𝙉𝙐𝙈𝙀𝙍𝙊*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *𝙈𝙀𝙉𝙎𝘼𝙅𝙀*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
//conn.reply('34623289459@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('34623289459@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊* ⊱💚⊱╮\n\n*El reporte ha sido enviado a mí Creador. Tendrá una respuesta pronto. De ser Falso será Ignorado el reporte.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
