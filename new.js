var a = document.querySelector('#b');

var square = document.querySelectorAll('td');

function clear()
{
  for (var i = 0; i < square.length; i++)
    {
    square[i].textContent = '';
    }
}

a.addEventListener('click',clear);

function mark() {
  if (this.textContent === '')
    {
      this.textContent = 'x';
    }
  else if (this.textContent === 'x') {
    this.textContent = 'o';

  }
  else {
    this.textContent = ''
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click',mark)
}
