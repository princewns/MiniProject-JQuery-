$("#todo-button").on("click", function(){//todo 버튼을 누를시 체크박스,내용,삭제버튼 생성
    const checkbox = $("<input>").prop("type","checkbox");//체크박스 생성
    checkbox.on("click", function(e){//체크박스 클릭시
        if(e.target.checked){
            checkbox.parent().css("color", "lightgray");
        }
        else{
            checkbox.parent().css("color", "white");
        }
    });

    const button = $("<button>").text("X");//삭제버튼 생성
    button.on("click", function(e){
        e.target.parentNode.remove();
    });

    const todo = $("#memoForm input:first").prop("value");//todo변수에 인풋값 할당

    //todo버튼을 누른후 체크박스,내용,삭제버튼을 탑재한 리스트생성
    //그리고 인풋값 초기화
    $("#todo-board").append($("<li>").append(checkbox).append(todo).append(button));
    $("#memoForm input:first").prop("value","");
});