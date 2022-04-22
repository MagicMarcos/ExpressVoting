const Contender = require('../models/Contender');
const User = require('../models/Users');
const moment = require('moment');

module.exports = {
  getIndex: async (req, res) => {
    try {
      await updateFunction(req, res);

      const contenders = await Contender.find();
      const totalVotes = contenders.reduce((a, c) => a + c.votes, 0);
      let result;
      let user = null;
      let nickname = null;

      if (req.oidc.user !== undefined) {
        const id = req.oidc.user.sub.split('|')[1];
        user = await User.findById(id);
        nickname = req.oidc.user.nickname;
        nickname = nickname[0].toUpperCase() + nickname.slice(1);
      }

      result = {
        contenders: contenders,
        totalVotes: totalVotes,
        user: user,
        nickname: nickname,
      };

      req.socketIO.emit('update', result);

      res.render('index.ejs', result);
    } catch (err) {
      console.log(err);
    }
  },
};

async function updateFunction(req, res) {
  if (req.oidc.user !== undefined) {
    const id = req.oidc.user.sub.split('|')[1];
    const user = await User.findById(id);
    if (moment().isSameOrAfter(user.lastVoted)) {
      await User.findOneAndUpdate({ _id: id }, { hasVoted: false });
    }
  }
}
