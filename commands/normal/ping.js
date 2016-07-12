const RESPONSES = [
	"pong",
	"*I-It's not like I wanted to say pong or anything...*",
	"pong!",
	"No",
	"...",
	"ping"
];

module.exports = {
	desc: "Responds with pong.",
	help: "Used to check if the bot is working.\nReplies with 'pong' and the time taken.",
	aliases: ['p'],
	cooldown: 2,
	task(bot, msg) {
		let choice = ~~(Math.random() * RESPONSES.length);
		bot.createMessage(msg.channel.id, RESPONSES[choice]).then(sentMsg => {
			bot.editMessage(sentMsg.channel.id, sentMsg.id, `${RESPONSES[choice]}    |    Response delay: ${sentMsg.timestamp - msg.timestamp}ms`);
		});
	}
};
