interface IData {
  data: any;
  status: number;
  loading: boolean;
  error: string;
}

interface IAdd {
  add: any;
  status: number;
  loading: boolean;
  error: string;
}

interface IModal {
  modal: boolean;
}

export interface ISteps {
  steps: number;
}

export interface IInitialState {
  data: IData;
  add: IAdd;
  modal: IModal;
  steps: ISteps;
}

export const initialState: any = {
  data: {
    data: [],
    status: 0,
    loading: false,
    error: "",
  },
  add: {
    add: [],
    status: 0,
    loading: false,
    error: "",
  },
  modal: {
    modal: false,
  },
  steps: {
    steps: 1,
  },
};
