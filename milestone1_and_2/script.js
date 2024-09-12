var showhidebtn = document.getElementById("btn_showhide");
var technicalskills = document.getElementById("Technical-Skills");
showhidebtn.addEventListener('click', function () {
    if (technicalskills.style.display === 'none') {
        technicalskills.style.display = 'block';
    }
    else {
        technicalskills.style.display = 'none';
    }
});
