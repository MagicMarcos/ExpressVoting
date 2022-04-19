const Contender = require('../models/Contender');

module.exports = {
  getIndex: async (req, res) => {
    const hasVoted = req.session.hasVoted;

    try {
      const contenders = await Contender.find();
      const totalVotes = contenders.reduce((a, c) => a + c.votes, 0);
      await res.render('index.ejs', {
        contenders: contenders,
        totalVotes: totalVotes,
        hasVoted: hasVoted,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
