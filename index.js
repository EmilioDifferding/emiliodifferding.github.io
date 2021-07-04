const dedications = document.getElementById('dedications')

function rollDedications(dedications) {
    let dedArray = ['diseñar sistemas web', 'crear páginas web', 'diseñar y crear sistemas IoT']
    let idx = 0;
    return function nextDedication(){
        if (idx < dedArray.length){
            dedications.innerHTML= dedArray[idx]
            let d = dedArray[idx]
            idx += 1;
            return d 
        }
        else idx = 0;
    }
}
function run(){
    setInterval(rollDedications(dedications), 3000)
}
// window.onload = run

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });