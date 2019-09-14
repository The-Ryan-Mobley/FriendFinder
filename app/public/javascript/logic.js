let questions =['question1','question2','question3','question4',
'question5','question6','question7','question8','question9','question10'];
$(window).on('load', () => {
    qLoop();

    $('#add-btn').on('click',()=>{

    });
});

function makeInput(qArr,index){
    let inp = $(`<div class="form-group"><label for="name">${qArr[index]}</label><input type ="number" class="friendForm" name="survey" min="1" max="5"></div>`);
    inp.appendTo('#survey-holder');
}
function qLoop(){
    for(let i =0; i <10;i++){
        makeInput(questions,i);
    }
}
