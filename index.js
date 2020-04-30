const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

const app = express()

morgan.token('post_data', function (req) { return req.method === 'POST' ? JSON.stringify(req.body) : '' })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post_data'))

app.use(express.json())
app.use(cors())
app.use(express.static('build'))


app.get('/', (req, res) => {
  console.log(req.body)
  res.send('<h1>Hello</h1>')
})

app.get('/api/persons', (request, response) => {

  Person.find({}).then(persons => {
    response.json(persons.map(p => p.toJSON()))
  })

})

app.get('/info', (request, response) => {

  Person.find({}).then(persons =>
    response.send(`Phonebook has info for ${persons.length} people <br> ${Date()}`)
  )

})


app.get('/api/persons/:id', (request, response, next) => {

  Person.findById(request.params.id).then(person => {
    if (person){
      response.json(person)
    } else {
      response.status(404).end()
    }
  }).catch(error => {
    //console.log(error.name)
    //response.status(400).end()
    next(error)
  })
})


app.delete('/api/persons/:id', (request, response, next) => {

  Person.findByIdAndRemove(request.params.id).then(() => {
    response.status(204).end()
  }).catch(error => {
    next(error)
  })
})

app.put('/api/persons/:id', (request, response, next) => {

  const id = request.params.id

  const person = {
    name: request.body.name,
    number: request.body.number
  }

  Person.findByIdAndUpdate(id, person, { new: true }).then(result => {
    response.json(result.toJSON())
  }).catch(error => {
    next(error)
  })

})

app.post('/api/persons', (request, response, next) => {

  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number
  })

  console.log(body.name)
  console.log(person.toJSON())

  person.save().then(() => {
    console.log(`Added ${person.name} number ${person.number} to phonebook`)
    response.json(person.toJSON())
  }).catch(error => next(error ))

})



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  //console.log(error)
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})