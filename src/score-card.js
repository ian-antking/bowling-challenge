function ScoreCard() {
  this.frameIndex = 0;
  this.scores = [[]];
}

ScoreCard.prototype.bowl = function bowl(pins) {
  if (this.scores[this.frameIndex].length === 2 || this.scores[this.frameIndex][0] === 10) {
    this.scores.push([pins]);
    this.frameIndex += 1;
  } else {
    this.scores[this.frameIndex].push(pins);
  }
};

ScoreCard.prototype.totalScores = function totalScores() {
  let score = 0;
  this.scores.forEach((set, setIndex) => {
    let frameTotal = set.reduce((acc, next) => acc + next);
    if ((frameTotal === 10) && (set.length === 2)) {
      frameTotal += this.scores[setIndex + 1][0];
    }
    score += frameTotal;
  });
  return score;
};

module.exports = ScoreCard;
