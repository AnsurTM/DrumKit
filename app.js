// alert("test");

var btn = document.querySelectorAll("button"); // 7개의 버튼들을 배열로 변수에 저장


for(var i=0; i<btn.length; i++){
    btn[i].addEventListener("click", btnClick)
}
// 마우스 반응

document.addEventListener("keypress", kClick);  // 키보드 반응

// 키보드 이벤트에 이벤트 객체(매개변수)의 key값으로 어떤키인지 확인
function kClick(event){
    console.log(event.key);
    auPlay(event.key);
}

function btnClick(){
    console.log(this.textContent);  // this : 해당되는 버튼 객체
                                    // this.textContent : 해당 객체의 텍스트 내용
    auPlay(this.textContent);
}

function auPlay(key){
    switch(key){
        case "w" : 
            var audio=new Audio("sounds/tom-1.mp3");
            break;
        case "a" : 
            var audio=new Audio("sounds/tom-2.mp3");
            break;
        case "s" : 
            var audio=new Audio("sounds/tom-3.mp3");
            break;
        case "d" : 
            var audio=new Audio("sounds/tom-4.mp3");
            break;
        case "j" : 
            var audio=new Audio("sounds/snare.mp3");
            break;
        case "k" : 
            var audio=new Audio("sounds/crash.mp3");
            break;
        case "l" : 
            var audio=new Audio("sounds/kick-bass.mp3");
            break;
        default :
            return;
    }
    audio.play();
    animationDrum(key);
}

function animationDrum(key){
    // 키값의 버튼을 선택
    var el = document.querySelector("." + key);
    // classList.add(클래스) : 클래스 삽입
    // classList.remove(클래스) : 클래스 제거
    // classList.contains(클래스) : 클래스가 존재하는지 체크
    el.classList.add('pressed'); // pressed 클래스 추가(효과는 CSS파일의 .pressed 확인)

    // 설정시간 이후에 다시 pressed 클래스 제거
    // setTimeout(함수, 지연시간(단위 : 1/1000s))
    setTimeout(function(){
        el.classList.remove("pressed");
    }, 100);
}