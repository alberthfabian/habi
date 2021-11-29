interface IInitialSteps {
  steps: number;
}

export interface IInitialTicket {
  ticket: object;
}

export interface IInitialstate {
  steps: IInitialSteps;
  ticket: IInitialTicket;
}

export const initialState: IInitialstate = {
  steps: {
    steps: 0,
  },
  ticket: {
    ticket: {},
  },
};
