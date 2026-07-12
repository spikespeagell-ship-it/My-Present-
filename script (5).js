onload = () => { document.body.classList.remove("container"); };
function showLetter() {
  document.getElementById('screen-flowers').style.display = 'none';
  document.getElementById('screen-letter').style.display = 'flex';
}
function showFlowers() {
  document.getElementById('screen-letter').style.display = 'none';
  document.getElementById('screen-flowers').style.display = 'block';
}