export const stream = () => {
    const preview = document.querySelector('.hero__preview');
    const video = document.querySelector('.hero__video');

    const clickHandler = () => {
        video.classList.add('hero__video--active');
        preview.classList.add('hero__preview--hidden');
        preview.removeEventListener(clickHandler)
    }

    preview.addEventListener('click', clickHandler)
}
