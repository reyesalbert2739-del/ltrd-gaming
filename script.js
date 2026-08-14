const gate = document.querySelector('#joinGate');
const site = document.querySelector('#site');
const toast = document.querySelector('#toast');

document.querySelector('#joinYes').addEventListener('click', () => {
  gate.style.opacity = '0';
  gate.style.transform = 'translateY(-14px)';
  gate.style.transition = '.45s ease';
  setTimeout(() => { gate.hidden = true; site.hidden = false; window.scrollTo(0, 0); }, 430);
});
document.querySelector('#joinNo').addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
});
