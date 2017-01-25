export const fetchTokens = (data, success) => {
  $.ajax({
    method: 'POST',
    data,
    success
  });
};
