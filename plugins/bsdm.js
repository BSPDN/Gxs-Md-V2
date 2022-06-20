let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/bdsm?apikey=7d604daa6d741d42`
  conn.sendFile(m.chat, res, 'bdsm.jpg', `wangy wangy wangy`, m, true)
}
handler.help = ['bdsm'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(bdsm)$/i
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

