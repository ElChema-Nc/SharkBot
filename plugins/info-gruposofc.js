let media = './media/menus/Menu3.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🗿 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝙎𝙝𝙖𝙧𝙠-𝘽𝙤𝙩ㅤ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 🗿

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🗿 *Versión de ${sk}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${sk}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
🗿 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🫠 *https://chat.whatsapp.com/JO5LstGfk6RBccr0gjzNwI*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*`
await conn.sendFile(m.chat, media, 'shark.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝗦𝗛𝗔𝗥𝗞-𝗕𝗢𝗧 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/ElChema-Nc/Shark-Bot', '𝙎𝙝𝙖𝙧𝙠-𝘽𝙤𝙩ㅤ🦈', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassk'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|grupossharkbot|sharkbotgrupos|gruposdesharkbot|groupofc|grupossk|gruposk|groupsk$/i
handler.exp = 33

export default handler
