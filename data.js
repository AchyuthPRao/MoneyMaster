

    /* function addRow() {
      var expenseArray = [];
      var amountArray = [];
      
      var table = document.getElementById("myTable");
      var row = table.insertRow(-1);
      var expenseCell = row.insertCell(0);
      var amountCell = row.insertCell(1);
      var monthyAmount = row.insertCell(2);
      
      expenseCell.innerHTML = prompt("Expense"); */

      /* expenseArray.push(expenseCell.innerHTML);
      console.log(expenseArray); */
      /* amountCell.innerHTML = prompt("Amount"); */
      /* amountArray.push(amountCell.innerHTML);
      console.log(amountArray); */
      /* monthyAmount.innerHTML = prompt("MonthlyAmount");
    } */
    
    /* function removeRow() {
      var table = document.getElementById("myTable");
      if (table.rows.length > 2) {
        table.deleteRow(-1);
      }
    } */
    
    
  
    function addRow() {
      var table = document.getElementById("myTable");
      var exp = document.getElementById("exp");
      var amt = document.getElementById("amt");
      var mamt = document.getElementById("mamt");

      if (exp.value === "" || amt.value === "" || mamt.value === "") {
        alert("Please enter all fields");
        return;
      }

      var row = table.insertRow();

      var firstNameCell = row.insertCell();
      var lastNameCell = row.insertCell();
      var emailCell = row.insertCell();

      firstNameCell.innerHTML = exp.value;
      lastNameCell.innerHTML = amt.value;
      emailCell.innerHTML = mamt.value;

      // Clear input fields
      exp.value = "";
      amt.value = "";
      mamt.value = "";
    }

    function deleteRow() {
      var table = document.getElementById("myTable");
      if (table.rows.length > 1) {
        table.deleteRow(-1);
      }
    }



    const tableRows = document.getElementsByTagName('tr');
    // starting from 1 instead of 0
    // because we don’t want to apply the styling to header
    for (let curr = 1; curr < tableRows.length; curr++) {
       tableRows[curr].addEventListener('mouseover', function(e){
          console.log("over");
          tableRows[curr].style.backgroundColor = '#aaa';
       });
          tableRows[curr].addEventListener('mouseleave', function(e){
             console.log("leave");
             tableRows[curr].style.backgroundColor = '';
       });
  
      }