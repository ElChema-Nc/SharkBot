var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = sharkImg.getRandom()	
const cat = `𝙎𝙝𝙖𝙧𝙠𝘽𝙤𝙩
*Wa.me/50585826826*

𝙀𝙡ㅤ𝘾𝙝𝙚𝙢𝙖ㅤ🔱
*wa.me/34623289459*
*---------------------*

*CENTER SHARKBOT*
*ja82783643@gmail.com*

𝙎𝙃𝘼𝙍𝙆 𝘽𝙊𝙏 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*`

await conn.sendFile(m.chat, pp, 'shark.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
