createForm().catch(console.error);
document.getElementById("add").onclick = function appendField() {
  createForm();
};
document.getElementById("register").onclick = function inj() {
  getCurrentTab().then((tab) => {
    const { url, id } = tab;
    chrome.scripting.executeScript({
      target: { tabId: id, allFrames: true },
      files: ["content-script.js"],
    });
    console.log(`Loading: ${url}`);
  });
};

document.getElementById("save").onclick = function saveStorage() {
  const crnList = [];
  console.log("saved CRN");
  try {
    for (let i = 0; i < 99; i++) {
      if (document.getElementsByClassName("input")[i].value.length > 0) {
        console.log(document.getElementsByClassName("input")[i].value);
        crnList.push(document.getElementsByClassName("input")[i].value);
      }
    }
  } catch (error) {}
  chrome.storage.sync.set({ crnList });
};

async function createForm() {
  let form = document.getElementById("form");
  let input = document.createElement("input");
  input.setAttribute("class", "input");
  input.type = "text";
  input.addEventListener("change", (event) => {
    console.log("change test");
  });

  let span = document.createElement("span");
  let div = document.createElement("div");
  div.appendChild(input);
  div.appendChild(span);
  form.appendChild(div);
}

async function getCurrentTab() {
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
