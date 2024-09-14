// Types for handling form elements
type InputElement = HTMLInputElement | HTMLTextAreaElement;

// function to create input elements
function createInputElement(type: string, placeholder: string, required: boolean = false): InputElement {
    const inputElement = document.createElement(type === 'textarea' ? 'textarea' : 'input') as InputElement;
    inputElement.placeholder = placeholder;
    if (required) {
        inputElement.required = true;
    }
    return inputElement;
}

function addWorkExperience() {
    const workContainer = document.getElementById('workContainer') as HTMLDivElement;

    const workDiv = document.createElement('div');
    workDiv.classList.add('work-experience');

    const companyInput = createInputElement('input', 'Company Name', true) as HTMLInputElement;
    const designationInput = createInputElement('input', 'Designation in Company', true) as HTMLInputElement;
    const descriptionInput = createInputElement('textarea', 'A brief description of the work done', true);

    workDiv.appendChild(companyInput);
    workDiv.appendChild(document.createElement('br'));

    workDiv.appendChild(designationInput);
    workDiv.appendChild(document.createElement('br'));

    workDiv.appendChild(descriptionInput);
    workDiv.appendChild(document.createElement('br'));

    workContainer.appendChild(workDiv);
}

function addSkill() {
    const skillContainer = document.getElementById('skillContainer') as HTMLDivElement;

    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

    const skillInput = createInputElement('input', 'Add Skill', true) as HTMLInputElement;

    skillDiv.appendChild(skillInput);
    skillDiv.appendChild(document.createElement('br'));

    skillContainer.appendChild(skillDiv);
}

function addEducationHistory() {
    const educationContainer = document.getElementById('educationContainer') as HTMLDivElement;

    const educationDiv = document.createElement('div');
    educationDiv.classList.add('education');

    const educationInput = createInputElement('input', 'Degree from XYZ University', true) as HTMLInputElement;

    educationDiv.appendChild(educationInput);
    educationDiv.appendChild(document.createElement('br'));

    educationContainer.appendChild(educationDiv);
}

function addCertification() {
    const certificationContainer = document.getElementById('certificationContainer') as HTMLDivElement;

    const certificationDiv = document.createElement('div');
    certificationDiv.classList.add('certification');

    const certificationInput = createInputElement('input', 'Certification', false) as HTMLInputElement;

    certificationDiv.appendChild(certificationInput);
    certificationDiv.appendChild(document.createElement('br'));

    certificationContainer.appendChild(certificationDiv);
}

//Function to generate resume from the inputs
function generateResume() {
    const fullName = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const designation = (document.getElementById('designation') as HTMLInputElement).value;
    const linkedIn = (document.getElementById('linkedIn') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;

    const workExperiences = Array.from(document.getElementsByClassName('work-experience')).map(div => {
        const inputs = div.getElementsByTagName('input');
        const textareas = div.getElementsByTagName('textarea');
        return {
            company: inputs[0].value,
            designation: inputs[1].value,
            description: textareas[0].value
        };
    });

    const skills = Array.from(document.getElementsByClassName('skill')).map(div => {
        const input = div.getElementsByTagName('input')[0];
        return input.value;
    });

    const educationHistories = Array.from(document.getElementsByClassName('education')).map(div => {
        const input = div.getElementsByTagName('input')[0];
        return input.value;
    });

    const certifications = Array.from(document.getElementsByClassName('certification')).map(div => {
        const input = div.getElementsByTagName('input')[0];
        return input.value;
    });

    // Create a new window or iframe for printing
    const printWindow = window.open('', '', 'height=600,width=800');
    if (!printWindow) return; // Check if the window was successfully created

    printWindow.document.open();
    printWindow.document.write(`
        <html>
        <head>
            <title>Dynamic Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                .dynamic-resume {
                    max-width: 100%;
                    margin: auto;
                }
                h2, h3 {
                    color: #333;
                }
                p, ul {
                    margin: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="dynamic-resume">
                <h2>${fullName}</h2>
                <p>${email}</p>
                <p>${contact}</p>
                <p>${designation}</p>
                <p><a href="${linkedIn}" target="_blank">LinkedIn</a></p>
                <p><a href="${github}" target="_blank">GitHub</a></p>

                <h3>Work Experience</h3>
                ${workExperiences.map(exp => `
                    <b>${exp.company}</b><br>
                    <i>${exp.designation}</i><br>
                    <p>${exp.description}</p>
                `).join('')}

                <h3>Technical Skill</h3>
                <ul>
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>

                <h3>Education History</h3>
                <ul>
                    ${educationHistories.map(edu => `<li>${edu}</li>`).join('')}
                </ul>

                <h3>Certifications</h3>
                <ul>
                    ${certifications.map(cert => cert ? `<li>${cert}</li>` : '').join('')}
                </ul>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}


// Event listeners for adding dynamic fields
document.getElementById('addWork')?.addEventListener('click', addWorkExperience);
document.getElementById('addSkill')?.addEventListener('click', addSkill);
document.getElementById('addEducation')?.addEventListener('click', addEducationHistory);
document.getElementById('addCertification')?.addEventListener('click', addCertification);

// Event listener for generating the resume
document.getElementById('generateResume')?.addEventListener('click', generateResume);
