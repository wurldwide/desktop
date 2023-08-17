const panes = document.querySelectorAll('.pane');

let z = 1;

panes.forEach((pane) => {
  const title = pane.querySelector('.title');
  const content = pane.querySelector('.content'); // Assuming there's a class named 'content' for the pane content

  pane.addEventListener('mousedown', () => {
    z = z + 1;
    pane.style.zIndex = z;
  });

  content.addEventListener('mousedown', (event) => {
    pane.classList.add('is-dragging');

    let l = pane.offsetLeft;
    let t = pane.offsetTop;

    let startX = event.pageX;
    let startY = event.pageY;

    const drag = (event) => {
      event.preventDefault();

      pane.style.left = l + (event.pageX - startX) + 'px';
      pane.style.top = t + (event.pageY - startY) + 'px';
    };

    const mouseup = () => {
      pane.classList.remove('is-dragging');

      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', mouseup);
    };

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', mouseup);
  });

  // ... (Other code remains the same)
});
