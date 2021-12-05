
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id != 915298461522473031)
     
  if (
    !message.member.roles.has("916337616746606622") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
          ` Bilgi`,
          `Bu komutu kullanmak için gerekli yetkiye sahip değilsin.`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(` Bilgi`, `  Bir kullanıcı etiketlemelisin.`)
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  let isim = args[1];
  if (!isim)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(` Bilgi`, `  Bir isim girmelisin.`)
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let yas = args[2];
  if (!yas)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(`  Bilgi`, ` Bir yaş girmelisin.`)
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  if(!member.user.username.includes("✯")) {
     await member.setNickname(`${isim} ' ${yas}`);
 member.addRole('914574517362380801')//verilecek rol
  member.removeRole('914576547103518730')//alınacak rol
  message.react("837840243704725544");
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${member.user} **adlı üyeye** <@&914574517362380801> **rolünü verip ismini**  \` ${isim} ' ${yas}\` **olarak ayarladım.**`)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  return message.channel.send(embed); 
  
} else {

  
    await member.setNickname(` ✯ ${isim} ' ${yas}`);
   member.addRole('914574517362380801')//verilecek rol
  member.removeRole('914576547103518730')//alınacak rol
  message.react("837840243704725544");
  let embed1 = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`${member.user} **adlı üyeye** <@&914574517362380801> **rolünü verip ismini**  \`${isim} ' ${yas}\` **olarak ayarladım.**`)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  return message.channel.send(embed1)
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayit", "kayıt"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "kayıt",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
