import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙈𝘼𝙉𝙂𝘼`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, chapters, volumes, members, score, synopsis, url, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/manga/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`𝙏𝙄𝙏𝙐𝙇𝙊 
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘾𝘼𝙋𝙄𝙏𝙐𝙇𝙊𝙎
❣ ${chapters}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙑𝙊𝙇𝙐𝙈𝙀𝙉𝙀𝙎
❣ ${volumes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙁𝙀𝘾𝙃𝘼 𝘿𝙀 𝙄𝙉𝙄𝘾𝙄𝙊
❣ ${start_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙁𝙀𝘾𝙃𝘼 𝙁𝙄𝙉𝘼𝙇
❣ ${end_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙐𝙉𝙏𝘼𝙅𝙀
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙄𝙉𝙊𝙋𝙎𝙄𝙎 𝙀𝙉𝙂𝙇𝙄𝙎𝙃
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙉𝙇𝘼𝘾𝙀
❣ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `🎭 *Infórmate sobre las Novedades y recuerda tener la última versión.*`
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(mangainfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
