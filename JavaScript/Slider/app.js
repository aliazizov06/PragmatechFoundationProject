let bigImage = document.querySelector('#big-image img')
function changeImage(elem){
   let imageSource = elem.getAttribute('src');
   bigImage.setAttribute('src',imageSource)
}