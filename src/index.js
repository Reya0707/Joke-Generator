document.getElementById("myButton").addEventListener("click", myFunction);


function showAnswer(response) {
  (response.data.answer);
}

let apiKey = "36c26f017e4ae34tb6a9679bb25odafe";
let context =
  "be polite and precise";
let prompt = "What's the national language of Belgium?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(apiUrl);

axios.get(apiUrl).then(showAnswer);




