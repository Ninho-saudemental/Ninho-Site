const boxes = document.querySelectorAll('.box');
const overlay = document.getElementById('overlay');
let activeBox = null;

boxes.forEach(box => {
    const expandedBox = box.querySelector('.expanded-box');

    box.addEventListener('mouseenter', () => {
        if (activeBox !== box) {
            if (activeBox) {
                activeBox.querySelector('.expanded-box').style.transform = 'translate(-50%, -50%) scale(0)';
            }
            expandedBox.style.transform = 'translate(-50%, -50%) scale(1)';
            overlay.style.display = 'block';
            activeBox = box;
        }
    });

    overlay.addEventListener('click', () => {
        if (activeBox) {
            activeBox.querySelector('.expanded-box').style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.display = 'none';
            activeBox = null;
        }
    });
});