document.addEventListener("DOMContentLoaded", function () {
    let specialServiceForm = document.getElementById("specialServiceForm");

    if (!specialServiceForm) {
        console.error("Special Service Form not found!");
        return;
    }

    specialServiceForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form reload

        let bookingNumber = document.getElementById("pnr-service").value.trim();
        let guestName = document.getElementById("name-service").value.trim();
        let serviceType = document.getElementById("service-type").value.trim();
        let additionalRequest = document.getElementById("additional-request").value.trim();

        if (!bookingNumber || !guestName || !serviceType) {
            displayServiceErrorToast();
            return;
        }

        // Show success popup
        showServiceSuccessPopup(bookingNumber, serviceType, additionalRequest);

        // Reset form fields
        specialServiceForm.reset();
    });
});

// Function to show success popup
function showServiceSuccessPopup(bookingNumber, serviceType, additionalRequest) {
    let serviceText = document.getElementById("service-type").selectedOptions[0].text;
    let requestText = additionalRequest ? `<p>Additional Request: <strong>${additionalRequest}</strong></p>` : "";

    let successPopup = document.createElement("div");
    successPopup.innerHTML = `
        <div class="modal fade show d-block" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-center p-4">
                    <i class="fas fa-check-circle text-success fa-3x"></i>
                    <h4 class="mt-3">Request Submitted</h4>
                    <p>Your request for <strong>${serviceText}</strong> under Booking <strong>${bookingNumber}</strong> has been processed.</p>
                    ${requestText}
                    <button class="btn btn-primary" onclick="closeServicePopup(this)">OK</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(successPopup);
}

// Function to close popup
function closeServicePopup(button) {
    window.location.reload();
}

// Function to show error toast
function displayServiceErrorToast() {
    let toastElement = document.getElementById('errorToast');
    if (toastElement) {
        let toast = new bootstrap.Toast(toastElement);
        toast.show();
    } else {
        console.error("Error toast element not found!");
    }
}
