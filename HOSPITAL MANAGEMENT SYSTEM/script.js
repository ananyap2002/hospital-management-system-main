document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const contactNumber = document.getElementById("contactNumber").value;

        // Assume a real application would send this data to a server for processing.
        // For simplicity, we'll just display the registration details.
        displayRegistrationDetails(fullName, age, gender, contactNumber);
    });

    function displayRegistrationDetails(fullName, age, gender, contactNumber) {
        const registrationDetails = `
            <div>
                <h3>Registration Successful</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Contact Number:</strong> ${contactNumber}</p>
            </div>
        `;

        const registrationSection = document.getElementById("registration");
        registrationSection.innerHTML = registrationDetails;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const labTestRequestForm = document.getElementById("labTestRequestForm");

    labTestRequestForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const testName = document.getElementById("testName").value;
        const patientName = document.getElementById("patientName").value;

        // Assume a real application would send this data to a lab server for processing.
        // For simplicity, we'll just display a sample test result.
        const testResult = generateRandomTestResult();
        displayTestResults(testName, patientName, testResult);
    });

    function generateRandomTestResult() {
        const possibleResults = ["Positive", "Negative", "Inconclusive"];
        const randomIndex = Math.floor(Math.random() * possibleResults.length);
        return possibleResults[randomIndex];
    }

    function displayTestResults(testName, patientName, testResult) {
        const testResultText = `Lab test result for ${testName} requested by ${patientName}: ${testResult}`;

        const testResultsSection = document.getElementById("testResults");
        const testResultParagraph = document.getElementById("testResultText");
        testResultParagraph.textContent = testResultText;

        testResultsSection.style.display = "block";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const consultationRequestForm = document.getElementById("consultationRequestForm");

    consultationRequestForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const doctorName = document.getElementById("doctorName").value;
        const patientNameConsult = document.getElementById("patientNameConsult").value;
        const consultationType = document.getElementById("consultationType").value;

        // Assume a real application would send this data to a server for processing.
        // For simplicity, we'll just display a sample consultation result.
        const consultationResult = generateSampleConsultationResult();
        displayConsultationResults(doctorName, patientNameConsult, consultationType, consultationResult);
    });

    function generateSampleConsultationResult() {
        return "Consultation successful. Prescribed medication and advised rest.";
    }

    function displayConsultationResults(doctorName, patientName, consultationType, consultationResult) {
        const consultationResultText = `Consultation with ${doctorName} for ${consultationType} ${patientName}: ${consultationResult}`;

        const consultationResultsSection = document.getElementById("consultationResults");
        const consultationResultParagraph = document.getElementById("consultationResultText");
        consultationResultParagraph.textContent = consultationResultText;

        consultationResultsSection.style.display = "block";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const medicineForm = document.getElementById("medicineForm");
    const medicineItems = document.getElementById("medicineItems");

    medicineForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const medicineName = document.getElementById("medicineName").value;
        const quantity = parseInt(document.getElementById("quantity").value, 10);

        // Add the medicine to the list
        addMedicineToList(medicineName, quantity);
    });

    function addMedicineToList(medicineName, quantity) {
        const medicineItem = document.createElement("li");
        medicineItem.textContent = `${medicineName} - Quantity: ${quantity}`;
        medicineItems.appendChild(medicineItem);

        // Clear the form
        medicineForm.reset();
    }
});


