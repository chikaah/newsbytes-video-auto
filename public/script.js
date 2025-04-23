function generatePreview() {
  const preview = document.getElementById("preview");
  preview.innerHTML = "<p>Fetching the latest news... (simulation)</p>";
  setTimeout(() => {
    preview.innerHTML = "<p><strong>Breaking:</strong> AI now powers global news updates into video!</p>";
  }, 2000);
}￼Enter
