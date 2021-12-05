module.exports = (client, member) => {
  
var kanal = client.channels.get("837722314896310364")
kanal.send(` :trophy: | ${member.user.username} adlı kişi sunucudan ayrıldı.`)
  
}
