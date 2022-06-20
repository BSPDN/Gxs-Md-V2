let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Sama-Sama*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/c8cea7994a3aab64ab288.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/06a27a93b66f63a5a067e.jpg', hyzer, { packname: "sticker by", author: "BagasPrdn" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq)$/i
handler.command = new RegExp

module.exports = handler
