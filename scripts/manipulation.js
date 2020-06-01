// 선택한 요소에 클래스를 추가하는 함수
function addClass(elems, callback) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.add(callback.call(elems[i], i));
    newElems.push(elems[i]);
  }
  return newElems;
}
