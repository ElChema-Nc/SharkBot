import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙎𝙐 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝘿𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Hoy va llover?*`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
if (json.success)
  
m.reply(`╭━〔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 〕━⬣  
⁉️ 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼: 
😐 ${text}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 | 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀
😏 : ${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 

//conn.sendHydrated(m.chat, pre, wm, null, md, '𝙎𝙝𝙖𝙧𝙠𝘽𝙤𝙩', null, null, [
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 🔮', `${usedPrefix + command} ${text}`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
//], m, null, m.mentionedJid ? {
//mentions: m.mentionedJid } : {}) 
}
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
