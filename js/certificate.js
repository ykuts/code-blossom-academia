// script.js
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function generatePDF() {
    // Вставка данных в шаблон
    document.getElementById('title').textContent = 'Dynamic Title';
    document.getElementById('content').textContent = 'Dynamic content goes here...';

    // Создание PDF из HTML-шаблона
    const content = document.getElementById('pdf-content');

    html2canvas(content).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('document.pdf');
    });
}