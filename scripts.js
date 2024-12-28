function searchDoctors() {
    alert("press doctor timings button to view timings");
    function loadTimeSlots() {
        const urlParams = new URLSearchParams(window.location.search);
        const doctor = urlParams.get('doctor');

        if (!doctor) {
            document.getElementById('time-slot-section').innerHTML = '<p>Please select a doctor from the previous page.</p>';
            return;
        }

        document.getElementById('doctor-name').textContent = doctor;

        // Dummy time slots
        const timeSlots = [
            '09:00 AM - 09:30 AM',
            '10:00 AM - 10:30 AM',
            '11:00 AM - 11:30 AM',
            '02:00 PM - 02:30 PM',
            '03:00 PM - 03:30 PM'
        ];

        const timeSlotList = document.getElementById('time-slots');
        timeSlots.forEach(slot => {
            const listItem = document.createElement('li');
            listItem.textContent = slot;
            listItem.className = 'list-group-item';
            timeSlotList.appendChild(listItem);
        });
    }

    window.onload = loadTimeSlots;
}

function bookAppointment(doctorName) {
    const modalTitle = document.querySelector("#bookingModal .modal-title");
    modalTitle.textContent = `Book Appointment with ${doctorName}`;
    const bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));
    bookingModal.show();
}

function confirmBooking() {
    const patientName = document.getElementById("patientName").value;
    const contactInfo = document.getElementById("contactInfo").value;
    const timeSlot = document.getElementById("timeSlot").value;

    if (patientName && contactInfo && timeSlot) {
        alert(`Appointment confirmed for ${patientName} at ${timeSlot}`);
        const bookingModal = bootstrap.Modal.getInstance(document.getElementById("bookingModal"));
        bookingModal.hide();
        document.getElementById("bookingForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}
