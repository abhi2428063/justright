// Script to handle the "Write" mode toggle
let writeMode = false;

document.getElementById('write-btn').addEventListener('click', function() {
    writeMode = !writeMode; // Toggle the state of write mode
    document.body.classList.toggle('write-mode', writeMode);
    // Hide or show elements based on the write mode state
    document.getElementById('new-btn').style.display = writeMode ? 'none' : 'inline-block';
    document.getElementById('menu-btn').style.display = writeMode ? 'none' : 'inline-block';
    document.querySelector('.contribute-btn').style.display = writeMode ? 'none' : 'inline-block';
});

document.getElementById('new-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to clear the text?')) {
        document.getElementById('writing-area').value = '';
    }
});

document.getElementById('download-btn').addEventListener('click', function() {
    const text = document.getElementById('writing-area').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = "myText.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
});

// Add the 'download-btn' to the HTML, assuming it is inside the 'text-area-container' div
// <button id="download-btn">Download</button>
