let questions =['question1','question2','question3','question4',
'question5','question6','question7','question8','question9','question10'];
$(window).on('load', () => {
    //qLoop();

    $('#add-btn').on('click',(event)=>{

        let newFriend = {
            name: $('#name').val().trim(),
            image: $('#pic').val().trim(),
            score: grabSurvey()
        }
        $.post("/api/friends", newFriend).then(function(data) {
            console.log('sending data',data);
        });
       


    });
});
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