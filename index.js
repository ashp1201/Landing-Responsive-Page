document.addEventListener('DOMContentLoaded', function() {
    const navMenuButton = document.querySelector('.nav_menu');
    const navComponent = document.querySelector('.nav_component');

    if (navMenuButton && navComponent) {
        navMenuButton.addEventListener('click', () => {
            if (navComponent.style.display === 'flex') {
                navComponent.style.display = 'none';
                
            } else {
                navComponent.style.display = 'flex';
            }

            event.stopPropagation();
        });

        window.addEventListener('click', () => {
            if (navComponent.style.display === 'flex') {
                navComponent.style.display = 'none';
            }
        });
    } 

   
});