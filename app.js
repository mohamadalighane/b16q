
const viewer   = document.querySelector('.iconviow'); 
const arrows   = document.querySelectorAll('.arrow'); 


const pics = [
  'images/image(1).jpeg',
  'images/image(2).jpeg',
  'images/image(3).jpeg',
  'images/image(4).jpeg',
  'images/image(5).jpeg',
  'images/image(6).jpeg',
  'images/image(7).png',
  'images/image(8).png',
  'images/image(9).png',
  'images/image(10).png',
  'images/image(11).png',
  'images/image(12).png',
  'images/image(13).png',
  'images/image(14).png',
  'images/image(15).png',
  'images/image(16).png',
  'images/image(18).png',
  'images/image(19).png',
  'images/image(20).png',
  'images/image(21).png',
  'images/image(22).png',
  'images/image(23).png',
  'images/image(24).png',
  'images/image(25).png'
];

let index = 0;         


function show(i){
  if(i < 0)             index = pics.length - 1;   
  else if(i >= pics.length) index = 0;             
  else                     index = i;

  viewer.src = pics[index];
}


arrows.forEach(btn => {
  btn.addEventListener('click', () => {
    const dir = btn.dataset.dir;   
    if(dir === 'next') show(index + 1);
    else               show(index - 1);
  });
});