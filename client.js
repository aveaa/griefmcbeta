const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

var jsonread = 'http://griefmcbot.thedipper.cf/json.php?host=play.grmc.su&port=25565';

client.on('ready', () => {
    console.log('[System] Авторизация успешна. Скрипт загружен без ошибок.')
    client.user.setPresence({
        game: {
            name: `${process.env.BOTPREFIX}h`,
            type: 3
        }
    });
});

client.on("message", async message => {
  if(message.author.bot) return;
	
  if(message.content.indexOf(process.env.BOTPREFIX) !== 0) return;
  const args = message.content.slice(process.env.BOTPREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
	if(command === "uptime") {
		const embed = new Discord.RichEmbed()
            .setTitle(`Статистика бота ` + client.user.tag)
            .setThumbnail(client.user.avatarURL)
            embed.addField('Пинг:', client.ping)
            embed.addField('Память (ОЗУ):', process.env.WEB_MEMORY + 'MB / ' + process.env.MEMORY_AVAILABLE + 'MB')
            embed.addField('Режим работы:', process.env.DYNO)
            embed.addField('Порт:', process.env.PORT);
            message.channel.send(embed);
}
	
    if(command === "info") {
	axios.get(jsonread).then(players => {
		if(players) {
			let playerCount = players.online || 0
			let playerMaxCount = players.max
    }
});

	axios.get(jsonread).then(host => {
    if(host) {
        let address = host.host
        let port = host.port
}
});

axios.get(jsonread).then(version => {
    if(version) {
        let srv_version = version.version
}
});
const embed1 = new Discord.RichEmbed()
                .setTitle(`Информация:`)
                .setFooter("GRIEFMC")
                .setDescription(`Статус: Online\n\nКол-во игроков на сервере: ${playerCount} из ${playerMaxCount}\nВерсия: ${srv_version}`);
const embed2 = new Discord.RichEmbed()
                .setTitle(`Информация:`)
                .setFooter("GRIEFMC")
                .setDescription(`Статус: Offline\n\nКол-во игроков на сервере: Недоступно\nВерсия: Недоступно`);

                message.channel.send({embed: embed1});
    } else {
                message.channel.send({embed: embed2});
    }
	if(command === "help") {
		const embed = new Discord.RichEmbed()
                .setTitle(`Помощь по командам:`)
                .setFooter("GRIEFMC")
                .setDescription(`Команды:\n\ng!uptime - показывает статистику бота\ng!about - информация о создателе бота\ng!info - узнать информацию о сервере\ng!stats [nick] - узнать статистику аккаунта`);
            message.channel.send({embed});
	}
	if(command === "about") {
	        const embed = new Discord.RichEmbed()
                .setTitle(`Обо мне:`)
                .setFooter("GRIEFMC")
                .setDescription('Данного бота сделал [sqdEclipse](http://eclipsedev.cf) (Никнейм на сервере: DipperProdYT)\nБот не подтвержён сервером GRIEFMC, это чисто разработка игрока.\n\nДобавить его к себе - [http://griefmcbot.thedipper.cf](http://griefmcbot.thedipper.cf)');
            message.channel.send({embed});
    }
    if(command === "stats") {
        const embed = new Discord.RichEmbed()
            .setTitle(`Ошибка:`)
            .setFooter("GRIEFMC")
            .setDescription('Эй! Команда в разработке!');
        message.channel.send({embed});
}
if (command === "eval") {
    if(message.author.id !== process.env.BOTDEVELOPER) return message.channel.send(`Вы не создатель этого бота.`);
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch(err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
   }
});

client.login(process.env.BOTTOKEN);
