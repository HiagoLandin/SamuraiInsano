const samurailouco = document.querySelector('.samurailouco');
const pipe = document.querySelector('.pipe');

const jump = () => {
    samurailouco.classList.add('jump');

    setTimeout(() => {
        samurailouco.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const samurailoucoPosition = +window.getComputedStyle(samurailouco).bottom.replace('px', '');

    console.log(samurailoucoPosition);

    if (pipePosition <= 120 && pipePosition > 0 && samurailoucoPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 'px';

        samurailouco.style.animation = 'none';
        samurailouco.style.bottom = samurailoucoPosition + 'px';

        samurailouco.src = 'C:\\Users\\fake2\\Downloads\\unnamed.png';
        samurailouco.style.width = '75px';
        samurailouco.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
