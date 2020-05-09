// 전달 받은 엘리먼트들의 개수만큼 콜백 함수를 반복 실행하는 함수
function each(nodes, callback) {
  for (let i = 0; i < nodes.length; i++) {
    callback.call(nodes[i], i);
  }
}
