const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

app.use(cors())
app.use(bodyParser.json());
app.use(express.json()) // { "test": 1 }
app.use(express.urlencoded({extended: true})) // ?test=1

const filePath = '/root/ipe/zphisher/link.txt'; // Replace with the path to your file

let link = ''

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
  } else {
    link=data
  }
});
console.log(typeof link)
console.log(link)

let data = []
let lastData = ''

function sendMessage(number,email){
  const command = 'node zapApi.js ' + number + ' ' + link;
  console.log(command)
  exec(command, (error, stdout, stderr) => {});
}

app.post('/api/email-contato', (req, res) => {
  const email = {
    first: req.body.nome,
    second: req.body.email,
  }
  console.log(email["first"])
  data=[...data,email]
  lastData=email
  
  sendMessage(email["first"],"HAHAHA")

  res.json({
    ok: true,
  })
})

app.get('/', (req, res) => {
  res.json({
    //firstNumber: lastData.first,
    //secondNumber: lastData.second,
   ok: true,
  })
})

const port = 3001
app.listen(port, (err) => {
  if (err) {
    console.log('erro ao iniciar servidor na porta', port, err)
  } else {
    console.log('servidor rodando...', port)
  }
})
