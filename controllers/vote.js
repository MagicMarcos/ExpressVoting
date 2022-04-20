const Contender = require('../models/Contender');

module.exports = {
  updateVote: async (req, res) => {
    try {
      req.session.hasVoted = true;
      await Contender.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { votes: 1 } }
      );
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },
};
