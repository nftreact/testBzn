'use client';

import { useEffect } from 'react';

import { useCountdown } from '@/libs/hooks';
import { Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type TimerProps = {
  handleEndTime: (value: boolean) => void;
};

const Timer = ({ handleEndTime }: TimerProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { minutes, seconds, isEnded } = useCountdown(120000); // 2 minutes in milliseconds
  console.log(minutes, seconds, isEnded);

  useEffect(() => {
    if (isEnded) {
      handleEndTime(true);
    }
  }, [isEnded]);

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return <Text style={{ paddingRight: '10px' }}>{`${minutes}:${seconds}`}</Text>;
};

export default Timer;

/**
 * styled-component
 * _______________________________________________________________________________
 */
