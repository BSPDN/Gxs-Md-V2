let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Update Terakhir')).buffer(), `
Catatan Perubahan :
`.trim(), 'Rabu, 8 Juni 2022 : V. 4.0\n\n◇ Penambahan Fitur : Catatan Perubahan\n\n◇ NSFW Menu Is Done Working\n\n◇ Menghapus fitur membuat stiker \n\n◇ Total Fitur saat ini: 370\n\n© BagasPrdn ツ', 'Ok BagasPrdn ツ', 'Ok')
handler.help = ['notes']
handler.tags = ['main']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler
