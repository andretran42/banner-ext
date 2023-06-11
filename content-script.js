crnPromise = chrome.storage.sync.get();
addCRN = document.getElementById("addAnotherCRN");

inputCRN = () => {
  crnPromise.then(function (result) {
    crnLi = result["crnList"];
    console.log(crnLi);
    for (let i = 0; i < crnLi.length; i++) {
      let inpCRN = document.getElementById("txt_crn" + (i + 1).toString());
      console.log(inpCRN);
      inpCRN.value = crnLi[i];
      addCRN.click();
    }
  });
};

inputCRN();
