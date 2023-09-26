import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} 𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} Shark*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊* ⊱💚⊱╮\n🫡 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${text}`.trim(), m)
/*conn.sendHydrated(m.chat, `🫡 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝙎𝙝𝙖𝙧𝙠𝘽𝙤𝙩', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🎭 𝙈𝙚𝙣𝙪', `.menu`],  
], m)*/
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 500
handler.money = 50
export default handler
