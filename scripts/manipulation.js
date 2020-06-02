// 선택한 요소에 클래스를 추가하는 함수
function addClass(elems, condition) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    if (typeof condition == "string") {
      elems[i].classList.add(...condition.split(" "));
    } else if (typeof condition == "object") {
      elems[i].classList.add(...condition);
    } else if (typeof condition == "function") {
      elems[i].classList.add(condition.call(elems[i], i));
    }
    newElems.push(elems[i]);
  }
  return new Set(newElems);
}

// 선택한 요소에 클래스를 제거하는 함수
function removeClass(elems, condition) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    if (typeof condition == "string") {
      elems[i].classList.remove(...condition.split(" "));
    } else if (typeof condition == "object") {
      elems[i].classList.remove(...condition);
    } else if (typeof condition == "function") {
      elems[i].classList.remove(condition.call(elems, i));
    }
    newElems.push(elems[i]);
  }
  return new Set(newElems);
}
