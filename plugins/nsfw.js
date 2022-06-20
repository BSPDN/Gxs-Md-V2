let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=Papah-Chan`)).buffer(), `wangy wangy wangy`, '© Shiro-Bot', '➡️ Next', `${usedPrefix + command}`, m, false)
}

handler.help= ['hentaipic']
handler.tags = ['nsfw']
handler.premium = false

handler.command = /^hentai(pic)?$/i
module.exports = handler