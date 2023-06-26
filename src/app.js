import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const users = [
   {
      username: 'bobesponja',
      avatar:
         'https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png'
   }
]
const tweets = [
   {
      username: 'bobesponja',
      tweet: '1 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '2 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '3 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '4 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '5 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '6 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '7 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '8 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '9 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '10 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '11 Eu amo hambúrguer de siri!'
   },
   {
      username: 'bobesponja',
      tweet: '12 Eu amo hambúrguer de siri!'
   }
]

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
