const login = document.querySelector(".login-btn");
const loginModal = document.querySelector(".login-wrapper");
const closebtn1 = document.querySelector(".close1");
const closebtn2 = document.querySelector(".close2");
const signupBtn = document.querySelector(".signup-btn");
const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".signup");
const scrollToTop = document.querySelector(".js-top");

const scrollFunc = () =>{
    let y=window.scrollY;   
    if(y>20){
		scrollToTop.style.display="block";
    }
    else{
        scrollToTop.style.display="none";
    }
}

const showLoginModal = () => {
    loginModal.style.display = "block";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  };

const closeModal =()=>{
    document.querySelector(".details").reset();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginModal.style.display = "none";
};

const showSignupModal = () => {
    loginModal.style.display = "block";
    loginForm.style.display = "none";
    signupForm.style.display = "block";
};

login.addEventListener(("click"),() => {
  showLoginModal();
});

closebtn1.addEventListener(("click"),() => {
    closeModal();
});

closebtn2.addEventListener(("click"),() => {
    closeModal();
});

signupBtn.addEventListener(("click"),() => {
    showSignupModal();
});

window.addEventListener(("scroll"),() => {
    scrollFunc();
});


