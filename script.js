var globalFname = new Array();
var globalPhone = new Array();
var globalAmount = new Array();
var index = 0;
var total = 0;

function validation() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var phonoNumber = document.getElementById("pnumber");
    var amount = document.getElementById("moneyOption");

    var fnameLabel = document.getElementById("fnamelabel");
    var lanemLabel = document.getElementById("lnamelabel");
    var phonoNumberLabel = document.getElementById("pnumberlabel");
    var amountLabel = document.getElementById("moneyOptionlabel")

    if (fname.value.trim() == "" && lname.value.trim() == "" && phonoNumber.value.trim() == "" && amount.options[amount.selectedIndex].value == "0") {
        fnameLabel.style.visibility = "visible";
        lanemLabel.style.visibility = "visible";
        phonoNumberLabel.style.visibility = "visible";
        amountLabel.style.visibility = "visible";
    } else if (fname.value.trim() == "") {
        fnameLabel.style.visibility = "visible";
    } else if (lname.value.trim() == "") {
        lanemLabel.style.visibility = "visible";
    } else if (phonoNumber.value.trim() == "") {
        phonoNumberLabel.style.visibility = "visible";
    } else if (amount.options[amount.selectedIndex].value == "0") {
        amountLabel.style.visibility = "visible"
    } else {

        globalFname.push(fname.value + " " + lname.value);
        globalPhone.push(phonoNumber.value);
        globalAmount.push(amount.options[amount.selectedIndex].value);

        var innerValue = "";
        innerValue += `
        <div class="row">
        <div class="col-4 border"> ${globalFname[index]}</div>
        <div class="col-4 border">${globalPhone[index]}</div>
        <div class="col-4 border">${globalAmount[index]}</div>
      </div>
        `
        total += Number(globalAmount[index]);

        index++;

        document.getElementById("printForm").innerHTML += innerValue;
        document.getElementById("totalMoney").innerHTML = total;

        fname.value = "";
        lname.value = "";
        phonoNumber.value = "";
        amount.options[amount.selectedIndex = 0];
    }
}

function generate() {
    var ran = Math.floor(Math.random() * globalFname.length);
    var print = `
    <div> <h1 class="text-success text-center">Congratulation</h1></div>
    <div class="row">
    <div class="col-4 border fw-bold">Full Name</div>
    <div class="col-4 border fw-bold">Phone Number</div>
    <div class="col-4 border fw-bold">Amount in Birr</div>
    </div>
    <div class="row">
    <div class="col-4 border"> ${globalFname[ran]}</div>
    <div class="col-4 border">${globalPhone[ran]}</div>
    <div class="col-4 border">${total}</div>
  </div>
    `
    document.getElementById("printWin").innerHTML = print;
}