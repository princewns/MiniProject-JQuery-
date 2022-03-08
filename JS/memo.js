$("#memoForm").on("submit", function(e){
    e.preventDefault();
    const button = $("<button>").text("X");//삭제버튼 생성과 기능추가
    button.on("click", function(e){
        e.target.parentNode.remove();
    });

    $("#memoBoard").append(
        $("<div>").html(//div 생성과 동시에 시간값 + 삭제버튼 추가
            $("#memoForm input").prop("value") + "<br><br>" + getClock()
        )
        .append(button)
    );

    $("#memoForm input:first").prop("value","");//submit 후 입력값 초기화
});