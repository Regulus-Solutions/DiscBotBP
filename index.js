import Discord from "discord.js"
import Environment from "dotenv"
Environment.config()

const client = new Discord.Client()

const prefix = "!"

client.on("message", async message => {
    if(message.author.bot || message.content[0] !== prefix)return;
    
    //Docs for message object
    //https://discord.com/developers/docs/resources/channel#message-object

    message.reply("Hi")
})

/*
    !!!!! IMPORTANT !!!!!

    To log your bot in, create a file called ".env" at the root
    of your project (next to index.js) with the following inside: 

    BOT_TOKEN = "ODU2MzI1GFAKETkzNjE0ODc4.YM_Y8Q.Gfakexc4a9b2PHez4i-k_MM95Tig"

    Storing the bot token in a .env file is done for security
    measures and reusability. All members of a git repository
    must create their own .env file as it will not automatically
    commit.

*/

    client.login(process.env.DISCORD_TOKEN)