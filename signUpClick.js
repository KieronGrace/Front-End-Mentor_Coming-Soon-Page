function signUpClick(email){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    alert("Thanks for signing Up! We'll let you know when our site is up and running.")
    return true;
  } else {
    alert("ERROR: Please enter a valid email address")
    return false;
  }
}
