// @ts-nocheck
import React, { useState } from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import cv from './ER Diagram for blog site.pdf'
const ProfileMessages = () => {
    // eslint-disable-next-line no-unused-vars
    const [numPages, setNumPages] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        
             <Document
        file={cv}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
                                
                          
    );
};

export default ProfileMessages;