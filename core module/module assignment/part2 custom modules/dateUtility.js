// Create a date utility module that exports today’s date and current time.

const dateTimeUtility = () => {
  const now = new Date();

  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  console.log(date, month, year);
};

dateTimeUtility();
