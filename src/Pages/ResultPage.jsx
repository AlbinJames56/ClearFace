import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const { processedData } = location.state || {}; // Get processed data from location state

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 via-gray-100 to-black p-5">
      <h1 className="text-4xl font-bold text-fuchsia mb-8">SRGAN Processed Results</h1>
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Before Enhancement */}
        <div className="flex-1">
          <h2 className="text-2xl text-blue mb-4">Before Enhancement</h2>
          <video
            className="w-full rounded-lg shadow-lg"
            src={processedData?.beforeVideoUrl}
            controls
          ></video>
        </div>

        {/* After Enhancement */}
        <div className="flex-1">
          <h2 className="text-2xl text-blue mb-4">After Enhancement</h2>
          <video
            className="w-full rounded-lg shadow-lg"
            src={processedData?.afterVideoUrl}
            controls
          ></video>
        </div>
      </div>

      {/* Metrics and Details */}
      <div className="mt-8 w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-lg text-meroon">
        <h3 className="text-2xl mb-4">Enhancement Details</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Original Resolution:</strong> {processedData?.originalResolution}</li>
          <li><strong>Enhanced Resolution:</strong> {processedData?.enhancedResolution}</li>
          <li><strong>Processing Time:</strong> {processedData?.processingTime} seconds</li>
          <li><strong>Quality Metrics:</strong> {processedData?.qualityMetrics}</li>
        </ul>
      </div>
    </div>
  );
}

export default ResultPage;
