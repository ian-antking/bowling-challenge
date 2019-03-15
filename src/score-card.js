function ScoreCard() {
  this.frameIndex = 0;
  this.scores = [[]];
}

ScoreCard.prototype.bowl = function bowl(pins){
  if(this.scores[this.frameIndex].length === 2 || this.scores[this.frameIndex][0] === 10) {
    this.scores.push([pins]);
    this.frameIndex += 1
  } else {
    this.scores[this.frameIndex].push(pins);
  }

}

ScoreCard.prototype.totalScores = function totalScores(){
  return this.scores.reduce((acc, next) => acc+=next[0] + next[1], 0)
}

module.exports = ScoreCard
