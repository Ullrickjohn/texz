
window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateForm()) {
        form.submit();
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      const input = form.querySelector('.input');
      const numberInput = form.querySelector('.number-input');
      const citySelect = form.querySelector('.select:nth-of-type(1) select');
      const branchSelect = form.querySelector('.select:nth-of-type(2) select');
      const carSelect = form.querySelector('.select:nth-of-type(4) select');
      const jobTypeSelect = form.querySelector('.select:nth-of-type(5) select');
      const yearSelect = form.querySelector('.select:nth-of-type(6) select');
      const dateInput = form.querySelector('.data');
      const timeInput = form.querySelector('.time');

      
  
      // Validate Ф.И.О
      if (input.value.trim() === '') {
        input.classList.add('invalid');
        isValid = false;
      } else {
        input.classList.remove('invalid');
      }
  
      // Validate Number Input
      if (numberInput.value.trim() === '' || isNaN(numberInput.value)) {
        numberInput.classList.add('invalid');
        isValid = false;
      } else {
        numberInput.classList.remove('invalid');
      }
  
      // Validate Selects
      const selectOptions = [citySelect, branchSelect, carSelect, jobTypeSelect, yearSelect];
      selectOptions.forEach((select) => {
        if (select.selectedIndex === 0) {
          select.parentElement.classList.add('invalid');
          isValid = false;
        } else {
          select.parentElement.classList.remove('invalid');
        }
      });
  
      // Validate Date Input
      if (dateInput.value.trim() === '') {
        dateInput.classList.add('invalid');
        isValid = false;
      } else {
        dateInput.classList.remove('invalid');
      }
  
      // Validate Time Input
      if (timeInput.value.trim() === '') {
        timeInput.classList.add('invalid');
        isValid = false;
      } else {
        timeInput.classList.remove('invalid');
      }
  
      return isValid;
    }
  });
  
