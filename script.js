document.getElementById('thesisForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    const fileType = file.type;

    if (fileType !== 'application/pdf') {
        alert('Mohon upload file dalam format PDF saja.');
        return;
    }

    // Placeholder for file upload functionality to Google Drive
    // Use Google Drive API for actual file upload process
    // The actual integration will require server-side processing and Google API credentials

    alert('Formulir telah berhasil disubmit dan Hasil Plagiarisme Anda Akan Dikirim dalam Waktu 1 X 24 Jam!');
});
