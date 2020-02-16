export const passwordPattern = {
  value: /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/i,
  message: 'Password must contain letters and numbers.'
};
export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  message: 'Not a valid email address.'
};
