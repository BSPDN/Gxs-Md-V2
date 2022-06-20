let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6282148864989-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Get Bot', 
    orderTitle: `BagasPrdn ツ`,
    thumbnail: 'https://telegra.ph/file/c8cea7994a3aab64ab288.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler