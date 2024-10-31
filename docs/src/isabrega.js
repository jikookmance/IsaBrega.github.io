document.querySelector('.container a').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const imgElement = this.querySelector('img');
    imgElement.src = 'img/eca.jpeg';
    imgElement.classList.add('changed');
});