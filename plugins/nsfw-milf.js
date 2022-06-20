let handler = async (m, { conn }) => {
let hyzer = 'https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=Papah-Chan'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'AKU MAU MILF', '.milf', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i

module.exports = handler
