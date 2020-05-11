// 기존 요소에 새로운 요소를 추가하는 함수
function add(nodes, selector) {
  const colors = "blue";
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.color = colors;
    for (let i = 0; i < selector.length; i++) {
      selector[i].style.color = colors;
    }
  }
}
