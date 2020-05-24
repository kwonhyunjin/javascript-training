// 선택한 요소에 전달 받은 요소를 추가로 선택하는 함수
function add(nodes, selector) {
  return [...nodes, ...document.querySelectorAll(selector)];
}

// 전달 받은 요소의 자식 요소를 선택하는 함수
function children(nodes) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const children = nodes[i].children;
    newElements.add(children);
  }
  return newElements;
}

// 선택한 요소부터 DOM 트리따라 올라가며 최초 부모 요소를 검색하는 함수
function closest(nodes, selector) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i].closest(selector);
    newElements.add(node);
  }
  return [...newElements];
}

// 선택된 요소의 모든 자식 요소들을 반환하는 함수
function contents(nodes) {
  const newNodes = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const childNodes = nodes[i].childNodes;
    newNodes.add(childNodes);
  }
  return newNodes;
}

// 선택한 요소 중에서 전달 받은 인덱스에 해당하는 요소 선택하는 함수
function eq(nodes, index) {
  const newElement = new Set();
  if (index < 0) {
    index += nodes.length;
  }
  const eqIndex = nodes[index];
  newElement.add(eqIndex);
  return newElement;
}

// 선택한 요소들 중에서 짝수 인덱스를 선택하는 함수
function even(nodes) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    if (i % 2 == 0) {
      const evenNodes = nodes[i];
      newElements.add(evenNodes);
    }
  }
  return newElements;
}

// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 함수
function filter(nodes, callback) {
  const arrayNodes = [...nodes];
  const filterNodes = arrayNodes.filter(function (element, index) {
    return callback.call(element, index);
  });
  return new Set(filterNodes);
}

// 선택한 요소의 하위 요소 중에서 전달 받은 특정 요소를 찾는 함수
function find(nodes, selector) {
  const newNodes = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const elems = nodes[i].querySelectorAll(selector);
    newNodes.add(elems);
  }
  return newNodes;
}

// 선택한 요소들 중에서 첫 번째 요소를 선택하는 함수
function first(nodes) {
  const newElement = new Set();
  for (let i = 0; i < nodes.length; i++) {
    if (i == 0) {
      newElement.add(nodes[i]);
    }
  }
  return newElement;
}

// 전달 받은 엘리먼트를 포함하고 있는 요소를 선택하는 함수
function has(nodes, selector) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].querySelectorAll(selector).length > 0) {
      newElements.add(nodes[i]);
    }
  }
  return newElements;
}

// 선택한 요소 중에서 전달 받은 선택자에 해당하는 요소가 하나라도 존재하면 true를 반환하는 함수
function is(nodes, selector) {
  const newArray = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const isResult = nodes[i].matches(selector);
    newArray.add(isResult);
  }
  return newArray;
}

// 선택한 요소들 중에서 마지막 요소를 선택하는 함수
function last(nodes) {
  const newElement = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const lastNum = nodes.length - 1;
    if (i == lastNum) {
      newElement.add(nodes[i]);
    }
  }
  return newElement;
}

// 선택한 요소 각각에 대하여 주어진 함수를 호출한 결과를 새로운 배열에 반환하는 함수
function map(nodes, callback) {
  const arrayNodes = [...nodes];
  const mapNodes = arrayNodes.map(function (value, index, array) {
    return callback.call(value, index);
  });
  return new Set(mapNodes);
}

// 선택한 요소의 다음에 위치한 형제 요소를 선택하는 함수
function next(nodes) {
  const newElement = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const nextNode = nodes[i].nextElementSibling;
    newElement.add(nextNode);
  }
  return newElement;
}

// 선택한 요소 중에서 전달 받은 선택자에 해당하거나, 함수 호출 결과가 true인 요소를 제외한 나머지 요소를 모두 선택하는 함수
function not(nodes, selector) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i].matches(selector)) {
      newElements.add(nodes[i]);
    }
  }
  return newElements;
}

// 선택한 요소들 중에서 홀수 인덱스를 선택하는 함수
function odd(nodes) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    if (i % 2 == 1) {
      const oddNodes = nodes[i];
      newElements.add(oddNodes);
    }
  }
  return newElements;
}

// 전달 받은 부모 요소를 선택하는 함수
function parent(nodes) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const parent = nodes[i].parentElement;
    newElements.add(parent);
  }
  return newElements;
}

// 선택한 요소의 조상 요소를 모두 선택하는 함수
function parents(nodes, selector) {
  // @todo
}

// 선택한 요소의 이전에 위치한 형제 요소를 선택하는 함수
function prev(nodes) {
  const newElement = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const prevNode = nodes[i].previousElementSibling;
    newElement.add(prevNode);
  }
  return newElement;
}

// 선택한 요소 자신을 제외한 형제 요소를 모두 선택하는 함수
function siblings(nodes) {
  const newElements = new Set();
  for (let i = 0; i < nodes.length; i++) {
    const node = [...nodes[i].parentElement.children];
    for (let j = 0; j < node.length; j++) {
      if (nodes[i] !== node[j]) {
        newElements.add(node[j]);
      }
    }
  }
  return newElements;
}
