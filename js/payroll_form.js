        const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function() {
            output.textContent = salary.value;
        });

        const name = document.querySelector('#name');
        const nameError = document.querySelector('.name-error');
        name.addEventListener('input', function() {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if(nameRegex.test(name.value))
                nameError.textContent = '';
            else nameError.textContent = "Name is incorrect";
        });

        let date = document.querySelector('#year').value + document.querySelector('#month').value + 
                    document.querySelector('#day').value;
        let inputDate = new Date(date);
        let currentDate = new Date();
        let startDateError = document.querySelector('.startDate-error');
        startDateError.addEventListener('input', function(){
            if(inputDate < currentDate) startDateError.textContent = '';
            else startDateError.textContent = 'Date is Invalid';
        })