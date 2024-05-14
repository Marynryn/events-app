const calculateAge = (birthdayString) => {
  const birthday = new Date(birthdayString);
  const today = new Date();

  let ageDiff = today - birthday;

  let ageDate = new Date(ageDiff);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age;
};

export default calculateAge;
