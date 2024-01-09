const noButton = document.querySelector('.no-button');

noButton.addEventListener('mouseover', () => {
  // Get the viewport size
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  //Button size
  const buttonWidth = noButton.clientWidth;
  const buttonHeight = noButton.clientHeight;

  // Generate random X and Y coordinates within the viewport
  const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

  console.log({
    viewportWidth,
    viewportHeight,
    buttonWidth,
    buttonHeight,
    randomX,
    randomY,
  });

  noButton.style.position = 'fixed';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
