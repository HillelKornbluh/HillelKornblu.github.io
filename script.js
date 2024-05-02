function convertToDownload() {
    var driveLink = document.getElementById('driveLink').value;
    var downloadLink = '';

    // Check if it's a Google Drive link
    if (driveLink.includes('drive.google.com')) {
        // Replace '/view' with '/uc'
        downloadLink = driveLink.replace('/view', '/uc');
        // Open the download link in a new tab
        window.open(downloadLink, '_blank');
    } else {
        downloadLink = 'Not a valid Google Drive link.';
    }

    // Display the download link
    document.getElementById('downloadLink').textContent = downloadLink;
}
