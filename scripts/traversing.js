// 현재 선택된 요소에 새로 전달 받은 요소를 추가하는 함수(새로운 요소를 추가하는 것이 아님)
function add(nodes, selector) {
  const colors = "blue";
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.color = colors;
    console.log(nodes[i]);
    for (let j = 0; j < selector.length; j++) {
      selector[j].style.color = colors;
      console.log(selector[j]);
    }
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
