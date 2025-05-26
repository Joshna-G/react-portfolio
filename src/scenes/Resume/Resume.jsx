import { useEffect, useRef, useState } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';
// react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = '/JoshnaDevResume.pdf'; 
const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  const [numPages, setNumPages] = useState(null);

 
  useEffect(() => {
    const updateWidth = () => {
      if (pdfWrapper.current) {
        setPdfPageWidth(pdfWrapper.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  
  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

 
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'Joshna_Dev_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          onClick={handleDownload}
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            file={resumeLink}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<LinerProgress />}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pdfPageWidth}
                loading={<LinerProgress />}
                onLoadSuccess={removeTextLayerOffset}
              />
            ))}
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;