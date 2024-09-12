const showhidebtn = document.getElementById("btn_showhide") as HTMLButtonElement;
const technicalskills = document.getElementById("Technical-Skills") as HTMLElement;

showhidebtn.addEventListener('click', () => {
    if(technicalskills.style.display === 'none') {
        technicalskills.style.display = 'block';
    } else {
        technicalskills.style.display = 'none';
    }
});
