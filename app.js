$(document).ready(function() {

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    console.log('result of calling serialize=', $(this).serialize());
    console.log('result of calling serializeArray=', $(this).serializeArray());

    var array = $(this).serializeArray();

    var formData = {};

    array.forEach(function(input){
    formData[input.name] = input.value;
  });

 console.log('formData', formData);

 var employeeFirstName = '<p>' + formData.employeeFirstName + '</p>';
 var employeeLastName = '<p>' + formData.employeeLastName + '</p>';
 var employeeIdNumber = '<p>' + formData.employeeIdNumber + '</p>';
 var employeeJobTitle = '<p>' + formData.employeeJobTitle + '</p>';
 var employeeAnnualSalary = '<p>' + formData.employeeAnnualSalary + '</p>';

 var $employee = $('<div></div>');

 $employee.append(employeeFirstName);
 $employee.append(employeeLastName);
 $employee.append(employeeIdNumber);
 $employee.append(employeeJobTitle);
 $employee.append(employeeAnnualSalary);

 $('#employees').append($employee);

 $(this).children('input[type=text]').val('');
 $(this).children('input[type=text]').val('');
  });

});
