import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Layout from '../components/Layout';

interface DocumentData {
  title: string;
  description?: string;
  url: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function DocumentPage() {
  const { section, footerName } = useParams();
  const [doc, setDoc] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (!section || !footerName) return;
    const fetchDoc = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/adminUploads/getDocument.php?section=${encodeURIComponent(
            section
          )}&footer_name=${encodeURIComponent(footerName)}`
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch document');
        }
        setDoc(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, [section, footerName, API_BASE]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  if (loading)
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-20 px-6 pt-32 text-center text-gray-500 font-light tracking-widest uppercase text-sm">
          Loading document...
        </div>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-20 px-6 pt-32 text-center text-red-500 font-light text-sm">
          {error}
        </div>
      </Layout>
    );

  if (!doc) return null;

  return (
    <Layout>
      <main className="bg-white text-gray-800">
        <section className="max-w-6xl mx-auto py-20 px-6 pt-32">

          {/* Title block */}
          <div className="mb-10">
            <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
            <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-4">
              {doc.title}
            </h1>
            {doc.description && (
              <p className="text-gray-600 font-light leading-relaxed max-w-2xl">
                {doc.description}
              </p>
            )}
          </div>

          {/* PDF viewer */}
          <div
            ref={containerRef}
            className="border border-gray-200 bg-[#FAFAF8] overflow-auto flex justify-center"
            style={{ height: '80vh' }}
          >
            <Document
              file={doc.url}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <p className="text-sm text-gray-400 font-light tracking-widest uppercase mt-10">
                  Loading PDF...
                </p>
              }
              error={
                <p className="text-sm text-red-400 font-light tracking-widest uppercase mt-10">
                  Failed to load PDF.
                </p>
              }
            >
              {Array.from(new Array(numPages), (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={Math.min(containerWidth, 800)}
                />
              ))}
            </Document>
          </div>

          {/* Download button */}
          <div className="mt-8">
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-8 py-3 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
            >
              Download
            </a>
          </div>

        </section>
      </main>
    </Layout>
  );
}