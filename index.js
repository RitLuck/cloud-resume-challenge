const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://f57bnqahm6alpngiiedxldrhza0tnxop.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Visitors: ${data}`;
}

updateCounter();