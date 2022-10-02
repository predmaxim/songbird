window.addEventListener("DOMContentLoaded", () => {
  const range = document.querySelector('#range__range-input');
  const amount = document.querySelector('#amount');
  const rangeValues = document.querySelectorAll('#range-values option');

  const values = [25, 50, 100, 250, 500, 1000, 2000, 5000]


  document.addEventListener('input', (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
    e.target == range ? amount.value = values[range.value - 1] : false;
    e.target == amount ? range.value = values.reduce((acc, el, i) => el == amount.value ? i + 1 : acc, 3) : false;
  });

  document.addEventListener('click', (e) => {
    rangeValues.forEach(elem => {
      if (e.target == elem) {

        amount.value = values[e.target.value - 1];
        range.value = e.target.value;
      };
    });
  });
})

export default {}