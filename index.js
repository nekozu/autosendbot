const { Telegraf, TelegramError, Markup } = require('telegraf')
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('Hello! Im remover tag bot. Fordward a message'))

//n.on('message', (ctx) => {
     //if(ctx.chat.type == 'private')
        //ctx.copyMessage(process.env.chat_id)
//})

n.on('message', (ctx) => {
     var a = n.telegram.getChatMember("-1001552066211", ctx.from.id)
      if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked')
         n.telegram.restrictChatMember(ctx.chat.id, ctx.from.id, { can_send_messages : false, can_send_media_messages : false, can_send_polls : false, can_send_other_messages: false, can_add_web_page_previews : false})              
         ctx.reply("Silahkan Join Dulu Ke Channel yang ada di bio bot ya!")
         Markup.inlineKeyboard([
         Markup.button.url('Channel', 't.me/cookiesey'),
        Markup.button.callback('Unmute', 'unmute')
     ])
  })

n.action('unmute', (ctx) => {
      n.telegram.restrictChatMember(ctx.chat.id, ctx.from.id, { can_send_messages : true, can_send_media_messages : true, can_send_polls : false, can_send_other_messages: true, can_add_web_page_previews : true})   
})

n.launch()
