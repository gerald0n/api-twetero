import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const users = [
   {
      username: 'administrador',
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVb5-TSYr4QSGeWkoe1U1koXEdh2dZholCk5b8DTYFw&s'
   }
]
const tweets = [
   {
      username: 'administrador',
      tweet: 'Onde estiver, eu estarei lá.'
   }
]

app.post('/sign-up', (req, res) => {
   const { username, avatar } = req.body

   users.push({ username, avatar })
   res.status(201).json({ message: 'OK' })
})

app.post('/tweets', (req, res) => {
   const { username, tweet } = req.body

   if (!users.find((user) => user.username === username)) {
      return res.status(401).json({ message: 'UNAUTHORIZED' })
   }

   tweets.push({ username, tweet })
   res.status(201).json({ message: 'Ok' })
})

app.get('/tweets', (req, res) => {
   const posts = tweets.reverse().map((tweetPost) => {
      for (const user of users) {
         if (user.username === tweetPost.username)
            return { username: user.username, avatar: user.avatar, tweet: tweetPost.tweet }
      }
   })

   res.send(posts.slice(0, 10))
})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
