const express = require('express');
const app = express();
const session = require('express-session');
const methodOverride = require('method-override');
const connectDB = require('./config/database');
connectDB();
require('dotenv').config({ path: './config/.env' });

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

const mainRoutes = require('./routes/main');
const voteRoutes = require('./routes/vote');

app.use('/', mainRoutes);
app.use('/vote', voteRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!');
});

//! IGNORE FOR NOW ========================================
// async function saveContender(contender) {
//   const dog = new Contender({
//     breed: 'Black Lab',
//     imgURL:
//       'https://www.k9web.com/wp-content/uploads/2020/12/black-labrador-retriever-sitting-on-the-grass.jpg',
//     votes: 0,
//   });

//   const doc = await dog.save();
//   console.log(doc);
// }

// saveContender().catch(error => {
//   console.error(error);
// });

// app.post('/vote', async (req, res) => {
//   const dog = new Contender({
//     breed: 'white lab',
//     imgURL:
//       'https://www.thesprucepets.com/thmb/k3NXIqobAKvxoQ2ozGcwPxzIkpI=/3300x1856/smart/filters:no_upscale()/most-obedient-dog-breeds-4796922-hero-4440a0ccec0e42c98c5e58821fc9f15.jpg',
//     votes: 5,
//   });

//   const doc = await dog.save();
//   console.log(doc);
// });

// app.get('/', async (req, res) => {
//   const contenders = await Contender.find();
//   const totalVotes = contenders.reduce((a, c) => a + c.votes, 0);
//   contenders.forEach(c => console.log(typeof c.votes));
//   await res.render('index.ejs', {
//     contenders: contenders,
//     totalVotes: totalVotes,
//   });
// });

// app.put('/vote/:id', async (req, res) => {
//   const contender = await Contender.findOne({ _id: req.params.id });
//   contender.votes++;
//   await contender.save();
//   res.redirect('/');
// });

// app.listen(3000, console.log('listening on 3000'));
