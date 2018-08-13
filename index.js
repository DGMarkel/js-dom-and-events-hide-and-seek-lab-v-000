function getFirstSelector(arg) {
  return document.querySelector(arg);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('ul.ranked-list li')
  for(let i=0;i<rank.length;i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
