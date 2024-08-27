'use client';

import React, { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';

export type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen]);

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();
    onClose();
  };

  const bottomSheetContent = () => (
    <BottomSheetContainer>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className='bs_layer'
          >
            <div
              onClick={handleClose}
              style={{ background: 'black', opacity: 0.5, position: 'absolute', inset: 0 }}
            ></div>
            <motion.div
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ type: 'spring', stiffness: 90, damping: 18 }}
              className='bs_box-inner'
            >
              <div className='bs_header'></div>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BottomSheetContainer>
  );

  return bottomSheetContent();
};

export default BottomSheet;

export const BottomSheetContainer = styled.div`
  .bs_layer {
    position: fixed;
    inset: 0;
    z-index: 10000;
  }

  .bs_box-inner {
    position: absolute;
    bottom: 0;
    border-radius: 16px 16px 0 0;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow: auto;
    max-height: 60vh;
  }

  .bs_header {
    padding: 10px;
    position: sticky;
    inset-inline: 0;
    top: 0;
    z-index: 1;
    background: inherit;
  }

  .bs_header::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) scaleY(0.75);
    border-radius: 80px;
    width: 50%;
    height: 4px;
    background-color: grey;
  }
`;
