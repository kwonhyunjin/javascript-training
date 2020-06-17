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
function after(elems, nodes) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof nodes == "string") {
      elems[i].insertAdjacentHTML("afterend", nodes);
    } else if (nodes instanceof Array) {
      for (let [key, value] of Object.entries(nodes)) {
        if (typeof value == "string") {
          elems[i].insertAdjacentHTML("afterend", value);
        } else if (typeof value == "object") {
          const nodeVal = value instanceof Node ? [value] : [...value];
          for (let j = 0; j < nodeVal.length; j++) {
            nodeVal[j].remove();
          }
          elems[i].after(
            ...nodeVal.map((value) => {
              return value.cloneNode(true);
            })
          );
        }
      }
    } else if (typeof nodes == "object") {
      const nodeArr = nodes instanceof Node ? [nodes] : [...nodes];
      for (let j = 0; j < nodeArr.length; j++) {
        nodeArr[j].remove();
      }
      elems[i].after(
        ...nodeArr.map((value) => {
          return value.cloneNode(true);
        })
      );
    } else {
      elems[i].after(nodes.call(elems[i], i));
    }
  }
}

// 선택한 요소의 마지막 자식 요소로 추가하는 함수
function append(elems, nodes) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof nodes == "string") {
      elems[i].insertAdjacentHTML("beforeend", nodes);
    } else if (nodes instanceof Array) {
      for (let [key, value] of Object.entries(nodes)) {
        if (typeof value == "string") {
          elems[i].insertAdjacentHTML("beforeend", value);
        } else if (typeof value == "object") {
          const nodeVal = value instanceof Node ? [value] : [...value];
          for (let j = 0; j < nodeVal.length; j++) {
            nodeVal[j].remove();
          }
          elems[i].append(
            ...nodeVal.map((value) => {
              return value.cloneNode(true);
            })
          );
        }
      }
    } else if (typeof nodes == "object") {
      const nodeArr = nodes instanceof Node ? [nodes] : [...nodes];
      for (let j = 0; j < nodeArr.length; j++) {
        nodeArr[j].remove();
      }
      elems[i].append(
        ...nodeArr.map((value) => {
          return value.cloneNode(true);
        })
      );
    } else {
      elems[i].append(nodes.call(elems[i], i));
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

// 선택한 요소 앞에 다른 곳에 있는 요소를 이동시키는 함수
function before(elems, nodes) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof nodes == "string") {
      elems[i].insertAdjacentHTML("beforebegin", nodes);
    } else if (nodes instanceof Array) {
      for (let [key, value] of Object.entries(nodes)) {
        if (typeof value == "string") {
          elems[i].insertAdjacentHTML("beforebegin", value);
        } else if (typeof value == "object") {
          const nodeVal = value instanceof Node ? [value] : [...value];
          for (let j = 0; j < nodeVal.length; j++) {
            nodeVal[j].remove();
          }
          elems[i].before(
            ...nodeVal.map((value) => {
              return value.cloneNode(true);
            })
          );
        }
      }
    } else if (typeof nodes == "object") {
      const nodeArr = nodes instanceof Node ? [nodes] : [...nodes];
      for (j = 0; j < nodeArr.length; j++) {
        nodeArr[j].remove();
      }
      elems[i].before(
        ...nodeArr.map((value) => {
          return value.cloneNode(true);
        })
      );
    } else {
      elems[i].before(nodes.call(elems[i], i));
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

// 선택한 요소를 문서에서 제거하는 함수(제거한 요소를 저장하여 다시 사용할 수 있다.)
function detach(elems) {
  const newElems = [];
  for (let i = 0; i < elems.length; i++) {
    elems[i].parentNode.removeChild(elems[i]);
    newElems.push(elems[i]);
  }
  return new Set(newElems);
}

// 선택한 요소의 내용을 지우는 함수(태그는 그대로남아있다.)
function empty(elems) {
  for (let i = 0; i < elems.length; i++) {
    elems[i].innerHTML = "";
  }
}

// 선택한 요소에 지정한 클래스가 하나라도 있으면 true를 반환하는 함수
function hasClass(elems, className) {
  for (let i = 0; i < elems.length; i++) {
    const isTrue = [...elems].some(function (value) {
      return value.classList.contains(className);
    });
    return isTrue;
  }
}

// 선택한 요소의 첫 번재 요소 높이를 반환하거나, 선택된 요소의 높이를 인수로 전달받은 값으로 설정하는 함수
function height(elems, value) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof value == "string") {
      elems[i].style.height = value;
    } else if (typeof value == "number") {
      elems[i].style.height = value + "px";
    } else if (typeof value == "function") {
      elems[i].style.height = value.call(elems[i], i) + "px";
    } else {
      return parseInt(window.getComputedStyle(elems[0], null).height);
    }
  }
}

// 선택한 요소의 padding 영역을 포함한 높이를 반환(첫 번째 요소만)하거나, 인수로 전달받은 값으로 높이를 설정하는 함수
function innerHeight(elems, value) {
  for (let i = 0; i < elems.length; i++) {
    const paddingHeight =
      parseInt(window.getComputedStyle(elems[i], null).paddingTop) +
      parseInt(window.getComputedStyle(elems[i], null).paddingBottom);
    if (typeof value == "string") {
      elems[i].style.height = parseInt(value) - paddingHeight + "px";
    } else if (typeof value == "number") {
      elems[i].style.height = value - paddingHeight + "px";
    } else if (typeof value == "function") {
      elems[i].style.height = value.call(elems[i], i, paddingHeight) + "px";
    } else {
      return (
        elems[0].offsetHeight -
        parseInt(window.getComputedStyle(elems[0], null).borderTop) -
        parseInt(window.getComputedStyle(elems[0], null).borderBottom)
      );
    }
  }
}
// 선택한 요소의 padding 영역을 포함한 너비를 반환(첫 번째 요소만)하거나, 인수로 전달받은 값으로 너비를 설정하는 함수
function innerWidth(elems, value) {
  for (let i = 0; i < elems.length; i++) {
    const paddingWidth =
      parseInt(window.getComputedStyle(elems[i], null).paddingRight) +
      parseInt(window.getComputedStyle(elems[i], null).paddingLeft);
    if (typeof value == "string") {
      elems[i].style.width = parseInt(value) - paddingWidth + "px";
    } else if (typeof value == "number") {
      elems[i].style.width = value - paddingWidth + "px";
    } else if (typeof value == "function") {
      elems[i].style.width = value.call(elems[i], i, paddingWidth) + "px";
    } else {
      return (
        elems[0].offsetWidth -
        parseInt(window.getComputedStyle(elems[0], null).borderLeft) -
        parseInt(window.getComputedStyle(elems[0], null).borderRight)
      );
    }
  }
}

// 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시키는 함수
function offset(elems, coordinates) {
  // @todo
  //     return {
  //       top: elems[0].getBoundingClientRect().top,
  //       left: elems[0].getBoundingClientRect().left,
  //     };
  //   }
  // }
}

// 선택한 요소의 padding/border 영역을 포함(margin 불포함)한 높이를 반환하거나, 인수로 전달받은 값으로 높이를 설정하는 함수
function outerHeight(elems, value, includeMargin = false) {
  for (let i = 0; i < elems.length; i++) {
    const paddingHeight =
      parseInt(window.getComputedStyle(elems[i], null).paddingTop) +
      parseInt(window.getComputedStyle(elems[i], null).paddingBottom);
    const marginHeight =
      parseInt(window.getComputedStyle(elems[i], null).marginTop) +
      parseInt(window.getComputedStyle(elems[i], null).marginBottom);
    const borderHeight =
      parseInt(window.getComputedStyle(elems[i], null).borderTop) +
      parseInt(window.getComputedStyle(elems[i], null).borderBottom);
    if (typeof value == "number") {
      if (includeMargin) {
        elems[i].style.height =
          value - paddingHeight - marginHeight - borderHeight + "px";
      } else {
        elems[i].style.height = value - paddingHeight - borderHeight + "px";
      }
    } else if (typeof value == "string") {
      if (includeMargin) {
        elems[i].style.height =
          parseInt(value) - paddingHeight - marginHeight - borderHeight + "px";
      } else {
        elems[i].style.height =
          parseInt(value) - paddingHeight - borderHeight + "px";
      }
    } else if (typeof value == "function") {
      elems[i].style.height = value.call(elems[i], i) + "px";
    } else if (value) {
      includeMargin = value;
      if (includeMargin) {
        return (
          elems[0].offsetHeight +
          parseInt(window.getComputedStyle(elems[0], null).marginLeft) +
          parseInt(window.getComputedStyle(elems[0], null).marginRight)
        );
      } else {
        return elems[0].offsetHeight;
      }
    } else {
      includeMargin = value;
      return elems[0].offsetHeight;
    }
  }
}

// 선택한 요소의 padding/border 영역을 포함(margin 불포함)한 너비를 반환하거나, 인수로 전달받은 값으로 너비를 설정하는 함수
function outerWidth(elems, value, includeMargin = false) {
  for (let i = 0; i < elems.length; i++) {
    const paddingWidth =
      parseInt(window.getComputedStyle(elems[i], null).paddingLeft) +
      parseInt(window.getComputedStyle(elems[i], null).paddingRight);
    const marginWidth =
      parseInt(window.getComputedStyle(elems[i], null).marginLeft) +
      parseInt(window.getComputedStyle(elems[i], null).marginRight);
    const borderWidth =
      parseInt(window.getComputedStyle(elems[i], null).borderLeft) +
      parseInt(window.getComputedStyle(elems[i], null).borderRight);
    if (typeof value == "number") {
      if (includeMargin) {
        elems[i].style.width =
          value - paddingWidth - borderWidth - marginWidth + "px";
      } else {
        elems[i].style.width = value - paddingWidth - borderWidth + "px";
      }
    } else if (typeof value == "string") {
      if (includeMargin) {
        elems[i].style.width =
          parseInt(value) - paddingWidth - borderWidth - marginWidth + "px";
      } else {
        elems[i].style.width =
          parseInt(value) - paddingWidth - borderWidth + "px";
      }
    } else if (typeof value == "function") {
      elems[i].style.width = value.call(elems[i], i);
    } else if (value) {
      includeMargin = value;
      if (includeMargin) {
        return (
          elems[0].offsetWidth +
          parseInt(window.getComputedStyle(elems[0], null).marginLeft) +
          parseInt(window.getComputedStyle(elems[0], null).marginRight)
        );
      } else {
        return elems[0].offsetWidth;
      }
    } else {
      includeMargin = value;
      return elems[0].offsetWidth;
    }
  }
}

// 선택한 요소의 첫 번째 자식 요소로 추가하는 함수
function prepend(elems, nodes) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof nodes == "string") {
      elems[i].insertAdjacentHTML("afterbegin", nodes);
    } else if (nodes instanceof Array) {
      for (let [key, value] of Object.entries(nodes)) {
        if (typeof value == "string") {
          elems[i].insertAdjacentHTML("afterbegin", value);
        }
        if (typeof value == "object") {
          const nodeVal = value instanceof Node ? [value] : [...value];
          for (let j = 0; j < nodeVal.length; j++) {
            nodeVal[j].remove();
          }
          elems[i].prepend(
            ...nodeVal.map((value) => {
              return value.cloneNode(true);
            })
          );
        }
      }
    } else if (typeof nodes == "object") {
      const nodeArr = nodes instanceof Node ? [nodes] : [...nodes];
      for (j = 0; j < nodeArr.length; j++) {
        nodeArr[j].remove();
      }
      elems[i].prepend(
        ...nodeArr.map((value) => {
          return value.cloneNode(true);
        })
      );
    } else {
      elems[i].prepend(nodes.call(elems[i], i));
    }
  }
}

// 선택한 요소를 문서에서 제거하는 함수
function remove(elems) {
  for (let i = 0; i < elems.length; i++) {
    elems[i].parentNode.removeChild(elems[i]);
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

// 선택한 요소의 첫 번재 요소 너비를 반환하거나, 선택된 요소의 너비를 인수로 전달받은 값으로 설정하는 함수
function width(elems, value) {
  for (let i = 0; i < elems.length; i++) {
    if (typeof value == "string") {
      elems[i].style.width = value;
    } else if (typeof value == "number") {
      elems[i].style.width = value + "px";
    } else if (typeof value == "function") {
      elems[i].style.width = value.call(elems[i], i) + "px";
    } else {
      return parseInt(window.getComputedStyle(elems[0], null).width);
    }
  }
}
