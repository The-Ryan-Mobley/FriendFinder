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



function displayFriends(friends,i) { //friends will be the list grabed from api i will be used as a recursive index
    
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

