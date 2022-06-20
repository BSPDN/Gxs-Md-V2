let handler = async (m, { conn }) => {
let hyzer = 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=Papah-Chan'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'NEXT', '.nsfwloli', m)
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli)$/i

module.exports = handler
