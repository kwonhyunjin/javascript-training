// 선택한 요소에 클래스를 추가하는 함수
function addClass(elems, classname) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.add(classname);
    newElems.push(elems[i]);
  }
  return newElems;
}
