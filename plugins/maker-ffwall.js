let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Proses...*')
  let res = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=Papah-Chan&text=${response[0]}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['ffwall'].map(v => v + ' <teks>')
handler.tags = ['sticker', 'internet', 'maker']
handler.command = /^(ffwall)$/i
handler.limit = false
handler.register = false

module.exports = handler

//31caf10e4a64e86c1a92bcba
