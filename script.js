// Function to enlarge the clicked image
function enlargeImage(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("enlargedImg");

    modal.style.display = "block"; // Show the modal
    modalImg.src = img.src; // Set the source of the image in the modal to the clicked image
}

// Function to close the modal when clicking outside the image
function closeModal(event) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("enlargedImg");

    // Close the modal only if the clicked target is not the image itself
    if (event.target !== modalImg) {
        modal.style.display = "none"; // Hide the modal
    }
}
