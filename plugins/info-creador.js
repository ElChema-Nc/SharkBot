let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let pp = sharkVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let insta = `https://www.instagram.com/1alvarez_jose8`
  let teksnomor = `
• @${wm.split`@`[0]} •
------- ${wm} -------
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let teksbio = `𝙎𝙝𝙖𝙧𝙠-𝘽𝙤𝙩ㅤ🦈
*Wa.me/50585826826*

𝙀𝙡ㅤ𝘾𝙝𝙚𝙢𝙖ㅤ🔱
*wa.me/34671660629*

𝙊𝙬𝙣𝙚𝙧 (𝙊𝙨𝙤) 💻 *2*
*wa.me/50578213790*
*---------------------*

𝙀𝙇 𝘾𝙃𝙀𝙈𝘼 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
*${asistencia}*`
  let teks = ' '
const sections = [
   {
	title: `PROPIETARIO/OWNER`,
	rows: [
	    {title: "📱 • NOMBRE", rowId: ".owner nombre"},
	{title: "🙌 • NUMERO", rowId: ".owner bio"},
	{title: "🌐 • CUENTAS OFICIALES", rowId: ".cuentassk"},
	{title: "🗿 • GRUPOS", rowId: ".grupos"},
	{title: "🌎 • SCRIPT", rowId: ".sc"},
	]
    },{
	title: `–––––––·• APOYA AL BOT –––––––·•`,
	rows: [
	{title: "🤖 • INSTALARBOT", rowId: ".instalarbot"},
	{title: "🌟 • PREMIUM", rowId: ".pasepremium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `╭━━━✦ *OWNER ✦━━━━⬣
┃დ HOLA 👋 ${name}
┃≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋
┃${wm}
╰━━━━━✦ *${vs}* ✦━━━━⬣`,
  buttonText: "HAGA CLICK AQUI",
  sections
}

  try {
    if (/(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nombre':
          await conn.reply(m.chat, `𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝘽𝙊𝙏 : ${sk} 🗿`, fkontak,  m)
         // conn.reply(m.chat, "Nombre del bot : Shark-Bot 🦈", m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
             await conn.sendFile(m.chat, sharkImg.getRandom(), 'shark.jpg', teksbio, fkontak)
         // conn.sendButton(m.chat, teksbio, fkontak, pp, [`☘️ 𝗠 𝗘 𝗡 𝗨`, `.menu`], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return  await conn.sendFile(m.chat, sharkImg.getRandom(), 'shark.jpg', teksbio, fkontak)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
