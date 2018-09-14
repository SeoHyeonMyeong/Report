// 기본적으로 HTML에 사용된다.
// <script>  </script> 태그 사이에 코드를 적는것이 기본이다.


// 1. 이벤트
// 
// <input type="button" value="hi" onclick="alert('hi')">   버튼이 클릭되었을시 이벤트
// <input type="text" onchange="alert('changed')">          텍스트가 바뀌었을때 이벤트
// <input type="text" onkeydown="alert('key down!')">       키가 눌렸을때의 이벤트

// 2. 콘솔
// Ctrl + Shift + I : 구글 개발자도구 창 열기
// Console 클릭 or ESC : 콘솔창 열기
// 콘솔창에서 자바 스크립트를 입력하면 마치 웹에 자바스크립트를 쓴것과 같은 효과 발생
alert('asdfasdfasdf'.length); //문자열의 길이를 구해서 띄워주는 함수

// 3. 문자열

'hello world'.length; // 결과 : 11
'hello world'.toUpperCase; // 결과 : HELLO WORLD
'hello world'.indexOf('o'); // 결과 : 4
'hello world'.indexOf('K'); // 결과 : -1 (없을경우 오류 -1)
'hello world'.indexOf('world'); // 결과 : 6
'     hello world    '.trim(); // 결과 :hello world

