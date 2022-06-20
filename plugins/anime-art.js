let handler = async (m, { conn }) => {
let hyzer = 'https://api.lolhuman.xyz/api/random/art?apikey=Papah-Chan'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'NEXT', '.animeart', m)
}
handler.help = ['animeart']
handler.tags = ['anime']
handler.command = /^(animeart)$/i

module.exports = handler
