# MCR Codes Bowling Challenge
A mob coding exercise for the Manchester Codes Bootcamp

## Installation
`npm install`

## Challenge
Build a `ScoreCard` object for keeping track of bowling scores.

### Rules
* A game consists of 10 frames. 
* In each frame the player has two opportunities to knock down 10 pins. 
* The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

### Spares
* A spare is when the player knocks down all 10 pins in two tries. 
* The bonus for that frame is the number of pins knocked down by the next roll. 
* If a spare is bowled in frame 3, and the first roll of frame 4 is a 5, the score for frame 3 is 10 plus a bonus of 5.

### Strikes
* A strike is when all 10 pins are knocked down on the first roll of a frame. 
* The bonus for that frame is the value of the next two balls rolled.
* If a strike is bowled in frame 3, and the scores for frame 4 are 1 and 5, the score for frame 3 is 10 plus a bonus of 6 (5 + 1).

### 10th Frame
* In the 10th frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. 
* However no more than three balls can be rolled in the 10th frame.
* A perfect game is therefore 12 strikes, yielding a score of 300.

## Properties
* Frames
* Score
* playerName
* currentSet

## Methods
* bowl
* calculate points
* detect strike
* detect spare

