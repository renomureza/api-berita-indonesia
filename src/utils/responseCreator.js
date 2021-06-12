const responseCreator = (data = null) => {
  return {
    success: data ? true : false,
    message: data ? null : 'Not Found',
    data,
  };
};

module.exports = responseCreator;
