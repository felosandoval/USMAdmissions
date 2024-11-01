import React from 'react';

export default function ProgressBar({ currentStep }) {
  return (
    <div className="progress-barr">
      <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
        Paso 1: Información Personal
      </div>
      <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
        Paso 2: Información Académica
      </div>
    </div>
  );
}