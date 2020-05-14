// 현재 선택한 요소에 전달 받은 요소를 추가하는 함수
function add(nodes, selector) {
  return [...nodes, ...document.querySelectorAll(selector)];
  // const arrayNodes = Array.from(nodes);
  // const arraySelector = Array.from(elems);
  // const arrayAdd = arrayNodes.concat(arraySelector);
  // return arrayAdd;
}

// 전달 받은 요소의 자식 요소를 선택하는 함수
function children(nodes) {
  const newNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    const children = nodes[i].children;
    newNodes.push(children);
  }
  return newNodes;
}

// 선택된 요소에서 DOM 트리따라 올라가면서 최초 부모 요소를 반환하는 함수
function closest(nodes, selector) {
  const newNodes = new Set();
  for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i]);
    const node = nodes[i].closest(selector);
    console.log(node);
    newNodes.add(node);
  }
  return newNodes;
}
