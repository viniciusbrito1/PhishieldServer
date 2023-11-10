// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

const args = process.argv
let number = args[2] + '@c.us'
let message = args[3]
/*
venom.create({session: 'session-name'}).then((client) => {
  client.sendText(number, message);
  console.log(number+message)  
}).catch((error) => {
  console.error('Error creating WhatsApp bot:', error);
});
*/


venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });



function start(client){
  client
  .sendText(number, message)
  .then((result) => {
    process.exit(0)
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });

  console.log("\n ENVIOUOUOU \n")
}

