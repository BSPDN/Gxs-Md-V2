let hikki = require('hikki-me')
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
const text = args.join(' ')
if (!text) return m.reply(`Example .topupff id|jumlah\nList Diamond Yang Di Dukung\nNominal Diamond\n5 Dm\n12 Dm\n70 Dm\n140 Dm\n355 Dm\n720 Dm`)
try {
let id = text.split('|')[0]
let jumlah = text.split('|')[1]
let ff = await hikki.game.nickNameFreefire(id) 
const topup = async function topupFreeFire() {
const makeSession = await hikki.game.topupFreeFire(id, jumlah) 
return await hikki.game.payDiamond(makeSession, '0895410636348')
}
const top = await topup() 
conn.sendFile(m.chat, top.qrCode, 'Qris.jpg', 'Payment : ${top.paymentMethod}\nId : ${id}\nJumlah : ${jumlah} Diamond\nScan & Bayar Maksimal 30 detik setelah qr ini keluar', m)
} catch (e) { return m.reply(`Sistem Error atau Nominal Diamond/Id\nUser Tidak Ada\nList Nominal Diamond\n5 Dm\n12 Dm\n70 Dm\n140 Dm\n355 Dm\n720 Dm`) }
}
handler.help = ['topupff id|jumlah']
handler.tags = ['internet']
handler.command = /^topupff$/i

handler.limit = true

module.exports = handler
