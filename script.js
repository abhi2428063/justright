// Function to update the download button state
function updateDownloadButtonState() {
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.disabled = !textAreaHasContent();
}

// Function to check if the text area has non-space characters
function textAreaHasContent() {
    return document.getElementById('writing-area').value.trim().length > 0;
}

// Event listener for text area to handle enabling of the download button
document.getElementById('writing-area').addEventListener('input', updateDownloadButtonState);

// Event listener to show the disabled download button when the textarea is clicked
document.getElementById('writing-area').addEventListener('click', function() {
    document.getElementById('download-btn').style.visibility = 'visible';
    updateDownloadButtonState();
});

// Event listener for the download button
document.getElementById('download-btn').addEventListener('click', function() {
    const text = document.getElementById('writing-area').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = "JustRight.txt"; // Name of the downloaded file
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none"; // Hide anchor element
    document.body.appendChild(anchor);
    anchor.click(); // Simulate click on the anchor to trigger download
    document.body.removeChild(anchor);
});

// Event listener for the new button
document.getElementById('new-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to clear the text?')) {
        document.getElementById('writing-area').value = '';
        document.getElementById('download-btn').style.visibility = 'hidden';
    }
});
