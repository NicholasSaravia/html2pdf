const exportButton = document.getElementById("export");
exportButton.addEventListener("click", () => {
  var element = document.getElementsByClassName("container");
  var element = document.getElementById("element-to-print");
  var opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
});
