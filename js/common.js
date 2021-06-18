// 공통적으로 사용하는 JS
// Header
const searchEl = document.querySelector('.search');
// searchEl 안에서 input 요소를 찾게 됨. document => HTML
const searchInputEl = searchEl.querySelector('input');

// 클릭이라는 이벤트가 발생되면 익명함수 핸들러 작동.
searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});
// search focus
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // HTML 속성을 지정
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// search blur
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// Footer
// 년도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021