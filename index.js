const { Telegraf, Telegram} = require("telegraf");
const n = new Telegraf(process.env.token)
const chat_id = process.env.chat_id

n.start((ctx) => ctx.reply('Hello! '))

n.on('message', (ctx) => {
    let msg = ctx.message.from.id
    let text = ctx.message.message_id
    if (msg == chat_id){
        ;
    } else {
    ctx.forwardMessage(chat_id, msg, text);
    }
    const reply_msg = ctx.message.reply_to_message?.message_id
    const reply_msg_user_id = reply_msg?.forward_from?.id
    console.log(reply_msg_user_id)
    const own_msg = ctx.message.text
    if (reply_msg){
         ctx.telegram.sendMessage(reply_msg_user_id, own_msg)
    }
})

n.launch()
