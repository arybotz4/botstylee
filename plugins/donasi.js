let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Indosat [085828764046]
│ • Gopay [085828764046]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285828764046
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
