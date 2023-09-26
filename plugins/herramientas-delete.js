import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let grupos = [nna]
let shark = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🦈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(shark.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗦𝘂𝗽𝗲𝗿 𝗦𝗵𝗮𝗿𝗸𝗕𝗼𝘁 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let texto = `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙀𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀`
	
if (!m.quoted) return await conn.sendButton(m.chat, wm, texto, img5, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^eliminar|del(ete)?$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
