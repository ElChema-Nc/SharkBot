import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Itzy")
let json = res.data
let shark = json.url
conn.sendFile(m.chat, shark, 'error.jpg', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`, wm, shark, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i
export default handler
