let handler = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙀𝙎𝙋𝙀𝙍𝙀, 𝙎𝙐 𝘿𝘼𝘿𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝙉𝘿𝙊`, fkontak, m)
conn.sendFile(m.chat, dir, 'error.webp', null, m, { asSticker: true })}
handler.command = ['dado', 'dados', 'dadu'] 
export default handler
