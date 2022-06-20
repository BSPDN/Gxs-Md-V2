let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'cum', 'femdom', 'gangbang', 'glasses', 'manga', 'neko', 'orgy', 'panties', 'tentacles', 'yuri', 'sideoppai', 'animefeets', 'animebooty', 'hentai', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(ahegao|ass|bdsm|blowjob|cum|femdom|gangbang|glasses|manga|neko|orgy|panties|tentacles|thighs|yuri|sideoppai|hentai|animefeets|animebooty|animearmpits|lewdanimegirls|biganimetiddies)$/i
//buatan hyzer, jgn hapus atuh 😊
module.exports = handler