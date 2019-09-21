$(document).ready(function() {
  var javaScript = {
    languageUse: "web",
    paradigms: "less",
    letter: "j",
    animalType: "cat",
    developed: "before"
  }
  var cSharp = {
    languageUse: "application",
    paradigms: "more",
    letter: "c",
    animalType: "cat",
    developed: "after"
  }
  var python = {
    languageUse: "data",
    paradigms: "more",
    letter: "p",
    animalType: "dog",
    developed: "before"
  }
  var programmingLanguagesArray = [javaScript, cSharp, python];
  $("#user-input-container form").submit(function(event) {
    var yearDevelopedInput = $("input:radio[name='year-developed']:checked").val();
    var languageUseInput = $("input:radio[name='language-use']:checked").val();
    var paradigmAmountInput = $("input:radio[name='paradigm-amount']:checked").val();
    var bestLetterInput = $("input:radio[name='best-letter']:checked").val();
    var bestAnimalInput = $("input:radio[name='animal-type']:checked").val();
    checkYearDevelopedInput(yearDevelopedInput);
    checkLanguageUseInput(languageUseInput);
    checkParadigmAmountInput(paradigmAmountInput);
    checkBestLetterInput(bestLetterInput);
    checkBestAnimalInput(bestAnimalInput);

    event.preventDefault();
  });
  function checkYearDevelopedInput(inputArg) {
    if(inputArg === undefined) {
      $("#yearDevelopedInputContainer p").remove();
      $("#yearDevelopedInputContainer").append("<p>Please select an option</p>");
      return false;
    } else {
      return true;
    }
  }
  function checkLanguageUseInput(inputArg) {
    if(inputArg === undefined) {
      $("#languageUseInputContainer p").remove();
      $("#languageUseInputContainer").append("<p>Please select an option</p>");
      return false;
    } else {
      return true;
    }
  }
  function checkParadigmAmountInput(inputArg) {
    if(inputArg === undefined) {
      $("#paradigmAmountInputContainer p").remove();
      $("#paradigmAmountInputContainer").append("<p>Please select an option</p>");
      return false;
    } else {
      return true;
    }
  }
  function checkBestLetterInput(inputArg) {
    if(inputArg === undefined) {
      $("#bestLetterInputContainer p").remove();
      $("#bestLetterInputContainer").append("<p>Please select an option</p>");
      return false;
    } else {
      return true;
    }
  }
  function checkBestAnimalInput(inputArg) {
    if(inputArg === undefined) {
      $("#bestAnimalInputContainer p").remove();
      $("#bestAnimalInputContainer").append("<p>Please select an option</p>");
      return false;
    } else {
      return true;
    }
  }
});
