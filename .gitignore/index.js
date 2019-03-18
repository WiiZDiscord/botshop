// TRUCS DE BASE

// #4286f4

// TRUCS DE BASE FIN
const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = "s/";

bot.login(process.env.TOKEN)


bot.on('ready', () => {
	console.log("Bot Shop Online")
	bot.user.setStatus("Online")
	bot.user.setGame("s/help | Bot Shop")
})

bot.on('message', message => {
	if(message.content === prefix + "help"){
		var help_embed = new Discord.RichEmbed()
		.setTitle("Page d'aide")
		.setColor("#4286f4")
		.addField("Liste des commandes", "s/help - Affiche La Page D'aide\ns/prix - Affiche Le Prix Des Différentes Partie D'un Bot `EN DEVELOPPEMENT`")
		message.channel.send(help_embed);
	}
	if(message.content === prefix + "prix"){
		var prix_embed = new Discord.RichEmbed()
		.setTitle("Page des prix")
		.setColor("#4286f4")
		.addField("Partie Basique", "Nom Personnalisé + Statut Personnalisé (Avec Nom Du Développeur) = 0,20€\nNom Personnalisé + Statut Personnalisé (Sans Nom Du Développeur) = 0,25€\n")
		.addField("Partie Moderation Basique", "Clear = 0,25€\nMessage de bienvenue/au revoir Personnalisé = 0,40€\nMute/UnMute = 0,50€\nCommande Regle Personnalisé = 0,60€\nKick = 0,40€")
		.addField("Partie Moderation Avancé", "Ban = 0,50€\nWarn/SeeWarns/DeleteWarns = 1,25€")
		.addField("Partie Infos", "Statistique de l'utilisateur = 0,20€\nInfo du bot et du serveur = 0,25€")
		.addField("Partie Fun", "8ball (De Base) = 0,35€\nGifs (De Base) = 0,75€\nGifs (Personnalisé) = 1€")
		.addField("Prix Final", "Personnalisé = Prix Commande + Prix Commande + ...\nBasique = 3,50€ (Faire `s/bot.b` pour plus d'informations)\nAvancé = 5€ (Faire `s/bot.a` pour plus d'informations\nExpert = 6,50€ (Faire `s/bot.e` pour plus d'informations")
		message.channel.send(prix_embed);
	}
})
