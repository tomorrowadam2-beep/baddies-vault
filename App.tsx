
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [activeUsers, setActiveUsers] = useState<number>(18247);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    const notifInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 8000);

    return () => {
      clearInterval(userInterval);
      clearInterval(notifInterval);
    };
  }, []);

  const triggerTransition = () => {
    if (navigator.vibrate) {
      navigator.vibrate(500);
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const proceedToProtocol = () => {
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <StepOne 
            key="step1" 
            onUnlock={triggerTransition} 
            activeUsers={activeUsers} 
            showNotification={showNotification} 
          />
        )}
        {step === 2 && (
          <StepTwo 
            key="step2" 
            onProceed={proceedToProtocol} 
          />
        )}
        {step === 3 && (
          <StepThree 
            key="step3" 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
