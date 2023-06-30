const textRegExp = /^[a-zA-Z0-9]{3,}$/;

const emailRegExp =
  /^([a-zA-Z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/;

const sendButton = document.getElementById("send-button");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const errorName = document.getElementById("error-name");

const errorEmail = document.getElementById("error-email");

const errorMessage = document.getElementById("error-message");

const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");

const main = document.getElementsByClassName("main")[0];

const header = document.getElementsByClassName("header")[0];

const closeMenu = menu.children[0];

hamburger.addEventListener("click", (event) => {
  menu.style.left = 0;
  main.style.opacity = 0.2;
  header.style.opacity = 0.2;
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  console.log(event.target, menu.style.left);
  if (!event.target.classList.contains("menu") && menu.style.left === '0px') {
    menu.style.left = "-345px";
    main.style.opacity = 1;
    header.style.opacity = 1;
  }
});

sendButton.addEventListener("click", async () => {
  let flag = true;
  if (!(nameInput.value && textRegExp.test(nameInput.value))) {
    errorName.classList.add("show");
    flag = false;
  }

  if (!(emailInput.value && emailRegExp.test(emailInput.value))) {
    errorEmail.classList.add("show");
    flag = false;
  }

  if (!(messageInput.value && textRegExp.test(messageInput.value))) {
    errorMessage.classList.add("show");
    flag = false;
  }

  if (flag) {
    alert("Сообщение отправлено");
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    const response = await fetch(`https://example.com/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      }),
    });
  }
});

function hideText() {
  this.classList.remove("show");
}

nameInput.addEventListener("input", this.hideText.bind(errorName));

emailInput.addEventListener("input", this.hideText.bind(errorEmail));

messageInput.addEventListener("input", this.hideText.bind(errorMessage));
