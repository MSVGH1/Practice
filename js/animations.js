const firstBlock = document.querySelector('.first_block');
const firstBlockClose = firstBlock.querySelector('.fb_btn');

firstBlockClose.addEventListener('click', () => {
    firstBlock.classList.add('fb_hide')
})
