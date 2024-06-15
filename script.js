const q = console.log;
let mainPart = 0;

const updateAll = (event) => {
  if (mainPart == 0) {
    document.getElementById("landingMessage").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");

    mainPart = 1;
  }

  document.getElementById("eventKey").innerText = `${
    event.key === " " ? "Space" : event.key
  }`;
  document.getElementById("eventKeyCode").innerText = `${event.keyCode}`;
  document.getElementById("eventCode").innerText = `${event.code}`;

  q(event.key);
  q(event.keyCode);
  q(event.code);
};
