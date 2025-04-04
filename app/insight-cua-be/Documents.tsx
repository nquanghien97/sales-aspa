import Modal from '@/components/ui/Modal';
import { Button } from 'antd'
import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface DocumentsProps {
  open: boolean
  onClose: () => void
}

function Documents(props: DocumentsProps) {
  const { open, onClose } = props;
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="!top-2 !bg-[white]"
    >
      <div className="flex items-center justify-between w-full border-b">
        <h1 className="text-2xl font-bold">Tài liệu tham khảo</h1>
        <Button
          type="text"
          onClick={onClose}
          className="!p-0 !border-none !bg-transparent !text-[black] hover:!bg-transparent hover:!text-[black]"
        >
          Đóng
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <Document file="/insight-1.pdf" onLoadSuccess={onDocumentLoadSuccess} className="w-full flex justify-center mb-4">
          <Page scale={1.5} pageNumber={pageNumber} />
        </Document>
        <div className="flex items-center flex-col justify-center w-full gap-2 mb-2">
          <div className="flex justify-center gap-2">
            <Button
            disabled={pageNumber === 1}
              onClick={() => {
                setPageNumber(pre => pre - 1)
              }}
            >
              Trang trước
            </Button>
            <Button
            disabled={pageNumber === numPages}
              onClick={() => setPageNumber(pre => pre + 1)}
            >
              Trang sau
            </Button>
          </div>
          <div>
            (Trang {pageNumber} trên {numPages})
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Documents