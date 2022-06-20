let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=Papah-Chan`
  conn.sendButtonImg(m.chat, res, wm2, 'NEXT', 'NEXT', '.yaoi', m)
}
handler.help = ['yaoi'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(yaoi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

