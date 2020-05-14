// 현재 선택한 요소에 전달 받은 요소를 추가하는 함수
function add(nodes, selector) {
  return [...nodes, ...document.querySelectorAll(selector)];
}

// 전달 받은 요소의 자식 요소를 선택하는 함수
function children(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    const children = nodes[i].children;
    for (let j = 0; j < children.length; j++) {
      console.log(children[j]);
    }
  }
}

// 선택된 요소에서 DOM 트리따라 올라가면서 최초 부모 요소를 반환하는 함수
function closest(nodes, selector) {
  const newNodes = new Set();
  for (i = 0; i < nodes.length; i++) {
    console.log(nodes[i]);
    const node = nodes[i].closest(selector);
    console.log(node);
    newNodes.add(node);
  }
  return newNodes;
}
