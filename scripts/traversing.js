// 선택한 요소에 전달 받은 요소를 추가로 선택하는 함수
function add(nodes, selector) {
  return [...nodes, ...document.querySelectorAll(selector)];
}

// 전달 받은 요소의 자식 요소를 선택하는 함수
function children(nodes) {
  const newElements = [];
  for (let i = 0; i < nodes.length; i++) {
    const children = nodes[i].children;
    newElements.push(children);
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
  const newNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    const childNodes = nodes[i].childNodes;
    newNodes.push(childNodes);
  }
  return newNodes;
}

// 선택한 요소 중에서 전달 받은 인덱스에 해당하는 요소 선택하는 함수
function eq(nodes, index) {
  const newElement = [];
  if (index < 0) {
    index += nodes.length;
  }
  const eqIndex = nodes[index];
  newElement.push(eqIndex);
  return newElement;
}

// 선택한 요소들 중에서 짝수 인덱스를 선택하는 함수
function even(nodes) {
  const newNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    if (i % 2 == 0) {
      const evenNodes = nodes[i];
      newNodes.push(evenNodes);
    }
  }
  return newNodes;
}

// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환하는 함수
function filter(nodes, callback) {
  const arrayNodes = [...nodes];
  const filterNodes = arrayNodes.filter(function (element, index, arr) {
    return callback.call(element, index);
  });
  return filterNodes;
}

// find
function find(nodes, selector) {}

// 선택한 요소들 중에서 첫 번째 요소를 선택하는 함수
function first(nodes) {
  const newNode = [];
  for (let i = 0; i < nodes.length; i++) {
    if (i == 0) {
      newNode.push(nodes[i]);
    }
  }
  return newNode;
}

// 선택한 요소들 중에서 마지막 요소를 선택하는 함수
function last(nodes) {
  const newNode = [];
  for (let i = 0; i < nodes.length; i++) {
    const lastNum = nodes.length - 1;
    if (i == lastNum) {
      newNode.push(nodes[i]);
    }
  }
  return newNode;
}
