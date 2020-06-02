// 선택한 요소에 클래스를 추가하는 함수
function addClass(elems, condition) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    if (typeof condition == "string") {
      elems[i].classList.add(condition);
    } else if (typeof condition == "function") {
      elems[i].classList.add(condition.call(elems[i], i));
    }
    newElems.push(elems[i]);
  }
  return new Set(newElems);
}
