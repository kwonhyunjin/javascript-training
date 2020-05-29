// 선택한 요소에 전달받은 요소를 추가로 선택하는 함수
function add(elems, selector) {
  return new Set([...elems, ...document.querySelectorAll(selector)]);
}

// 선택한 요소 바로 아래의 자식 요소를 선택하는 함수
function children(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const childElems = elems[i].children;
    const matchesElems = [...childElems].filter(function (value) {
      return value.matches(selector);
    });
    selector == null
      ? newElems.push(...childElems)
      : newElems.push(...matchesElems);
  }
  return new Set(newElems);
}

// 선택한 요소부터 DOM 트리따라 올라가며 최초 부모 요소를 검색하는 함수
function closest(elems, selector) {
  const newElems = new Set();
  for (let i = 0; i < elems.length; i++) {
    newElems.add(elems[i].closest(selector));
  }
  return newElems;
}

// 선택된 요소의 모든 자식 요소들을 반환하는 함수
function contents(elems) {
  const newNodes = [];
  for (let i = 0; i < elems.length; i++) {
    newNodes.push(...elems[i].childNodes);
  }
  return new Set(newElems);
}

// 선택한 요소 중에서 전달받은 인덱스에 해당하는 요소 선택하는 함수
function eq(elems, index) {
  const newElems = new Set();
  if (index < 0) {
    index += elems.length;
  }
  newElems.add(elems[index]);
  return newElems;
}

// 선택한 요소들 중에서 짝수 인덱스를 선택하는 함수
function even(elems) {
  const newElems = new Set();
  for (let i = 0; i < elems.length; i += 2) {
    newElems.add(elems[i]);
  }
  return newElems;
}

// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 함수
function filter(elems, selector, callback) {
  const newElems = [...elems].filter(function (elem, index) {
    return callback.call(elem, index);
  });
  return new Set(newElems);
}

// 선택한 요소의 하위 요소 중에서 전달받은 특정 요소를 찾는 함수
function find(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    newElems.push(...elems[i].querySelectorAll(selector));
  }
  return new Set(newElems);
}

// 선택한 요소들 중에서 첫 번째 요소를 선택하는 함수
function first(elems) {
  return new Set([elems[0]]);
}

// 전달받은 엘리먼트를 포함하고 있는 요소를 선택하는 함수
function has(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (elem.querySelectorAll(selector).length > 0) {
      newElems.add(elem);
    }
  }
  return new Set(newElems);
}

// 선택한 요소 중에서 전달받은 선택자에 해당하는 요소가 하나라도 존재하면 true를 반환하는 함수
function is(elems, callback) {
  const isTrue = [...elems].some(function (value, index) {
    return callback.call(value, index);
  });
  return isTrue;
}

// 선택한 요소들 중에서 마지막 요소를 선택하는 함수
function last(elems) {
  return new Set([elems[elems.length - 1]]);
}

// 선택한 요소 각각에 대하여 주어진 함수를 호출한 결과를 새로운 배열에 반환하는 함수
function map(elems, callback) {
  const newElems = [...elems].map(function (value, index) {
    return callback.call(value, index);
  });
  return new Set(newElems);
}

// 선택한 요소의 다음에 위치한 형제 요소를 선택하는 함수
function next(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const nextSiblingsElems = elems[i].nextElementSibling;
    const matchesElems = [nextSiblingsElems].filter(function (value) {
      return value.matches(selector);
    });
    selector == null
      ? newElems.push(nextSiblingsElems)
      : newElems.push(...matchesElems);
  }
  return new Set(newElems);
}

// 선택한 요소의 다음에 위치한 형제 요소를 모두 선택하는 함수
function nextAll(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const siblingsWithSelf = [...elems[i].parentElement.children];
    const matches = [
      ...siblingsWithSelf.slice(siblingsWithSelf.indexOf(elems[i]) + 1),
    ].filter(function (value) {
      return value.matches(selector);
    });
    selector == null
      ? newElems.push(
          ...siblingsWithSelf.slice(siblingsWithSelf.indexOf(elems[i]) + 1)
        )
      : newElems.push(...matches);
  }
  return new Set(newElems);
}

// 선택한 요소의 다음 형제 요소 중에서 전달받은 선택자에 해당하는 요소 바로 이전까지의 요소를 모두 선택하는 함수
function nextUntil(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const siblingsWithSelf = [...elems[i].parentElement.children];
    const sliceStartNum = siblingsWithSelf.indexOf(elems[i]) + 1;
    const sliceEndNum = siblingsWithSelf.indexOf(...selector);
    newElems.push(siblingsWithSelf.slice(sliceStartNum, sliceEndNum));
  }
  return newElems;
}

// 선택한 요소 중에서 전달받은 선택자에 해당하거나, 함수 호출 결과가 true인 요소를 제외한 나머지 요소를 모두 선택하는 함수
function not(elems, selector) {
  const newElems = new Set();
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (!elem.matches(selector)) {
      newElems.add(elem);
    }
  }
  return newElems;
}

// 선택한 요소들 중에서 홀수 인덱스를 선택하는 함수
function odd(elems) {
  const newElems = new Set();
  for (let i = 1; i < elems.length; i += 2) {
    newElems.add(elems[i]);
  }
  return newElems;
}

// 선택한 요소의 부모 요소들 중 위치 요소(positioned)를 기준으로 가장 가까운 요소를 찾아서 반환하는 함수
function offsetParent(elems) {
  for (let i = 0; i < elems.length; i++) {
    return new Set([elems[i].offsetParent]);
  }
}

// 선택한 요소 바로 위에 부모 요소를 선택하는 함수
function parent(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const parentElems = elems[i].parentElement;
    const matchesElems = [parentElems].filter(function (value) {
      return value.matches(selector);
    });
    selector == null
      ? newElems.push(parentElems)
      : newElems.push(...matchesElems);
  }
  return new Set(newElems);
}

// 선택한 요소의 상위 요소를 모두 선택하는 함수(선택자가 있다면 전달받은 선택자에 해당하는 상위 요소 선택)
function parents(elems, selector) {
  const newElems = new Set();
  for (let i = 0; i < elems.length; i++) {
    let parentElem = elems[i].parentElement;
    while (parentElem != null) {
      if (selector == null || parentElem.matches(selector)) {
        newElems.add(parentElem);
      }
      parentElem = parentElem.parentElement;
    }
  }
  return newElems;
}

// 선택한 요소의 상위 요소들 중에서 전달받은 선택자에 해당하는 요소 바로 이전까지의 요소를 모두 선택하는 함수
function parentsUntil(elems, end, selector) {
  const newElems = new Set();
  for (let i = 0; i < elems.length; i++) {
    let parentElem = elems[i].parentElement;
    while (parentElem != null) {
      if (parentElem.matches(end)) {
        return newElems;
      }
      if (selector == null || parentElem.matches(selector)) {
        newElems.add(parentElem);
      }
      parentElem = parentElem.parentElement;
    }
  }
  return newElems;
}

// 선택한 요소의 이전에 위치한 형제 요소를 선택하는 함수
function prev(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const prevSiblingElems = elems[i].previousElementSibling;
    const matchesElems = [prevSiblingElems].filter(function (value) {
      return value.matches(selector);
    });
    selector == null
      ? newElems.push(prevSiblingElems)
      : newElems.push(...matchesElems);
  }
  return new Set(newElems);
}

// 선택한 요소의 이전에 위치한 형제 요소를 모두 선택하는 함수
function prevAll(elems) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const siblingsWithSelf = [...elems[i].parentElement.children];
    const sliceNum = siblingsWithSelf.indexOf(elems[i]);
    newElems.push(siblingsWithSelf.slice(0, sliceNum));
  }
  return newElems;
}

// 선택한 요소의 이전 형제 요소 중에서 전달받은 선택자에 해당하는 요소 바로 다음까지의 요소를 모두 선택하는 함수
function prevUntil(elems, selector) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    const siblingsWithSelf = [...elems[i].parentElement.children];
    const sliceStartNum = siblingsWithSelf.indexOf(...selector) + 1;
    const sliceEndNum = siblingsWithSelf.indexOf(elems[i]);
    newElems.push(siblingsWithSelf.slice(sliceStartNum, sliceEndNum));
  }
  return newElems;
}

// 선택한 요소 자신을 제외한 형제 요소를 모두 선택하는 함수
function siblings(elems) {
  const newElems = new Set();
  for (let i = 0; i < elems.length; i++) {
    const siblingsWithSelf = elems[i].parentElement.children;
    for (let j = 0; j < siblingsWithSelf.length; j++) {
      if (elems[i] !== siblingsWithSelf[j]) {
        newElems.add(siblingsWithSelf[j]);
      }
    }
  }
  return newElems;
}

// 전달받은 인자의 첫 번째 요소부터 두 번째 요소 바로 전의 요소들을 선택해 새로운 배열로 반환하는 함수
function slice(elems, start, end) {
  return new Set([...elems].slice(start, end));
}
