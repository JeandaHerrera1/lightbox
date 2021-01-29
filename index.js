const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.gallery-container img')
const modalImg = document.querySelector('.modal-img')
const description = document.querySelector('.description')


previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open')

        const fullImg = preview.getAttribute('data-full')
        modalImg.src = `/full/${fullImg}`

        const altText = preview.alt
        description.textContent = altText
    })
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
    } 
})

window.addEventListener('keyup', (e) => {
    if(e.key === 'Escape'){
        modal.classList.remove('open')
    }
})