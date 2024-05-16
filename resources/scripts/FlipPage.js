document.addEventListener('DOMContentLoaded', () => {
  const flipButton = document.querySelector('.button');
  const flipImage = document.querySelector('.FlipPage-image');
  const flipImageMain = document.querySelector('.FlipImage');
  const triangle = document.querySelector('.triangle');
  const audio = new Audio('../../resources/audio/FlipPage.wav');
  const masterContent = document.querySelector('.Master').innerHTML;
  const content = document.getElementById('#content');
  const master = document.querySelector('.Master');

  const mouseOver = () => {
    flipImage.hidden = false;
  };

  const mouseOut = () => {
    flipImage.hidden = true;
  };
  flipButton.addEventListener('mouseover', mouseOver);
  flipButton.addEventListener('mouseout', mouseOut);

  
  let currentTop = 548;
  let currentLeft = 360;
  let currentWidth = 60;
  
  let triangleTopBox = 576.5;
  let triangleLeftBox = 773.5;
  let triangleTop = 62;
  let triangleRight = 61;
  
  const flipPageAnimation = () => {
    if (currentTop <= 160 || currentLeft <= 160) {
      flipImageMain.style.width = `${currentWidth *= 1.05}%`
      console.log(flipImageMain.style.width)
    }
    if (currentTop <= -80 || currentLeft <= -80) {
      setTimeout(() => {
        document.querySelector('#content').innerHTML = masterContent;
        master.setAttribute('hidden', 'false');
        content.setAttribute('id', 'newContent')
      // Hide the .FlipImage and .triangle elements
      flipImageMain.style.display = 'none';
      triangle.style.display = 'none';
      }, 100);
      return;
    }
    
    setTimeout(() => {
      flipImageMain.style.top = `${currentTop}px`;
      flipImageMain.style.left = `${currentLeft}px`;
      currentTop -= 20;
      currentLeft -= 20;
      let oldTriangleTop = triangleTop;
      let oldTriangleRight = triangleRight;
      
      triangle.style.cssText = `
      border-top-width: ${triangleTop += 17.9}px;
      border-right-width: ${triangleRight += 17.9}px;
      top: ${triangleTopBox += oldTriangleTop - triangleTop}px;
      left: ${triangleLeftBox += oldTriangleRight - triangleRight}px;`;
      
      flipPageAnimation();
    }, 100);
  };
  flipButton.addEventListener('click', () => {
    flipButton.removeEventListener('mouseover', mouseOver);
    flipButton.removeEventListener('mouseout', mouseOut);
    triangle.hidden = false;
    audio.play(); // To play the audio
    flipPageAnimation();
});
});