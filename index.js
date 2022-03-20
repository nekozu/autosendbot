const { Telegraf} = require("telegraf");
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('Hello! '))

n.on('message', (ctx) => {
    let msg = ctx.message.from.id
    let text = ctx.message.message_id
    let chat_id = process.env_chat_id
    ctx.forwardMessage(chat_id, text, msg);
    const reply_msg = ctx..message.reply_to_message
    const reply_msg_user_id = reply_msg.forward_from.id
    const own_msg = ctx.message.text
    if (reply_msg){
        await ctx.message.sendMessage(reply_msg_user_id, own_msg)
    }
})

n.launch()
