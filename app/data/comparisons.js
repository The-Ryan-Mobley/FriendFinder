const Friendobjs = require('./friends.js');
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
        let matchedUser
        let userScore = 0;
        if(Friendobjs.user.length === 0){
             matchedUser = {name: 'null'};
        }
        else{
            matchedUser = Friendobjs.user[0];
            userScore = module.exports.calcScore(matchedUser); //finds score for most recent input
        }
        let scoreArr = [] //will hold total values for each friend
        let matched = [];//will hold all objects whose scores match parameters(needs to be sent out to API)
        //let total = 0; used for front end appenditure
        //let displayIndexer = 0;
        Friendobjs.friends.forEach(i => {
            let friendCalc = module.exports.calcScore(i);
            scoreArr.push(friendCalc);
        });
    
        let min = userScore - 5;
        let max = userScore + 5;
        for(let i = 0; i < scoreArr.length;i++){ //used standard for loop to avoid issues with scope while sorting
            for(let j=0; j < scoreArr.length;j++){
                let temp = undefined;
                if(scoreArr[i]>scoreArr[j]){
                    let temp = scoreArr[i];
                    scoreArr[i]=scoreArr[j];
                    scoreArr[j]=temp;

                }

            }
        }
        scoreArr.forEach(i => {
            if ((i <= max) && (i >= min)) {
                console.log('match found');
                correlatedIndex = Friendobjs.friends[scoreArr.indexOf(i)];
                if((correlatedIndex.name !== matchedUser.name) && (matched.indexOf(correlatedIndex) === -1)){
                    matched.push(correlatedIndex);

                }
                
            }
        });
        console.log(matched);
        
        return matched;
    
    }
}