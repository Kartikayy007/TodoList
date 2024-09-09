const add = document.querySelector('#add');
const originalContainer = document.querySelector('.todo');
const counter = document.querySelector('#number');
const Message = document.querySelector('.noRem');
const listParent = originalContainer.parentNode;

let count = 0;

const originalRadio = originalContainer.querySelector('.radio-container');
addRemoveListener(originalRadio, originalContainer);

add.addEventListener('click', () => {
    Message.style.display = 'none';

    if (originalContainer.classList.contains('hidden')) {
        originalContainer.classList.remove('hidden');
        count++;
        counter.textContent = count;
        return;
    }

    const newContainer = originalContainer.cloneNode(true);

    const newRadio = newContainer.querySelector('.radio-container');
    const newInput = newContainer.querySelector('.input');

    newRadio.checked = false;
    newInput.value = '';

    newContainer.style.opacity = '1';

    listParent.appendChild(newContainer);

    count++;
    counter.textContent = count;

    addRemoveListener(newRadio, newContainer);
});

function addRemoveListener(radio, container) {
    radio.addEventListener('change', () => {
        container.style.transition = 'opacity 1.0s ease-out';
        container.style.opacity = '0';

        setTimeout(() => {
            container.remove();
            count--;
            counter.textContent = count;

            if (count === 0) {
                Message.style.display = 'flex';
            }
        }, 500);
    });
}
