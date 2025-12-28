import bcrypt from "bcrypt";

const password = "mySecurePassword";

const hashedPassword = await bcrypt.hash(password, 10);
// .hash makes the combination of mix letters and numbers
// 10 is salt rounds makes the password more secure after .hash method
// salt : Salt is random data added to a password before hashing.

console.log("Hashed Password:", hashedPassword);

// checks the password is matched if matched retunrs true else false
const isMatch = await bcrypt.compare("mySecurePassword", hashedPassword);
console.log("Password Match:", isMatch);
