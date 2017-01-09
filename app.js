$(document).ready(function() {

  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

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

  $emp.append('<label for="employeeName"><b>Name:</b></label>');
  $emp.append('<p name="employeeName">' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>');
  $emp.append('<label for="employeeIdNumber"><b>ID Number:<b></label>');
  $emp.append('<p>' + emp.employeeIdNumber + '</p>');
  $emp.append('<label for="employeeJobTitle"><b>Job Title:</b></label>');
  $emp.append('<p>' + emp.employeeJobTitle + '</p>');
  $emp.append('<label for="employeeAnnualSalary"><b>Annual Salary:</b></label>');
  $emp.append('<p>' + emp.employeeAnnualSalary + '</p>');
  $emp.append('<button>' + 'Delete' + '</button>');

  //append div to DOM
  $('#employees').append($emp);


//div created to store monthly salary expenditures
var $calculateMonthly = $('<div id="monthlySalary"</div>');
//variable to grab employeeAnnualSalary, divide by 12 and return a number with 2 decimal points
var monthlySalary = parseFloat((emp.employeeAnnualSalary/12)).toFixed(2);

$calculateMonthly.append('<p>' + monthlySalary + '</p>');

//append monthlySalary to DOM
$('#monthlySalaryExpenditures').append($calculateMonthly);


$('button').click (function() {
$(this).parent('.employee').remove();
});


 }

 function clearForm() {
   $('form').find('input[type=text]').val('');
 }
