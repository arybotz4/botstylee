let handler  = async (m, { conn, args }) => {
   m.reply(`GA ADA🗿`)
}
 
handler.help = ['script']
handler.tags = ['about']
handler.command = /^(script)$/i

module.exports = handler
