document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("trackBookingForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let bookingNumber = document.getElementById("booking-number").value.trim();
        let guestName = document.getElementById("guest-name").value.trim();

        if (!bookingNumber || !guestName) {
            showToast();
            return;
        }

        // Example: Dynamic booking status (replace this with actual backend data)
        let statusSteps = {
            booked: true,
            payment: true,
            cancelled: true,
            refundInitiated: true,
            refundComplete: false // Change this based on actual refund status
        };

        // Update UI based on the booking status
        updateTracker(statusSteps);

        // Show the tracking progress
        document.getElementById("trackingBooking").style.display = "block";

        // Reset the form
        document.getElementById("trackBookingForm").reset();
    });
});

function updateTracker(statusSteps) {
    Object.keys(statusSteps).forEach(step => {
        let stepId = step.replace(/([A-Z])/g, "-$1").toLowerCase(); // Convert camelCase to hyphen-case
        let stepElement = document.getElementById(`step-${stepId}`);
        if (statusSteps[step]) {
            stepElement.classList.add("completed");
        } else {
            stepElement.classList.remove("completed");
        }
    });
}
