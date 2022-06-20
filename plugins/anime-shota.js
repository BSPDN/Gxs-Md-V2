let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.lolhuman.xyz/api/random/shota?apikey=Papah-Chan`
  conn.sendButtonImg(m.chat, res, wm2, 'NEXT', 'Shota', '.shota', m)
}
handler.help = ['shota'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(shota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

