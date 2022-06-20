let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
   if (!args[0]) return m.reply('masukkan text1 dan text2\n\nContoh: .ninja ren|funix')
   m.reply('*Wait Ngab*\nProses...')
  let res = `https://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=Papah-Chan&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'ninjalogo.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['ninja'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(ninja)$/i

module.exports = handler
