var _a, _b, _c, _d, _e;
// function to create input elements
function createInputElement(type, placeholder, required) {
    if (required === void 0) { required = false; }
    var inputElement = document.createElement(type === 'textarea' ? 'textarea' : 'input');
    inputElement.placeholder = placeholder;
    if (required) {
        inputElement.required = true;
    }
    return inputElement;
}
function addWorkExperience() {
    var workContainer = document.getElementById('workContainer');
    var workDiv = document.createElement('div');
    workDiv.classList.add('work-experience');
    var companyInput = createInputElement('input', 'Company Name', true);
    var designationInput = createInputElement('input', 'Designation in Company', true);
    var descriptionInput = createInputElement('textarea', 'A brief description of the work done', true);
    workDiv.appendChild(companyInput);
    workDiv.appendChild(document.createElement('br'));
    workDiv.appendChild(designationInput);
    workDiv.appendChild(document.createElement('br'));
    workDiv.appendChild(descriptionInput);
    workDiv.appendChild(document.createElement('br'));
    workContainer.appendChild(workDiv);
}
function addSkill() {
    var skillContainer = document.getElementById('skillContainer');
    var skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');
    var skillInput = createInputElement('input', 'Add Skill', true);
    skillDiv.appendChild(skillInput);
    skillDiv.appendChild(document.createElement('br'));
    skillContainer.appendChild(skillDiv);
}
function addEducationHistory() {
    var educationContainer = document.getElementById('educationContainer');
    var educationDiv = document.createElement('div');
    educationDiv.classList.add('education');
    var educationInput = createInputElement('input', 'Degree from XYZ University', true);
    educationDiv.appendChild(educationInput);
    educationDiv.appendChild(document.createElement('br'));
    educationContainer.appendChild(educationDiv);
}
function addCertification() {
    var certificationContainer = document.getElementById('certificationContainer');
    var certificationDiv = document.createElement('div');
    certificationDiv.classList.add('certification');
    var certificationInput = createInputElement('input', 'Certification', false);
    certificationDiv.appendChild(certificationInput);
    certificationDiv.appendChild(document.createElement('br'));
    certificationContainer.appendChild(certificationDiv);
}
//Function to generate resume from the inputs
function generateResume() {
    var fullName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var designation = document.getElementById('designation').value;
    var linkedIn = document.getElementById('linkedIn').value;
    var github = document.getElementById('github').value;
    var workExperiences = Array.from(document.getElementsByClassName('work-experience')).map(function (div) {
        var inputs = div.getElementsByTagName('input');
        var textareas = div.getElementsByTagName('textarea');
        return {
            company: inputs[0].value,
            designation: inputs[1].value,
            description: textareas[0].value
        };
    });
    var skills = Array.from(document.getElementsByClassName('skill')).map(function (div) {
        var input = div.getElementsByTagName('input')[0];
        return input.value;
    });
    var educationHistories = Array.from(document.getElementsByClassName('education')).map(function (div) {
        var input = div.getElementsByTagName('input')[0];
        return input.value;
    });
    var certifications = Array.from(document.getElementsByClassName('certification')).map(function (div) {
        var input = div.getElementsByTagName('input')[0];
        return input.value;
    });
    // Create a new window or iframe for printing
    var printWindow = window.open('', '', 'height=600,width=800');
    if (!printWindow)
        return; // Check if the window was successfully created
    printWindow.document.open();
    printWindow.document.write("\n        <html>\n        <head>\n            <title>Dynamic Editable Resume</title>\n            <style>\n                body {\n                    font-family: Arial, sans-serif;\n                    margin: 20px;\n                }\n                .dynamic-resume {\n                    max-width: 100%;\n                    margin: auto;\n                }\n                h2, h3 {\n                    color: #333;\n                }\n                p, ul {\n                    margin: 5px 0;\n                }\n            </style>\n        </head>\n        <body>\n            <div class=\"dynamic-resume\" contenteditable=\"true\">\n                <h2>".concat(fullName, "</h2>\n                <p>").concat(email, "</p>\n                <p>").concat(contact, "</p>\n                <p>").concat(designation, "</p>\n                <p><a href=\"").concat(linkedIn, "\" target=\"_blank\">LinkedIn</a></p>\n                <p><a href=\"").concat(github, "\" target=\"_blank\">GitHub</a></p>\n\n                <h3>Work Experience</h3>\n                ").concat(workExperiences.map(function (exp) { return "\n                    <b>".concat(exp.company, "</b><br>\n                    <i>").concat(exp.designation, "</i><br>\n                    <p>").concat(exp.description, "</p>\n                "); }).join(''), "\n\n                <h3>Technical Skill</h3>\n                <ul>\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                </ul>\n\n                <h3>Education History</h3>\n                <ul>\n                    ").concat(educationHistories.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n                </ul>\n\n                <h3>Certifications</h3>\n                <ul>\n                    ").concat(certifications.map(function (cert) { return cert ? "<li>".concat(cert, "</li>") : ''; }).join(''), "\n                </ul>\n            </div>\n        </body>\n        </html>\n    "));
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}
// Event listeners for adding dynamic fields
(_a = document.getElementById('addWork')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addWorkExperience);
(_b = document.getElementById('addSkill')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addSkill);
(_c = document.getElementById('addEducation')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', addEducationHistory);
(_d = document.getElementById('addCertification')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', addCertification);
// Event listener for generating the resume
(_e = document.getElementById('generateResume')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', generateResume);
