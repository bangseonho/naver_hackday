// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

$(function() {
    $( "#Datepicker" ).datepicker({
        numberOfMonths: [1,2],
        dateFormat: "yymmdd",
        nextText: '다음 달',
        prevText: '이전 달',
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    });
});

$(function() {
    $( "#Datepicker2" ).datepicker({
        numberOfMonths: [1,2],
        dateFormat: "yymmdd",
        nextText: '다음 달',
        prevText: '이전 달',
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
        monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    });
});

var countries = ["인천","대구","PUS","제주","GMP","여수","광주","무안","가고시마","고마쓰","구마모토","구시로","기타큐슈","나가사키","나고야","니가카","다카마쓰","도야마","도쿄","마쓰야마","메만베쓰","미야자키","사가","삿포로","센다이","시즈오카","아사히카와","아오모리","오사카","오이타","오카야마","오키나와","요나고","이바라키","하코다테","후쿠오카","히로시마","광저우","구이린","구이양","난닝","난징","다롄","무단장","북경","상하이","석가장","선양","선전","시안","싼야","옌지","옌청","옌타이","우루무치","우시","우한","웨이하이","위엔저우","자무쓰","정저우","지난","창사","창춘","청두","총칭","칭다오","쿤밍","톈진","퉁치","하문","하얼빈","하이커우","항저우","허페이","울란바토르","마카오","홍콩","가오슝","타이베이","타이쭝","비엔티안","푸에르토프린세사","마닐라","세부","클라크필드","타그빌라탄","조호바루","코타키나발루","쿠알라룸푸르","페낭","싱가포르","냐짱","다낭","푸국","하노이","하이퐁","호찌민","끄라비","방콕","치앙마이","푸케트","반다르스리브가완","덴파사르","자카르타","양곤","씨엠립","프놈펜","말레","델리","뭄바이","콜롬보","카투만두","텔아비브","도하","두바이","아부디바","뉴욕","댈러스","라스베이거스","로스엔젤레스","샌프란시스코","시애틀","시카고","신시내티","애틀랜타","오클랜드","워싱턴","밴쿠버","토론토","멕시코시티","산티아고","괌","사이판","호놀룰루","코로르","브리즈번","시드니","나디","프라하","비엔나","룩셈부르크","스톡홀름","런던","로마","밀라노","베니스","이스탄불","오슬로","바르샤바","파리","바젤","취리히","마드리드","바르셀로나","사라고사","암스테르담","브뤼셀","라이프치이","뮌헨","쾰른","프랑크푸르트","헬싱키","세인트페테르부르크","노보시비르스크","모스크바","블라디보스토크","사할린","야쿠츠크","울란우데","이르쿠츠크","하바로프스크","바쿠","나보이","타슈켄트","아스타나","알마티","아디스아바바"];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

