import React from 'react';

const ResumeButton = () => {
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual filename of your resume file.
    const resumeFilePath = '/Veera_Resume.pdf';

    // Create a temporary anchor element to trigger the download.
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
    downloadLink.download = 'C:\VEERA\ReactJS\Website\resume\public\Veera_Resume.pdf'; // Change the filename if needed.
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownloadResume}>
      Resume
    </button>
  );
};

export default ResumeButton;
