"use client";
import { pdfjs, Document, Page as PDFPage } from "react-pdf";
import React, { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Link from "next/link";
// import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Page() {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <section>
      <Link href={"/work"}>{"< Back"}</Link>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        <br />
        LOCALIZING MARKET
      </h1>
      <Document
        file={
          "https://uzoqbbizturkvlbg.public.blob.vercel-storage.com/localize-market-Yjn9ju0ZJ8zUpNCSNBRlhch2I2wy0e.pdf"
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <>
            <PDFPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800}
              height={400}
              className="mt-3"
            />
          </>
        ))}
      </Document>
    </section>
  );
}
