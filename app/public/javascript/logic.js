let questions =['question1','question2','question3','question4',
'question5','question6','question7','question8','question9','question10'];
$(window).on('load', () => {
    //qLoop();
    checkData();
    

    $('#add-btn').on('click',(event)=>{

        let newFriend = {
            name: $('#name').val().trim(),
            image: $('#pic').val().trim(),
            score: grabSurvey()
        }
        $.post("/api/friends", newFriend).then(function(data) {
            console.log('sending data',data);
            checkData();
        });

       


    });
});
function checkData(){
    $.get('/api/friends').then((data)=>{
        match(data,{name: 'test', image:'https://helloworld.jpg', score: [1,1,1,1,1,1,1,1,1,1]});
        console.log(data);
    })
}
function grabSurvey(){
    let arr =[];
    for(let i =0; i < 10; i++){
        let val = $(`#${i}`).val();
        arr.push(val);
    }
    return arr;
}
function makeInput(qArr,index){
    let inp = $(`<div class="form-group"><label for="name">${qArr[index]}</label><input type ="number" class="friendForm" id=${index} name="survey" min="1" max="5"></div>`);
    inp.appendTo('#survey-holder');
}
function qLoop(){
    for(let i =0; i <10;i++){
        makeInput(questions,i);
    }
}
function sendData(){
    $.post("/api/friends/" + searchedCharacter, (data)=> {

    });
}
function readData(){
    $.get('./api/friends').then((response)=>{
        console.log(response);
    });

}
function match(friends,user){
    let userScore = calcScore(user);
    console.log('uS '+ userScore);
    let scoreArr = [] //will hold total values for each friend
    let total = 0;
    friends.forEach(i =>{
        //let total = 0;
        let friendCalc = calcScore(i);
        scoreArr.push(friendCalc);
    });
    //(x-a^x-b)<0
    let min = userScore - 5;
    let max = userScore + 5;
    console.log(min);
    console.log(max);
    scoreArr.forEach(i =>{
        
        //|| (i <= (userScore -5)) || (i >= (userScore+5))
        if((i === userScore) && (i <= max) && (i >= min)){
            console.log(i);

            console.log('match found');
        }

    });
}
function calcScore(user){ //totals the users friend score then returns the value
    let total = 0;
    for(key in user.score){
        total+=user.score[key];
    } 
    return total;
}