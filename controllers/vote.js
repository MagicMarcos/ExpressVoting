const Contender = require('../models/Contender');
const User = require('../models/Users');
const moment = require('moment');

module.exports = {
  updateVote: async (req, res) => {
    try {
      // req.session.hasVoted = true;
      const id = req.oidc.user.sub.split('|')[1];

      await Contender.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { votes: 1 } }
      );

      await User.findOneAndUpdate(
        { _id: id },
        { hasVoted: true, lastVoted: moment().add(2, 'm') }
      );

      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },
};
