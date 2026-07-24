const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
if (menuButton && mainNav) menuButton.addEventListener('click', () => mainNav.classList.toggle('open'));

document.querySelectorAll('.module button').forEach(button => {
  button.addEventListener('click', () => button.parentElement.classList.toggle('open'));
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('formNotice').style.display = 'block';
    contactForm.reset();
  });
}

document.querySelectorAll('.answer').forEach(answer => {
  answer.addEventListener('click', () => {
    const group = answer.closest('.quiz-box');
    group.querySelectorAll('.answer').forEach(item => item.disabled = true);
    answer.classList.add(answer.dataset.correct === 'true' ? 'correct' : 'incorrect');
    const result = group.querySelector('.quiz-result');
    result.textContent = answer.dataset.correct === 'true' ? 'Correct — compound growth means returns can earn additional returns over time.' : 'Not quite. Review the explanation above and try the next knowledge check.';
  });
});
