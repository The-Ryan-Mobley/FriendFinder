$(window).on('load', () => {
    //qLoop();
    //checkData();
    matchLogic();
    


    $('#add-btn').on('click', (event) => {
        console.log('click');

        let user = {
            name: $('#name').val().trim(),
            image: $('#pic').val().trim(),
            score: grabSurvey()
        }
        console.log(user);
        $.post("/api/friends", user).then(function (data) {
            //console.log('sending data', data);
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
        console.log(parseInt(val));
        arr.push(parseInt(val));
    }
    return arr;
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


function matchLogic(){//needs to house display friends
    let i =0;
    $.get('./api/friends').then((response) => {
        console.log(response);
        displayFriends(response,i);
        
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

