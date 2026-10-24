export const successResponseFormat = (message: string, payload?: unknown) => {
  return {
    success: true,
    message,
    data: payload
  };
};

export const unsuccessfulResponseFormat = (
  message: string,
  error?: unknown,
  payload?: unknown
) => {
  return {
    success: false,
    message,
    error,
    data: payload
  };
};
