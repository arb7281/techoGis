import jsPDF from 'jspdf';

export function generatePDF(data) {
    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add content to the PDF from the JavaScript objects
    let y = 10;
    for (let i = 0; i < data.length; i++) {
        doc.text(`Category: ${data[i].Category}`, 10, y);
        doc.text(`Chemistry: ${data[i].Chemistry}`, 10, y + 10);
        doc.text(`Process: ${data[i].Process}`, 10, y + 20);
        doc.text(`Description: ${data[i].Description}`, 10, y + 30);
        y += 40;
    }

    // Save the PDF (this will automatically trigger a download in the browser)
    doc.save('output.pdf');
}