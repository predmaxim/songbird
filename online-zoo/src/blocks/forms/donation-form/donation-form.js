window.addEventListener("DOMContentLoaded", () => {
  const range = document.querySelector('#range__range-input');
  const amount = document.querySelector('#amount');
  const rangeItems = document.querySelectorAll('#range-values option');

  const labelValues = [...rangeItems].reduce((acc, el) => {
    return acc + (el.label).slice(1) + ',';
  }, '').split(',').filter((el) => el !== '').sort((a, b) => a - b);

  document.addEventListener('input', (e) => {

    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }

    if (e.target == range) {

      amount.value = labelValues[range.value - 1];

      if (labelValues.some((el) => el == labelValues[range.value - 1])) {
        [...rangeItems].forEach(el => el.classList.remove('active'));
        [...rangeItems].filter(el => el.label.slice(1) == labelValues[e.target.value - 1])[0].classList.add('active');
      } else { [...rangeItems].forEach(el => el.classList.remove('active')); }

    }

    if (e.target == amount) {
      range.value = labelValues.reduce((acc, el, i) => el == amount.value ? i + 1 : acc, 3);

      if (labelValues.some(el => el == amount.value)) {
        [...rangeItems].forEach(el => el.classList.remove('active'));
        [...rangeItems].filter(el => el.label.slice(1) == amount.value)[0].classList.add('active');
      } else { [...rangeItems].forEach(el => el.classList.remove('active')); }
    }

  });

  document.addEventListener('click', (e) => {
    if ([...rangeItems].some(el => el == e.target)) {
      [...rangeItems].forEach(el => el.classList.remove('active'));
      [...rangeItems].filter(el => el == e.target)[0].classList.add('active');
      amount.value = labelValues[e.target.value - 1];
      range.value = e.target.value;
    }
  });
})

export default {}