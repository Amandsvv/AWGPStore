const wrapper = document.getElementById('products-wrapper');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');
const cardWidth = 200 + 20; // card width + margin
let scrollIndex = 0;

function getVisibleCount() {
    const containerWidth = document.querySelector('.container').offsetWidth;
    return Math.floor(containerWidth / cardWidth);
}

function updateScroll() {
    const visibleCount = getVisibleCount();
    const totalCards = wrapper.children.length;
    const maxIndex = Math.max(0, totalCards - visibleCount); // ✅ Clamp to 0

    // Clamp index
    if (scrollIndex < 0) scrollIndex = 0;
    if (scrollIndex > maxIndex) scrollIndex = maxIndex;

    const offset = scrollIndex * cardWidth;
    wrapper.style.transform = `translateX(-${offset}px)`;

    leftBtn.disabled = scrollIndex === 0;
    rightBtn.disabled = scrollIndex >= maxIndex;
}

leftBtn.addEventListener('click', () => {
    scrollIndex--;
    updateScroll();
});

rightBtn.addEventListener('click', () => {
    scrollIndex++;
    updateScroll();
});

window.addEventListener('resize', () => {
    updateScroll();
});

// Initial call
updateScroll();

document.addEventListener('DOMContentLoaded', () => {


    function adjustCategories() {
        const container = document.getElementById('categoryGrid');
        const items = Array.from(container.children);
        const containerWidth = container.offsetWidth;
        let totalWidth = 0;

        items.forEach(item => {
            item.style.display = 'block'; // reset all items to visible
        });

        for (let item of items) {
            const itemWidth = item.offsetWidth + 16; // 20px gap
            totalWidth += itemWidth;
            if (totalWidth > containerWidth) {
                item.style.display = 'none';
            }
        }
    }

    window.addEventListener('resize', adjustCategories);
    window.addEventListener('load', adjustCategories);
})
