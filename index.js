const { Telegraf} = require("telegraf");
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('Hello! Im remover tag bot. Fordward a message'))

n.on('message', (ctx) => {
     if(ctx.chat.type == 'private')
        ctx.copyMessage(process.env.chat_id)
})

n.on('message', (ctx) => {
   if(ctx.chat.type == 'group')
     var a = tg.getChatMember("-1001552066211", ctx.from.id)
      if(a.result.status == 'left'){
         bot.telegram.restrictChatMember('-1001590858858', ctx.from.id, { can_send_messages : false, can_send_media_messages : false, can_send_polls : false, can_send_other_messages: false, can_add_web_page_previews : false})              
         ctx.reply("Silahkan Join Dulu Ke Channel yang ada di bio bot ya!")
   //} else {
   }
})

n.launch()
