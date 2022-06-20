let handler = async (m, { conn }) => {
let hyzer = 'https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=Papah-Chan'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'NEXT', '.ecchi', m)
}
handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.command = /^(ecchi)$/i

module.exports = handler
