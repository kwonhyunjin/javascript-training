// 선택한 요소에 클래스를 추가하는 함수
function addClass(elems, className) {
  for (let i = 0; i < elems.length; i++) {
    if (className instanceof String) {
      elems[i].classList.add(...className.split(" "));
    } else if (className instanceof Function) {
      elems[i].classList.add(className.call(elems[i], i));
    } else elems[i].classList.add(...className);
  }
}

// 선택한 요소 뒤에 다른 곳에 있는 요소를 이동시키는 함수
function after(elems, nodes, clone = false) {
  const nodeArr =
    nodes instanceof Node
      ? [nodes]
      : nodes instanceof NodeList
      ? [...nodes]
      : [...document.querySelectorAll(nodes)];

  if (clone) {
    for (let i = 0; i < nodeArr.length; i++) {
      nodeArr[i].remove();
    }
    for (let i = 0; i < elems.length; i++) {
      elems[i].after(
        ...nodeArr.map((value) => {
          return value.cloneNode(true);
        })
      );
    }
  } else {
    elems[elems.length - 1].after(...nodeArr);
  }
}

function afterHTML(elems, nodes) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof nodes == "string") {
      elems[i].insertAdjacentHTML("afterend", nodes);
    } else {
      elems[i].after(nodes.call(elems[i], i));
    }
  }
}

// 선택한 요소들 중에서 제일 처음 요소의 속성의 값을 가져오거나 하나 이상의 속성을 추가하는 함수
function attr(elems, attributeName, value) {
  for (let i = 0; i < elems.length; i++) {
    if (value == null) {
      if (attributeName instanceof Object) {
        for (let [key, value] of Object.entries(attributeName)) {
          elems[i].setAttribute(key, value);
        }
      } else {
        return elems[0].getAttribute(attributeName);
      }
    } else {
      if (value instanceof Function) {
        elems[i].setAttribute(attributeName, value.call(elems[i], i));
      } else {
        elems[i].setAttribute(attributeName, value);
      }
    }
  }
}

// 선택한 요소와 일치하는 요소 집합을 복제(deep copy)하는 함수
function clone(elems) {
  for (let i = 0; i < elems.length; i++) {
    document.body.appendChild(elems[i].cloneNode(true));
  }
}

// 선택한 요소의 css 속성값을 가져오거나 style 속성을 추가하는 함수
function css(elems, propertyName, value) {
  const newStr = new Set();
  for (let i = 0; i < elems.length; i++) {
    if (value == null) {
      if (propertyName instanceof String || value == null) {
        return window.getComputedStyle(elems[i]).getPropertyValue(propertyName);
      }
      if (propertyName instanceof Object) {
        for (let [key, value] of Object.entries(propertyName)) {
          elems[i].style.setProperty(key, value);
        }
      }
      if (propertyName instanceof Array) {
        for (let [key, value] of Object.entries(propertyName)) {
          newStr.add(window.getComputedStyle(elems[i]).getPropertyValue(value));
        }
        return newStr;
      }
    }
    if (value != null || value instanceof (String, Number)) {
      elems[i].style.setProperty(propertyName, value);
    }
    if (value instanceof Function) {
      elems[i].style.setProperty(propertyName, value.call(elems[i], i));
    }
  }
}

// 선택한 요소에 클래스를 제거하는 함수
function removeClass(elems, className) {
  for (let i = 0; i < elems.length; i++) {
    if (className instanceof String) {
      elems[i].classList.remove(...className.split(" "));
    } else if (className instanceof Function) {
      elems[i].classList.remove(className.call(elems[i], i));
    } else elems[i].classList.remove(...className);
  }
}
