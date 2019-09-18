$(window).on('load', () => {
    drawUser();
    matchLogic();

    $('#add-btn').on('click', (event) => {
        event.preventDefault();
        console.log('click');

        let user = {
            name: $('#name').val().trim(),
            image: $('#pic').val().trim(),
            score: grabSurvey()
        }
        console.log(user);
        $.post("/api/friends", user).then(function (data) {
            window.location.href='/tables';
            //console.log('sending data', data);
        });




    });

});
function drawUser(){
    $.get('./api/currentuser').then((data)=>{
        if(data.length === 0){
            //default
            userDOM(`https://www.chestnut-tree-house.org.uk/wp-content/uploads/2016/08/Mystery-person-e1470402666366.png`,
            `new user`);
        }
        else{
            userDOM(data[0].image,data[0].name);

        }

    });
}
function userDOM(url,name){
    let userDiv = $('<div class="friend">');
    let userPic = $(`<img class="friend-pic">`);
    let userName = $(`<h2>`);
    userDiv.appendTo('#profile');
    userPic.appendTo(userDiv);
    userPic.attr('src',url);
    userName.appendTo('#profile')
    userName.html(name);
}

function checkData() {
    $.get('/api/friends').then((data) => {
        match(data, user);
        console.log(data);
    })
}

function grabSurvey() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let val = $(`#${i}`).attr('id');
        
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
    
    let frienderino = $(`<div class="friend" id="friend-${i}">`);
    let friendimg = $(`<img class="friend-pic">`);
    let friendName = $(`<h2>`);
    frienderino.appendTo($('#friend-zone'));
    friendimg.attr('src', friends[i].image);
    friendimg.appendTo(frienderino);
    friendName.appendTo(frienderino);
    friendName.html(friends[i].name)
    i++;
    setTimeout(() => {
        if (i < friends.length) {
            displayFriends(friends,i);
        }

    },300);
}

