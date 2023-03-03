import moment from "moment/moment"; //moment kütüphanemizi import ettik.


export const getCurrentDate = () => {
  return moment().format("YYYY-MM-DD");
};

export const convertCurrentDateToUserFormat = (date) => {
  return moment(date).format("DD MMMM YYYY");
};
