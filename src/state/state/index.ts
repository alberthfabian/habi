interface IInitialSteps {
  steps: number;
}

export interface IInitialstate {
  steps: IInitialSteps;
}

export const initialState: IInitialstate = {
  steps: {
    steps: 0,
  },
};
