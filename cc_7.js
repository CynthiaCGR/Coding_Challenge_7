const input = document.getElementById('headlineInput');
const button = document.getElementById('updateButton');
const headline = document.getElementById('ctaHeadline');

button.addEventListener('click', () => {
    headline.textContent = input.value;
});
