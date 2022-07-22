const { response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthday': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the Rapper': {
        'age': 29,
        'birthday': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthday': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
    //response.json(rappers)
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT}! YOU BETTER GO CATCH IT!`)
})