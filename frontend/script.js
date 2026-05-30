// ---------------- REGISTER ----------------

function register() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){

        alert("Please fill all fields");

        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account Created Successfully");

}

// ---------------- LOGIN ----------------

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(username === savedUser && password === savedPass){

        alert("Login Successful");

        window.location.href = "dashboard.html";

    }
    else{

        alert("Invalid Username or Password");

    }

}

// ---------------- ADD PATIENT ----------------

function addPatient() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const disease = document.getElementById("disease").value;

    fetch("https://hospital-system-5ntu.onrender.com/api/patients", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            age,
            disease
        })

    })

    .then(res => res.json())

    .then(data => {

        alert("Patient Added Successfully");

    });

}

// ---------------- ADD DOCTOR ----------------

function addDoctor() {

    const name = document.getElementById("doctorName").value;
    const specialization = document.getElementById("specialization").value;

    fetch("https://hospital-system-5ntu.onrender.com/api/doctors", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            specialization
        })

    })

    .then(res => res.json())

    .then(data => {

        alert("Doctor Added Successfully");

    });

}

// ---------------- BOOK APPOINTMENT ----------------

function bookAppointment() {

    const patientName = document.getElementById("patientName").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    fetch("https://hospital-system-5ntu.onrender.com/api/appointments", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            patientName,
            doctor,
            date,
            time
        })

    })

    .then(res => res.json())

    .then(data => {

        alert("Appointment Booked Successfully");

    });

}

// ---------------- GENERATE BILL ----------------

function generateBill() {

    const patientName = document.getElementById("billPatient").value;
    const amount = document.getElementById("amount").value;

    fetch("https://hospital-system-5ntu.onrender.com/api/bills", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            patientName,
            amount
        })

    })

    .then(res => res.json())

    .then(data => {

        alert("Bill Generated Successfully");

    });

}

// ---------------- LOAD RECORDS ----------------

if(document.getElementById("patientList")){

    // PATIENTS

    fetch("https://hospital-system-5ntu.onrender.com/api/patients")

    .then(res => res.json())

    .then(data => {

        data.forEach(item => {

            document.getElementById("patientList").innerHTML += `
            
            <li>
            ${item.name} - ${item.age} years - ${item.disease}
            </li>

            `;

        });

    });

    // DOCTORS

    fetch("https://hospital-system-5ntu.onrender.com/api/doctors")

    .then(res => res.json())

    .then(data => {

        data.forEach(item => {

            document.getElementById("doctorList").innerHTML += `
            
            <li>
            Dr. ${item.name} - ${item.specialization}
            </li>

            `;

        });

    });

    // APPOINTMENTS

    fetch("https://hospital-system-5ntu.onrender.com/api/appointments")

    .then(res => res.json())

    .then(data => {

        data.forEach(item => {

            document.getElementById("appointmentList").innerHTML += `
            
            <li>
            ${item.patientName} with Dr. ${item.doctor} on ${item.date}
            </li>

            `;

        });

    });

    // BILLS

    fetch("https://hospital-system-5ntu.onrender.com/api/bills")

    .then(res => res.json())

    .then(data => {

        data.forEach(item => {

            document.getElementById("billList").innerHTML += `
            
            <li>
            ${item.patientName} - ₹${item.amount}
            </li>

            `;

        });

    });

}