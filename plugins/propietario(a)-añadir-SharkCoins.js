let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝙎𝙃𝘼𝙍𝙆𝘾𝙊𝙄𝙉𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
let sharkcoins = parseInt(txt)
let money = sharkcoins
let pjk = Math.ceil(sharkcoins * pajak)
money += pjk
if (money < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝙎𝙃𝘼𝙍𝙆𝘾𝙊𝙄𝙉𝙎 𝙀𝙎 *1*`
let users = global.db.data.users
//let users = global.db.data.users[who]
users[who].money += sharkcoins
m.reply(`╭━━━[ 𝙎𝙃𝘼𝙍𝙆𝘾𝙊𝙄𝙉𝙎 🦈 ]━━━⬣\n┃\n┃ღ *PARA:*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${sharkcoins} sharkCoin(s)* 🦈\n┃\n╰━━━━━━━━━━━━━━⬣\n\n${wm}`)}
/*conn.sendHydrated(m.chat, `╭━━━[ 𝙎𝙃𝘼𝙍𝙆𝘾𝙊𝙄𝙉𝙎 🦈 ]━━━⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${sharkcoins} SharkCoin(s)* 🦈\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙎𝙝𝙖𝙧𝙠𝘽𝙤𝙩', null, null, [
['𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 ☠️', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}*/
handler.help = ['addgb <@user>']
handler.tags = ['sharkcoins']
handler.command = ['añadirsharkcoins', 'añadirshark', 'añadircoins', 'darsharkcoins', 'darshark', 'darcoins'] 
handler.group = true
handler.rowner = true
export default handler
