let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['lewd', 'anal', 'tits', 'kuni', 'solog', 'erok', 'feetg', 'lewdk', 'holoero', 'erokemo', 'futanari', 'eroyuri']
handler.tags = ['nsfw']
handler.command = /^(lewd|anal|tits|kuni|solog|erok|feetg|lewdk|holoero|erokemo|futanari|eroyuri)$/i
//buatan hyzer, jgn hapus nama gw atuh 😊
module.exports = handler
 