let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
   if (!args[0]) return m.reply('masukkan text1 dan text2\n\nContoh: .lionlogo ren|funix')
   m.reply('*Wait Ngab*\nProses...')
  let res = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=Papah-Chan&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'lionlogo.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['lionlogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(lionlogo)$/i

module.exports = handler
