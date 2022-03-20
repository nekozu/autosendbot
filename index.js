const { Telegraf, TelegramError, Markup } = require('telegraf')
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('kirim pesanmu'))

n.on('message', (ctx) => {
   const from_id = ctx.msg.from.id;
    if (from_id == own_id){
        ;
    } else {
        const msg_id = ctx.msg.message_id;
        await ctx.api.forwardMessage(process.env.group_id, from_id, msg_id);
    }
    const reply_msg = ctx.update.message.reply_to_message
    const reply_msg_user_id = reply_msg.forward_from.id
    const own_msg = ctx.update.message.text
    if (reply_msg){
        await ctx.api.sendMessage(reply_msg_user_id, own_msg)
    }
})

n.launch()

