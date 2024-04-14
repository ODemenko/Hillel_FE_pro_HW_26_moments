document.addEventListener('DOMContentLoaded', function() {
    let dobForm = document.getElementById('dobForm');

    dobForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let dobInput = document.getElementById('dobInput').value.trim();
      let regex = /^\d{4}-\d{2}-\d{2}$/;

      if (!regex.test(dobInput)) {
        document.getElementById('dobHelp').textContent = 'Please enter a valid date in YYYY-MM-DD format.';
        return;
      }
      document.getElementById('dobHelp').textContent = '';
      let convertedDOB = moment(dobInput, 'YYYY-MM-DD').format('MMMM Do, YYYY');
      document.getElementById('convertedDOB').textContent = convertedDOB;
    });
  });