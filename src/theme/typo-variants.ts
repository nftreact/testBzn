export type TypoVariant = {
  size: {
    initial: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
    lg: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  };
  weight: {
    initial: 'light' | 'regular' | 'medium' | 'bold';
    lg: 'light' | 'regular' | 'medium' | 'bold';
  };
};

export const typoVariant: Record<string, TypoVariant> = {
  h1: {
    size: {
      initial: '7',
      lg: '7',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  h2: {
    size: {
      initial: '6',
      lg: '6',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  h3: {
    size: {
      initial: '5',
      lg: '5',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  h4: {
    size: {
      initial: '5',
      lg: '5',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  h5: {
    size: {
      initial: '5',
      lg: '5',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  h6: {
    size: {
      initial: '5',
      lg: '5',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },

  title1: {
    size: {
      initial: '4',
      lg: '4',
    },
    weight: {
      initial: 'bold',
      lg: 'bold',
    },
  },
  title2: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'bold',
      lg: 'bold',
    },
  },
  body1: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  body2: {
    size: {
      initial: '2',
      lg: '2',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  body3: {
    size: {
      initial: '2',
      lg: '2',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  paragraph1: {
    size: {
      initial: '3',
      lg: '3',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  paragraph2: {
    size: {
      initial: '2',
      lg: '2',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  paragraph3: {
    size: {
      initial: '2',
      lg: '2',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
  description1: {
    size: {
      initial: '2',
      lg: '2',
    },
    weight: {
      initial: 'light',
      lg: 'light',
    },
  },
  description2: {
    size: {
      initial: '1',
      lg: '1',
    },
    weight: {
      initial: 'regular',
      lg: 'regular',
    },
  },
};