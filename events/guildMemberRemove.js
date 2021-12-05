module.exports = (client, member) => {
  
var kanal = client.channels.get("787699114800447548")
kanal.send(`*${member.user.username} adlı kişi sunucudan ayrıldı.*`)
  
}
