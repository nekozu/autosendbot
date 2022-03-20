const { Telegraf} = require("telegraf");
const n = new Telegraf(process.env.token)
const chat_id = process.env_chat_id

n.start((ctx) => ctx.reply('Hello! '))

n.on('message', (ctx) => {
    let msg = ctx.message.from.id
    let text = ctx.message.message_id
    ctx.forwardMessage(chat_id, msg, text);
    const reply_msg = ctx.message.reply_to_message
    const reply_msg_user_id = reply_msg.forward_from.id
    const own_msg = ctx.message.text
    if (reply_msg){
         ctx.message.sendMessage(reply_msg_user_id, own_msg)
    }
})

n.launch()
