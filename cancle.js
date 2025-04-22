
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cancelForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        let pnrInput = document.getElementById("pnr").value.trim();
        let nameInput = document.getElementById("name").value.trim();

        if (!pnrInput || !nameInput) {
            showToast(); // Show error toast if fields are empty
            return;
        }

        // Add booking details inside the modal
        let tableBody = document.getElementById("bookingTableBody");
        tableBody.innerHTML = `
    <tr>
        <td><input type="radio" name="selectBooking" value="${pnrInput}" onclick="enableCancelButton()"></td>
        <td>${pnrInput}</td>
        <td>${nameInput}</td>
        <td>Luxury Grand Hotel</td>
        <td>Mar 12, 2024</td>
        <td>Mar 15, 2024</td>
    </tr>
`;
        // Show the booking details inside the modal
        document.getElementById("bookingTableContainer").style.display = "block";

        // Reset form fields
        document.getElementById("pnr").value = "";
        document.getElementById("name").value = "";
    });
});

// Enable the cancel button when a booking is selected
function enableCancelButton() {
    document.getElementById("cancelBookingBtn").disabled = false;
}

// Show confirmation popup on cancel
function cancelBooking() {
    let selectedBooking = document.querySelector("input[name='selectBooking']:checked");

    if (selectedBooking) {
        let ticketNumber = "TCK" + Math.floor(Math.random() * 1000000);

        let successPopup = document.createElement("div");
        successPopup.innerHTML = `
    <div class="modal fade show d-block" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center p-4">
                <i class="fas fa-check-circle text-success fa-3x"></i>
                <h4 class="mt-3">Booking Canceled</h4>
                <p>Your cancellation ticket number: <strong>${ticketNumber}</strong></p>
                <button class=" modal-success btn btn-primary" onclick="closePopup(this)">OK</button>
            </div>
        </div>
    </div>
`;
        document.body.appendChild(successPopup);
    }
}

// Function to show error toast
function showToast() {
    let toast = new bootstrap.Toast(document.getElementById('errorToast'));
    toast.show();
}

function closePopup(button) {
    button.closest(".modal").remove();
    location.reload(); // Reloads the page after closing the popup
}
