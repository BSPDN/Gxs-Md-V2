let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/ecchi')).data
   conn.sendFile(m.chat, json.url, 'ecchi2.jpg', json.title, m, false)
}
handler.help = ['ecchi2']
handler.tags = ['nsfw']
handler.command = /^ecchi2$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler