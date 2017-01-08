$(document).ready(function() {

  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var array = $(this).serializeArray();

    formAsArray.forEach(function(input){
    formData[input.name] = input.value;
  });

 appendDom(formData);

 clearForm();

  });
});

 function appendDom(emp) {
   //create a div jquery object
   var $emp = $('<div class="employee"></div>');

   $emp.append('<label for="employeeName">Name:</label>');
  $emp.append('<p name="employeeName">' + emp.employeeFirstName + ' ' +       emp.employeeLastName + '</p>');
  $emp.append('<label for="employeeIdNumber">ID Number:</label>');
  $emp.append('<p>' + emp.employeeIdNumber + '</p>');
  $emp.append('<label for="employeeJobTitle">Job Title:</label>');
  $emp.append('<p>' + emp.employeeJobTitle + '</p>');
  $emp.append('<label for="employeeAnnualSalary">Annual Salary:</label>');
  $emp.append('<p>' + emp.employeeAnnualSalary + '</p>');

  //append div to DOM
  $('#employees').append($emp);
 }

 function clearForm() {
   $('form').find('input[type=text]').val('');
 }
