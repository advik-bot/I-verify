import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../LanguageContext';

interface CameraViewProps {
  onCapture: (base64: string, mimeType: string) => void;
  onClose: () => void;
}

const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      } else {
        reject(new Error('Failed to read blob as base64 string.'));
      }
    };
    reader.onerror = (error) => reject(error);
  });


const CameraView: React.FC<CameraViewProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const { t } = useLanguage();

  const startCamera = useCallback(async (mode: 'environment' | 'user') => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setError(null);
    setStream(null);
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: mode } }
      });
      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
       if (mode === 'environment') {
          setFacingMode('user'); // Fallback to user camera
      } else {
          setError(t.cameraError);
      }
    }
  }, [stream, t.cameraError]);

  useEffect(() => {
    startCamera(facingMode);
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facingMode]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      setCapturedImage(canvas.toDataURL('image/jpeg'));
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
    }
  };
  
  const handleSwitchCamera = () => {
      setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  }

  const handleConfirm = async () => {
    if (capturedImage && canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        if (blob) {
          const base64 = await blobToBase64(blob);
          onCapture(base64, 'image/jpeg');
        }
      }, 'image/jpeg', 0.9);
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    startCamera(facingMode);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
      <div className="bg-slate-800 rounded-2xl p-4 w-full max-w-xl mx-auto shadow-2xl">
        <canvas ref={canvasRef} className="hidden" />
        
        {error && 
          <div className="text-center text-red-400 p-4">
            <p>{error}</p>
            <button onClick={onClose} className="mt-4 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg">{t.close}</button>
          </div>
        }

        {!error && capturedImage ? (
          <div>
            <img src={capturedImage} alt={t.capturedPreview} className="rounded-lg w-full" />
            <div className="flex justify-around mt-4">
              <button onClick={handleRetake} className="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-semibold transition-colors">{t.retake}</button>
              <button onClick={handleConfirm} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors">{t.confirmPhoto}</button>
            </div>
          </div>
        ) : !error && (
          <div className="relative aspect-video">
            <video ref={videoRef} autoPlay playsInline muted className="rounded-lg w-full h-full object-cover bg-black" />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-8">
                <button onClick={handleSwitchCamera} className="w-14 h-14 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white hover:bg-opacity-60" aria-label={t.switchCamera}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5" /></svg>
                </button>
                 <button onClick={handleCapture} className="w-20 h-20 bg-white rounded-full border-4 border-slate-400 ring-4 ring-white ring-opacity-50 transition-transform hover:scale-105" aria-label={t.takePicture}></button>
                 <div className="w-14 h-14"></div>
            </div>
          </div>
        )}
        
        <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center text-2xl font-bold leading-none hover:bg-opacity-75" aria-label={t.closeCamera}>&times;</button>
      </div>
    </div>
  );
};

export default CameraView;
