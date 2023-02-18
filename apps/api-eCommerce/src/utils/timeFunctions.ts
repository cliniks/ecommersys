export const converToLocalTime = (serverDate: any) => {
  const verifyDate =
    typeof serverDate === "string" ? new Date(serverDate) : serverDate;
  var dt = new Date(Date.parse(verifyDate));
  var localDate = dt;

  var gmt = localDate;
  var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
  var localNow = new Date().getTimezoneOffset(); // get the timezone
  // offset in minutes
  var localTime = min - localNow; // get the local time

  var dateStr: Date = new Date(localTime * 1000 * 60);
  // dateStr = dateStr.toISOString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"); // this will return as just the server date format i.e., yyyy-MM-dd'T'HH:mm:ss.SSS'Z'

  return dateStr.toISOString().split(".")[0];
};
