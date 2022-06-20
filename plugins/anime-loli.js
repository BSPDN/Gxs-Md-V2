let handler = async (m, { conn }) => {
let hyzer = 'https://api-reysekha.herokuapp.com/api/wallpaper/loli?apikey=APIKEY'
    conn.sendButtonImg(m.chat, hyzer, wm2, 'NEXT', 'AKU MAU LOLI', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler