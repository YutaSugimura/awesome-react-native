type Current = {
  current: {
    progress: number;
  };
};

export const opacityTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'timing',
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({ current }: Current) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};
