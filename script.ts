 // get references to the form and display area
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
resumeForm.addEventListener('submit' ,(event: Event)=> {
    event.preventDefault();

    // collect input values
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    // generate the resume content dynamically
    const resumeHTML =`
    <h2><br>Resume</br></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
        <p><b>Phone:</b>${phone}</p>
            <p><b>Email:</b>${email}</p>

            <h3>Education</h3>
            <p>${education}</p>

                        <h3>Experience</h3>
            <p>${experience}</p>

                        <h3>Skills</h3>
            <p>${skills}</p>
            `;

            // display the generated resume
            if(resumeDisplayElement) {
                 resumeDisplayElement.innerHTML = resumeHTML
            }else{
                console.error('the resume display element is missing.')
            }
        });


    

            



    
   
