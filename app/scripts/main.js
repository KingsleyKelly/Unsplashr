console.log('\'Allo \'Allo!');
var totalCount = 6;
function ChangeIt()
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/unsplash'+num+'.jpg';
document.body.style.backgroundRepeat = "repeat";// Background repeat
}
window.onpaint = ChangeIt();
