import express from 'express'
import cors from 'cors'

let data = [
  {id: 1, name: 'Nata', age: 34},
  {id: 2, name: 'John', age: 30},
]

const app = express()
const port = 5000

const corsOptions = {
  origin: 'http://127.0.0.1:5500', 
  methods: ['GET','POST','PUT','DELETE']
};

app.use(cors(corsOptions));
app.use(express.json())

app.get('/', (req, res) => {
  res.json(data)
})

app.post('/', (req, res) => {
  const newUser = req.body
  data.push(newUser)
  res.status(201).json(newUser)
})

app.put('/data/:id', (req, res) => {
  const userId = +req.params.id
  const updateUser = req.body

  data = data.map(user => {
    if (user.id === userId) {
      return {
        id: userId,
        name: updateUser.name,
        age: updateUser.age,
      }
    }
    return user
  })

  res.json({data})
})

app.delete('/data/:id', (req, res) => {
  const userId = +req.params.id
  data = data.filter(user => user.id !==userId)
  res.json({data})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})