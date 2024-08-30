const studyPlan = {
    // Alphabetically sorted
    "Advance Database Management Systems": 2,
    "Advance Database Management Systems Lab": 3,
    "Advanced Programming Concepts": 2,
    "Advanced Programming Concepts Lab": 3,
    "Advanced Programming Concepts [old]": 3,  // Added this
    "Analysis of Algorithms": 3,
    "Application of Information & Communication Technologies": 2,
    "Application of Information & Communication Technologies Lab": 3,
    "Applied Physics (Electricity & Basic Electronics) [old]": 3,
    "Arts & Humanities (Professional Practice)": 2,
    "Assembly Language Programming": 3,
    "Assembly Language Programming Lab": 1,
    "Artificial Intelligence": 2,
    "Artificial Intelligence Lab": 3,
    "Artificial Intelligence [old]": 3,
    "Artificial Intelligence Lab [old]": 1,
    "Calculas and Analytical Geometry": 3,
    "Civics and Community Engagement": 2,
    "Cloud Computing": 2,
    "Cloud Computing Lab": 3,
    "Communication Skills": 3,
    "Compiler Construction": 2,
    "Compiler Construction Lab": 3,
    "Compiler Construction [old]": 3,
    "Compiler Construction Lab [old]": 1,
    "Computer Architecture": 2,
    "Computer Architecture Lab": 3,
    "Computer Architecture [old]": 3,
    "Computer Communication & Networks": 3,
    "Computer Communication & Networks Lab": 1,
    "Computer Logic Design": 3,
    "Computer Logic Design Lab": 1,
    "Computer Networks": 2,
    "Computer Networks Lab": 3,
    "Computer Organization & Assembly Language": 2,
    "Computer Organization & Assembly Language Lab": 3,
    "Computer Programming": 4,
    "Database & Information Retrieval": 3,
    "Database & Information Retrieval Lab": 1,
    "Database Systems": 3,
    "Database Systems Lab": 3,
    "Data Structures": 3,
    "Data Structures Lab": 3,
    "Data Structures Lab [old]": 1,
    "Design & Analysis of Algorithms": 3,
    "Differential Equations": 3,
    "Digital Logic Design": 2,
    "Digital Logic Design Lab": 3,
    "Discrete Structures": 3,
    "English": 3,
    "Entrepreneurship": 2,
    "Expository Writing": 3,
    "Final Year Project (Part 1)": 2,
    "Final Year Project (Part 1) [old]": 3,
    "Final Year Project (Part 2)": 4,
    "Final Year Project (Part 2) [old]": 3,
    "Foreign Language - Social Service": 3,
    "Functional English": 3,
    "Full Stack Web Development": 2,
    "Full Stack Web Development Lab": 3,
    "HCI & Computer Graphics": 2,
    "HCI & Computer Graphics Lab": 3,
    "Human Computer Interaction": 3,
    "Human Psychology": 3,
    "Ideology and Constitution of Pakistan": 2,
    "Information Security": 2,
    "Information Security Lab": 3,
    "Information Security [old]": 3,
    "Information Security Lab [old]": 1,
    "Introduction to Information & Communication Technology": 3,
    "Introduction to Marketing": 3,
    "Internship": 3,
    "Islamic Studies": 2,
    "Islamic Studies & Pakistan Studies [old]": 4,
    "Linear Algebra": 3,
    "Machine Learning": 2,
    "Machine Learning Lab": 3,
    "Management of Technology": 3,
    "Micro Economics": 3,
    "Mobile Application Development": 2,
    "Mobile Application Development Lab": 3,
    "Multivariable Calculus": 3,
    "Multivariate Calculus": 3,
    "Natural Language Processing": 2,
    "Natural Language Processing Lab": 3,
    "Natural Science (Applied Physics)": 2,
    "Natural Science (Applied Physics) Lab": 3,
    "Numerical Computing": 3,
    "Object Oriented Programming Lab": 3,
    "Object Oriented Programming": 3,
    "Object Oriented Programming Lab [old]": 1,
    "Operating Systems": 2,
    "Operating Systems Lab": 3,
    "Operating Systems [old]": 3,
    "Operating Systems Lab [old]": 1,
    "Parallel & Distributed Computing": 2,
    "Parallel & Distributed Computing Lab": 3,
    "Parallel & Distributed Computing [old]": 3,
    "Probability and Statistics": 3,
    "Professional Practices": 3,
    "Programming Fundamentals": 3,
    "Programming Fundamentals Lab": 3,
    "Recent Developments in IT": 3,
    "Social Science (Introduction to Management)": 2,
    "Software Engineering": 3,
    "Software Project Management": 3,
    "Technical & Business Writing": 3,
    "Theory of Automata": 3,
    "Web Design & Development": 3,
    "Web Design & Development Lab": 1,
    "Web Technologies": 2,
    "Web Technologies": 3,
}
const gradePoints = {
    "A": 4,
    "B+": 3.5,
    "B": 3,
    "C+": 2.5,
    "C": 2,
    "D+": 1.5,
    "D": 1,
    "F": 0,
}
let gpaInputLineCounter = 0;
let cgpaInputLineCounter = 0;

let gpaInputLines = document.querySelector("#gpaInputLines");
let gpaAddBtn = document.querySelector("#gpaAddCourseBtn");
let gpaRemoveBtn = document.querySelector("#gpaRemoveCourseBtn");
let gpaCalculateBtn = document.querySelector("#gpaCalBtn");
let gpaResult = document.querySelector("#gpaResult");

let cgpaInputLines = document.querySelector("#cgpaInputLines");
let cgpaAddBtn = document.querySelector("#cgpaAddCourseBtn");
let cgpaRemoveBtn = document.querySelector("#cgpaRemoveCourseBtn");
let cgpaCalculateBtn = document.querySelector("#cgpaCalBtn");
let cgpaResult = document.querySelector("#cgpaResult");



let infoTable = document.querySelector(".table");

const gpaRemoveBtnCheck = () => {
    if (gpaInputLineCounter <= 1) {
        gpaRemoveBtn.classList.add("hidden");
    } else {
        gpaRemoveBtn.classList.remove("hidden");
    }
}
const gpaAddBtnCheck = () => {
    if (gpaInputLineCounter >= 9) {
        gpaAddBtn.classList.add("hidden");
    } else {
        gpaAddBtn.classList.remove("hidden");
    }
}

const cgpaRemoveBtnCheck = () => {
    if (cgpaInputLineCounter <= 2) {
        cgpaRemoveBtn.classList.add("hidden");
    } else {
        cgpaRemoveBtn.classList.remove("hidden");
    }
}
const cgpaAddBtnCheck = () => {
    if (cgpaInputLineCounter >= 12) {
        cgpaAddBtn.classList.add("hidden");
    } else {
        cgpaAddBtn.classList.remove("hidden");
    }
}


const addGpaInputLine = () => {
    gpaInputLineCounter++;

    // Create the line div
    let lineDiv = document.createElement("div");
    lineDiv.classList.add("line");

    // Create course input element
    let courseInput = document.createElement("input");
    courseInput.classList.add("courses-input");
    courseInput.setAttribute("list", "courses-list");
    courseInput.setAttribute("type", "text");

    // Create the datalist for courses
    let courseDataList = document.createElement("datalist");
    courseDataList.setAttribute("id", "courses-list");
    for (let course in studyPlan) {
        let option = document.createElement("option");
        option.value = course;
        courseDataList.appendChild(option);
    }

    // Create credit hour input element
    let chInput = document.createElement("input");
    chInput.classList.add("ch-input");
    chInput.setAttribute("type", "text");
    chInput.setAttribute("list", "ch-input-list");
    chInput.setAttribute("required", "true");

    let chInputDatalist = document.createElement("datalist");
    chInputDatalist.setAttribute("id", "ch-input-list");
    const chInputListValues = [1, 2, 3, 4];
    for (let i = 0; i < chInputListValues.length; i++) {
        let option = document.createElement("option");
        option.value = chInputListValues[i];
        chInputDatalist.appendChild(option);
    }

    // Create grade input element
    let gradeInput = document.createElement("input");
    gradeInput.classList.add("grade-input");
    gradeInput.setAttribute("list", "grade-list");
    gradeInput.setAttribute("required", "true");

    // Create the datalist for grades
    let gradeDataList = document.createElement("datalist");
    gradeDataList.setAttribute("id", "grade-list");
    const grades = ["A", "B+", "B", "C+", "C", "D+", "D", "F"];
    grades.forEach(grade => {
        let option = document.createElement("option");
        option.value = grade;
        gradeDataList.appendChild(option);
    });

    // Append all elements to the lineDiv
    lineDiv.appendChild(courseInput);
    lineDiv.appendChild(courseDataList);
    lineDiv.appendChild(chInput);
    lineDiv.appendChild(chInputDatalist);
    lineDiv.appendChild(gradeInput);
    lineDiv.appendChild(gradeDataList);

    // Append the lineDiv to the parent container
    gpaInputLines.appendChild(lineDiv);

    courseInput.addEventListener("input", () => {
        const selectedCourse = courseInput.value;
        if (studyPlan[selectedCourse] !== undefined) {
            chInput.value = studyPlan[selectedCourse];
        } else {
            chInput.value = "";  // Clear if course doesn't match
        }
    });
    gpaRemoveBtnCheck();
    gpaAddBtnCheck();

};

const addCgpaInputLine = (semCounter) => {
    cgpaInputLineCounter++;

    let lineDiv = document.createElement("div");
    lineDiv.classList.add("line");
    lineDiv.innerHTML = `<p class="courses-input sem-text cgpa-sem-heading">Semester ${semCounter}</p>
                        <input class="ch-input cgpa-ch-heading cgpa-ch-input" type="text">
                        <input class="grade-input cgpa-gpa-heading cgpa-gpa-input" type="text">`
    cgpaInputLines.appendChild(lineDiv);
    cgpaRemoveBtnCheck();
    cgpaAddBtnCheck();
}

(() => {
    for (let i = 0; i < 6; i++) {
        addGpaInputLine();
        addCgpaInputLine(i + 1);
    }
    for (let i in studyPlan) {
        let tableLine = document.createElement("div");
        tableLine.classList.add("table-line");
        tableLine.innerHTML = `<p class="title">${i}</p>
                    <p class="crh">${studyPlan[i]}</p>`
        infoTable.appendChild(tableLine);
    }
})();

gpaRemoveBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent the form from submitting
    gpaInputLineCounter--;
    gpaInputLines.lastElementChild.remove();
    
    gpaRemoveBtnCheck();
    gpaAddBtnCheck();
});

gpaAddBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent the form from submitting
    addGpaInputLine();
});

gpaCalculateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let gpa = 0;
    let totalCh = 0;
    let errCounter = true;
    let chInput = document.querySelectorAll(".ch-input");
    let gradeInput = document.querySelectorAll(".grade-input");

    try {
        for (let i = 0; i < gpaInputLineCounter; i++) {
            let creditHour = chInput[i].value;
            let grade = gradeInput[i].value;

            if (creditHour.trim() == "") {
                throw new Error("&#9888; Please Input Credit Hour.");
            }

            creditHour = parseFloat(creditHour);
            if (isNaN(creditHour)) {
                throw new Error("&#9888; Invalid Credit Hour.");
            }

            if (creditHour > 4) {
                throw new Error("&#9888; Credit Hour must be less than or equals to 4.");
            }
            if (creditHour < 0) {
                throw new Error("&#9888; Credit Hour must be greater than ZERO.");
            }

            if (grade.trim() == "") {
                throw new Error("&#9888; Please Input Grade.");
            }

            if (gradePoints[grade] === undefined) {
                throw new Error("&#9888; Invalid Grade");
            }
            gpa += creditHour * gradePoints[grade];
            totalCh += creditHour;
        }
    } catch (err) {
        errCounter = false;
        gpaResult.classList.remove("hidden");
        gpaResult.innerHTML = err.message;
        gpaResult.style.backgroundColor = "red";
    }

    if (totalCh > 0) { // Avoid division by zero
        gpa = gpa / totalCh;
        gpa = Math.round(gpa * 100) / 100;
        console.log(gpa);
    } else {
        gpa = 0; // Default to 0 if totalCh is 0
    }

    if (errCounter) {
        gpaResult.classList.remove("hidden");
        gpaResult.style.backgroundColor = "#00FF7F";
        gpaResult.innerHTML = `GPA: ${gpa} (${(gpa * 100) / 4}%)`;
    }
});

cgpaRemoveBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent the form from submitting
    cgpaInputLineCounter--;
    cgpaInputLines.lastElementChild.remove();
    
    cgpaRemoveBtnCheck();
    cgpaAddBtnCheck();
});

cgpaAddBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent the form from submitting
    addCgpaInputLine(cgpaInputLineCounter + 1);
});

cgpaCalculateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let cgpa = 0;
    let totalCh = 0;
    let errCounter = true;
    let cgpaChInput = document.querySelectorAll(".cgpa-ch-input");
    let cgpaGpaInput = document.querySelectorAll(".cgpa-gpa-input");

    try {
        for (let i = 0; i < cgpaInputLineCounter; i++) {
            let creditHour = cgpaChInput[i].value;
            let gpa = cgpaGpaInput[i].value;

            if (creditHour.trim() == "") {
                throw new Error("&#9888; Please Input Credit Hour.");
            }

            creditHour = parseFloat(creditHour);
            if (isNaN(creditHour)) {
                throw new Error("&#9888; Invalid Credit Hour.");
            }

            if (creditHour > 20) {
                throw new Error("&#9888; Credit Hour must be less than or equals to 20.");
            }
            if (creditHour < 0) {
                throw new Error("&#9888; Credit Hour must be greater than ZERO.");
            }

            if (gpa.trim() == "") {
                throw new Error("&#9888; Please Input GPA.");
            }

            gpa = parseFloat(gpa);
            if (isNaN(gpa)) {
                throw new Error("&#9888; Invalid GPA.");
            }

            if (gpa > 4) {
                throw new Error("&#9888; GPA must be less than or equals to 4.");
            }
            if (gpa < 0) {
                throw new Error("&#9888; GPA must be greater than 0.");
            }

            cgpa += creditHour * gpa;
            totalCh += creditHour;
        }
    } catch (err) {
        errCounter = false;
        cgpaResult.classList.remove("hidden");
        cgpaResult.innerHTML = err.message;
        cgpaResult.style.backgroundColor = "red";
    }

    if (totalCh > 0) { // Avoid division by zero
        cgpa = cgpa / totalCh;
        cgpa = Math.round(cgpa * 100) / 100;
        console.log(cgpa);
    } else {
        cgpa = 0; // Default to 0 if totalCh is 0
    }

    if (errCounter) {
        cgpaResult.classList.remove("hidden");
        cgpaResult.style.backgroundColor = "#00FF7F";
        cgpaResult.innerHTML = `CGPA: ${cgpa}`;
    }
});