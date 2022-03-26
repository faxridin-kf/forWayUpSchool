const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const contentin = document.querySelectorAll('.contentin');
const miniTabs = document.getElementById('tabs2');
function changeClass(elem) {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active')
  }
  elem.classList.add('active')
}
function getTab(e) {
  const currentTab = e.target.dataset.btn
  console.log(currentTab)
  changeClass(e.target)
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove('active')
    if (content[i].dataset.content === currentTab) {
      content[i].classList.add("active")
    }
  }

}

function changeClassForIn(elem) {
  for (let i = 0; i < miniTabs.children.length; i++) {
    miniTabs.children[i].classList.remove('active')
  }
  elem.classList.add('active')
}

function getTabForIn(e) {
  const currentTabSecond = e.target.dataset.btnin
  // console.log(currentTab, currentTabSecond);
  console.log(currentTabSecond)
  changeClassForIn(e.target)
  for (let i = 0; i < contentin.length; i++) {
    contentin[i].classList.remove('active')
    if (contentin[i].dataset.contentin === currentTabSecond) {
      contentin[i].classList.add("active")
    }
  }

}
tabs.addEventListener('click', getTab)
miniTabs.addEventListener('click', getTabForIn)
