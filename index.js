const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('post_data', function (req, res) { return req.method === 'POST' ? JSON.stringify(req.body) : '' })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post_data'))

app.use(express.json())
app.use(cors())
app.use(express.static('build'))




let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]



app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const people = persons.length
  console.log("Moi")
  response.send(`Phonebook has info for ${people} people <br> ${Date()}`)
  
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(p => p.id == id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(p => p.id == id)
  persons = persons.filter(p => p.id != id)

  response.status(204).end()

})

app.post('/api/persons', (request, response) => {
  const id = Math.floor(Math.random() * 10000000000)

  const body = request.body
  //console.log(request)

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }

  if (persons.find(p => p.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: id
  }

  persons = persons.concat(newPerson)

  response.json(newPerson)
})


app.get('/', (req, res) => {
  console.log(req.body)
  res.send('<h1>Lors!</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})