const buttonNode = document.querySelector(".button");

const getButtonActive = () => {
  getServerResponse();
  renderTitle();
  renderBodyClass();
}

const getServerResponse = () => {
  fetch("https://www.boredapi.com/api/activity/")
    .then (activity => activity.json())
    .then ((res) => {
      const text = res.activity;
      document.querySelector(".text").innerText = `${text}`;
  });
}

const renderTitle = () => {
  document.querySelector(".title").innerText = "Ура, теперь не скучно 🔥";
};

const renderBodyClass = () => {
  document.querySelector("body").style.background = "linear-gradient(180deg, rgba(0, 176, 28, 0.2) 24.48%, rgba(255, 255, 255, 0) 100%)";
};

buttonNode.addEventListener("click", getButtonActive);