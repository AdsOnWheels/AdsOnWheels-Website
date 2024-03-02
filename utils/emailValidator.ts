const isValidEmail = (email: string): boolean => {
  // Define a regular expression to match common work email domains
  const validEmailRegex =
    /@(gmail|yahoo|hotmail|proton|protonmail|outlook|live|aol|icloud|office|companyname|yourcompany)\.[a-z]{2,}$/i;
  return validEmailRegex.test(email);
};

export default isValidEmail;
