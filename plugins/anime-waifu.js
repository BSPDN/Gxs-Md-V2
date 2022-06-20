let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, json.url, wm2, 'NEXT', 'WAIFU', '.waifu', m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = false

module.exports = handler
