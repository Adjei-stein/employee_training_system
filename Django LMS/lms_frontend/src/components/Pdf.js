import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer';
import pdfjs from 'pdfjs-dist/build/pdf';
import pdfFile from '../pdf/boarding.pdf'

const PdfViewer = () => {
  return (
    <div>
      <Worker workerUrl={`/${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl='../pdf/boarding.pdf' />
      </Worker>
    </div>
  );
};

export default PdfViewer;
