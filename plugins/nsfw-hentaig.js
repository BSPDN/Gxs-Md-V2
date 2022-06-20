let handler = async (m, { conn }) => {
let hyzer = 'https://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=Papah-Chan'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'NEXT', '.hentaig', m)
}
handler.help = ['hentaig']
handler.tags = ['nsfw']
handler.command = /^(hentaig)$/i

module.exports = handler
