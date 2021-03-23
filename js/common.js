// 검색창제어
const searchEl = document.querySelector('.search'); // 검색창 요소 찾기-document에서 클래스가search인 선택자를 찾아서 searchEl에 할당
const searchInputEl = searchEl.querySelector('input');// 찾은 searchEl안에서 input을 찾아서 searchInputEl할당,더효율적으로 찾기위해 찾아놓은 요소안에서 찾게하기
//검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 input에 포커스가 됬을때 명령을 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
// focused라는 클래스를 추가,focus가 됬을때 focused라는 클래스가 적용(css에서 어떤것을 할지 적용)
  searchInputEl.setAttribute('placeholder', '통합검색'); //setAttribute- html에 어떤 속성을 지정할때 사용하는 메소드,(placeholder-힌트,힌트의값)
});

//검색창에서 input요소 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
});

//올해몇년도인지 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()