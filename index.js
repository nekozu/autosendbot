const { Telegraf, TelegramError, Markup } = require('telegraf')
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('kirim pesanmu'))

n.on('message', (ctx) => {
     if(ctx.chat.type == 'private')
        ctx.copyMessage(process.env.chat_id)
})

n.launch()
