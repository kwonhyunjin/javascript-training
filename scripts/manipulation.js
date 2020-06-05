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

// 선택한 요소 뒤에 새 요소를 추가하거나, 다른 곳에 있는 요소를 이동시키는 함수
function after(elems, condition) {
  // @todo
}

// 선택한 요소들 중에서 제일 처음 요소의 속성의 값을 가져오거나 하나 이상의 속성을 추가하는 함수
function attr(elems, attributeName, condition) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    if (typeof condition == "string") {
      elems[i].setAttribute(attributeName, condition);
    } else if (typeof condition == "function") {
      elems[i].setAttribute(attributeName, condition.call(elems[i], i));
    } else {
      return elems[0].getAttribute(attributeName);
    }
    newElems.push(elems[i]);
  }
  return newElems;
}

// 선택한 요소와 일치하는 요소 집합을 복제(deep copy)하는 함수
function clone(elems) {
  for (let i = 0; i < elems.length; i++) {
    const copy = elems[i].cloneNode(true);
    return copy;
  }
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
