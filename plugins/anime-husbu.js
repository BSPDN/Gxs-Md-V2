let handler = async (m, { conn }) => {
let hyzer = 'https://api.lolhuman.xyz/api/random/husbu?apikey=Papah-Chan'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'HUSBU', '.husbu', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler
