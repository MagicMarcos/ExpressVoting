const Contender = require('../models/Contender');

module.exports = {
  updateVote: async (req, res) => {
    req.session.hasVoted = true;

    try {
      const contender = await Contender.findOne({ _id: req.params.id });
      contender.votes++;
      await contender.save();
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  },
};
