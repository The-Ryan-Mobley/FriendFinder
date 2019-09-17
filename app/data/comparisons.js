const friends = require('./friends.js');
module.exports ={
    //needs to run comparison from last index in array
    calcScore: (user)=> { //totals the users friend score then returns the value
        let total = 0;
        for (key in user.score) {
            total += user.score[key];
        }
        return total;
    },
    match:()=> {
        let userScore = calcScore(friends[friends.length-1]); //finds score for most recent input
        let scoreArr = [] //will hold total values for each friend
        let matched = [];//will hold all objects whose scores match parameters(needs to be sent out to API)
        //let total = 0; used for front end appenditure
        //let displayIndexer = 0;
        friends.forEach(i => {
            let friendCalc = calcScore(i);
            scoreArr.push(friendCalc);
        });
    
        let min = userScore - 5;
        let max = userScore + 5;
        scoreArr.forEach(i => {
            if ((i <= max) && (i >= min)) {
                console.log(i);
                console.log('match found');
                matched.push(friends[scoreArr.indexOf(i)]);
            }
        });
        console.log(matched);
        
        return matched;
    
    }
}