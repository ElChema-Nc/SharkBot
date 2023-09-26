let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tagñ*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝙋𝘼𝙍𝘼 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].limit += dmt
m.reply(`╭[ 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 💎 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${dmt} Diamante(s)* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`)}
/*conn.sendHydrated(m.chat, `╭[ 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 💎 ]⬣\n┃\n┃ღ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ*\n┃ღ *${dmt} Diamante(s)* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙎𝙝𝙖𝙧𝙠𝘽𝙤𝙩', null, null, [
['𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 ☠️', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}*/
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirdiamantes', 'dardiamantes', 'dardiamante'] 
handler.group = true
handler.rowner = true
export default handler
