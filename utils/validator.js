const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export default ({value, type}) => {
  const __error = {
    email: () => validateEmail(value),
    default: () => null,
  };
  const validated = __error[type || 'default']();
  return validated;
};
