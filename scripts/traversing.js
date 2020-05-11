// 현재 요소에 새로 전달 받은 요소를 추가하는 함수
function add(nodes, selector) {
  const colors = "blue";
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.color = colors;
    for (let j = 0; j < selector.length; j++) {
      selector[j].style.color = colors;
    }
  }
}

// 현재 요소의 이전 요소를 찾아 효과를 추가하는 함수
function addBack(nodes) {
  const border = "1px solid #FFB2D9";
  for (i = 0; i < nodes.length; i++) {
    nodes[i].style.border = border;
    const parent = nodes[i].parentElement;
    parent.style.border = border;
    console.log(parent);
  }
}
