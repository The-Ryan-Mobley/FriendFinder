$(window).on('load', () => {
    //qLoop();
    checkData();
    let user = undefined;


    $('#add-btn').on('click', (event) => {

        user = {
            name: $('#name').val().trim(),
            image: $('#pic').val().trim(),
            score: grabSurvey()
        }
        $.post("/api/friends", user).then(function (data) {
            console.log('sending data', data);
            checkData();
        });




    });
});

function checkData() {
    $.get('/api/friends').then((data) => {
        match(data, user);
        console.log(data);
    })
}

function grabSurvey() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let val = $(`#${i}`).val();
        arr.push(val);
    }
    return arr;
}

function makeInput(qArr, index) {
    let inp = $(`<div class="form-group"><label for="name">${qArr[index]}</label><input type ="number" class="friendForm" id=${index} name="survey" min="1" max="5"></div>`);
    inp.appendTo('#survey-holder');
}

function qLoop() {
    for (let i = 0; i < 10; i++) {
        makeInput(questions, i);
    }
}

function sendData() {
    $.post("/api/friends/" + searchedCharacter, (data) => {

    });
}

function readData() {
    $.get('./api/friends').then((response) => {
        console.log(response);
    });

}

function match(friends, user) {
    let userScore = calcScore(user);
    console.log('uS ' + userScore);
    let scoreArr = [] //will hold total values for each friend
    let matched = [];
    let total = 0;
    let displayIndexer = 0;
    friends.forEach(i => {
        //let total = 0;
        let friendCalc = calcScore(i);
        scoreArr.push(friendCalc);
    });

    let min = userScore - 5;
    let max = userScore + 5;
    console.log(min);
    console.log(max);
    scoreArr.forEach(i => {
        if ((i <= max) && (i >= min)) {
            console.log(i);
            console.log('match found');
            matched.push(friends[scoreArr.indexOf(i)]);
        }
    });
    console.log(matched);
    
    return displayFriends(matched,displayIndexer);

}

function calcScore(user) { //totals the users friend score then returns the value
    let total = 0;
    for (key in user.score) {
        total += user.score[key];
    }
    return total;
}

function displayFriends(friends,i) {

    /*
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      alert('hello');          //  your code here
      i++;                     //  increment the counter
      if (i < 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 3000) 
    */
    
    let frienderino = $(`<div class="friend">`);
    let friendimg = $(`<img class="friend-pic">`);
    frienderino.appendTo($('#friend-zone'));
    friendimg.attr('src', friends[i].image);
    friendimg.appendTo(frienderino);
    i++;
    setTimeout(() => {
        if (i < friends.length) {
            displayFriends(friends,i);
        }

    },300);





    // friends.forEach(i => {





    // });
}

