document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rescheduleForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let bookingNumber = document.getElementById("pnr-reschedule").value.trim();
        let guestName = document.getElementById("name-reschedule").value.trim();
        let newCheckin = document.getElementById("new-checkin").value.trim();
        let newCheckout = document.getElementById("new-checkout").value.trim();
        let rescheduleReason = document.getElementById("reschedule-reason").value.trim();

        if (!bookingNumber || !guestName || !newCheckin || !newCheckout || !rescheduleReason) {
            displayErrorToast(); // Show error toast if fields are empty
            return;
        }

        // Show success popup
        displayRescheduleSuccessPopup(bookingNumber);

        // Reset form fields
        document.getElementById("rescheduleForm").reset();
    });
});

// Function to show success popup
function displayRescheduleSuccessPopup(bookingNumber) {
    let successPopup = document.createElement("div");
    successPopup.innerHTML = `
        <div class="modal fade show d-block" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center p-4">
                    <i class="fas fa-check-circle text-success fa-3x"></i>
                    <h4 class="mt-3">Reschedule Successful</h4>
                    <p>Your reschedule request for Booking Number (<strong>${bookingNumber}</strong>) has been processed.</p>
                    <button class="btn modal-success text-white" onclick="dismissSuccessPopup(this)">OK</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(successPopup);
}

// Function to close popup and reload page
function dismissSuccessPopup(button) {
    button.closest(".modal").remove();
    location.reload(); // Reloads the page after closing the popup
}

// Function to show error toast
function displayErrorToast() {
    let toast = new bootstrap.Toast(document.getElementById('errorToast'));
    toast.show();
}
