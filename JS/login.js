$("#loginForm").on("submit", function(e){//아이디 : 로그인폼에서 submit 했을시
    e.preventDefault();
    const username = $("#loginForm input").prop("value");//로그인폼 인풋값을 변수에 할당
    $("#greeting").text(`반갑습니다 ${username}님`);
    $("#loginForm").addClass("hidden");//로그인과 동시에 로그인 폼 양식 가림
    $("#memoForm").removeClass("hidden");//로그인 후 가려졌던 메모 폼 양식 나타나게 함
});