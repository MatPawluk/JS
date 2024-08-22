const password = "hdjfhsd";

if (password.length > 10 && password.includes("!")) {
  console.log("Masz super hasło");
} else if (password.length > 10) {
  console.log("masz dobre hasło");
} else {
  console.log("masz za słabe hasło");
}
