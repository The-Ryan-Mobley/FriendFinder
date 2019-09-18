$(window).on('load', () => {
    //qLoop();
    //checkData();
    //let friendsArr = [];
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
    $('#friend-zone').on('click','.friend',(event)=>{
        console.log('click');
        let targeted = $('#friend-zone').find(event.target);
        console.log(targeted);
        targeted.find('.friend-card').toggle('slow',()=>{
            console.log('click');
        });
        
        

    });

});
function drawUser(){
    $.get('./api/currentuser').then((data)=>{
        if(data.length === 0){
            //default
        }
        else{

        }

    });
}
function userDOM(url){
    let userDiv = $('<div class=user-container>');
    let userPic = $(`<img href=${url}>`);
    let userName = $(`<h2>`);
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
    friendsArr =[];
    $.get('./api/friends').then((response) => {
        console.log(response);
        displayFriends(response,i);
        
        
    });

}

function displayFriends(friends,i) { //friends will be the list grabed from api i will be used as a recursive index
    
    let frienderino = $(`<div class="friend" id="friend-${i}">`);
    let friendimg = $(`<img class="friend-pic">`);
    frienderino.appendTo($('#friend-zone'));
    friendimg.attr('src', friends[i].image);
    friendimg.appendTo(frienderino);
    console.log(JSON.stringify(friends[i]));
    frienderino.data('friend-dat',JSON.stringify(friends[i]));
    friendsArr.push(friends[i]);
    i++;
    setTimeout(() => {
        if (i < friends.length) {
            displayFriends(friends,i);
        }

    },300);
}

function friendCard(friend,i){
    //makes a card that is hidden on clicks
    let friendInfo = $(`<div class="card friend-card" id=card-${i}>`)
    let friendbody = $(`<div class='card-body>`);
    let friendName = $(`<h3 class='friend-text>`);
    friendInfo.appendTo($(`#friend-${i}`));
    friendbody.appendTo(friendInfo);
    friendName.appendTo(friendbody);
    friendName.html(friend.name);
    friendInfo.toggle();

}

