// 현재 선택한 요소에 전달 받은 요소를 추가하는 함수
function add(nodes, selector) {
  const arrayNodes = Array.prototype.slice.call(nodes);
  const arraySelector = Array.prototype.slice.call(selector);
  arrayNodes.push(...arraySelector);
  for (let i = 0; i < arrayNodes.length; i++) {
    const bgColor = "#eda0c7";
    arrayNodes[i].style.backgroundColor = bgColor;
    console.log(arrayNodes[i]);
  }
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
function closest(nodes) {}
