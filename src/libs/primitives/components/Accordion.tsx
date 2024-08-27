'use client';

import { useState } from 'react';

import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { Flex } from '../index';

interface AccordionProps {
  triggerText: string;
  children: React.ReactNode;
}

const containerVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const Accordion: React.FC<AccordionProps> = ({ triggerText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Trigger variant='outline' onClick={toggleAccordion}>
        <Flex width={'100%'} justify={'between'} align={'center'}>
          {triggerText}
          <CaretDownIcon style={{ scale: 1.6 }} />
        </Flex>
      </Trigger>
      <motion.div
        variants={containerVariants}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
        layout // Enable layout animation
      >
        <div style={{ paddingBlock: '20px' }}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;

const Trigger = styled(Button)`
  width: 100%;
  color: #000;
  padding-block: 25px;
  outline: none;
  box-shadow: inset 0 0 0 1px #37373750;
`;
