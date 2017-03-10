export const selectuser = (user) => {
  console.log(user.first);

  return  {
    type : "USER_SELECTED",
    payload : user
  }
};
