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

// 4. 변수
  
  var a = 15; // a라는 이름의 변수를 선언하고 15의 값으로 초기화
  alert("그의 나이는 " + age + "입니다."); // 결과 : 그의 나이는 15입니다.

// 5. 웹브라우저 제어

<input type="button" value="hi" onclick="     
  document.querySelector('body').style.backgroundColor = "black"; 
  documnet.querySelector('body').style.color = "white"; 
">
  //이벤트 속성에 자바스크립트 입력
  //body태그의 배경색을 검은색으로 변경
  //body태그의 글꼴색을 흰색으로 변경

// 6. 조건문

<input type="button" value="hi" onclick="
  if(this.value === "hi"){
    alert("hi");
  }
">

// 7. 비교연산자와 불린

document.write(1===1); // 결과 : true
document.write(1<2);  // 결과 : true

// 8. 조건문과 리팩토링

<input id="day_night" type="button" value="night" onclick="
    var target = document.querySelector('body');
    if(this.value === 'night'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      this.value = 'day';
    }
    else{
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      this.value = 'night';
    }
">
// this를 이용해서 자기 자신을 목표로 선택할 수 있다.
// var로 변수를 선언하면 반복을 최소화 할수 있다.

// 9. 배열

<script>
    var fruits = ["apple","banana","orange","grape"];
    document.write("<br>");
    document.write(fruits[0]);document.write("<br>");
    document.write(fruits[1]);document.write("<br>");
    document.write(fruits[2]);document.write("<br>");
    document.write(fruits[3]);document.write("<br>");
    fruits.push("kiwi");
    document.write(fruits[4]);document.write("<br>");
    document.write("총 과일 개수는 " + fruits.length + "입니다.");
</script>
