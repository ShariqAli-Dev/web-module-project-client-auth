export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';

export const onChange = (event) => {
  return { type: ON_CHANGE, payload: event };
};

export const onSubmit = () => {
  return { type: ON_SUBMIT };
};
