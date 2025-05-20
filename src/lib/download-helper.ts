/**
 * Helper function to download files from URLs
 */
export function downloadFile(url: string, filename: string) {
  // Create a blob from the URL
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a temporary URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", filename);

      // Append to the document temporarily
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("Download failed:", error);
    });
}
