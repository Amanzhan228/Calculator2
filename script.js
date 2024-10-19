function calculatePrice() {
    let basePrice = 100;

    let educationCoeff = parseFloat(document.getElementById("education").value);
    let netWorthCoeff = parseFloat(document.getElementById("netWorth").value);
    let casteBonus = parseFloat(document.getElementById("caste").value);

    let skillBonus = 0;
    if (document.getElementById("instrument").checked) skillBonus += 10;
    if (document.getElementById("cook").checked) skillBonus += 20;
    if (document.getElementById("easygoing").checked) skillBonus += 15;
    if (document.getElementById("sing").checked) skillBonus += 10;

    let ageCoeff = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationCoeff = 1;
    if (document.getElementById("parentsGossip").checked) reputationCoeff *= 0.85;
    if (document.getElementById("characterGossip").checked) reputationCoeff *= 0.9;
    if (document.getElementById("generalGossip").checked) basePrice += parseFloat(document.getElementById("generalGossip").value);

    let finalPrice = basePrice * educationCoeff * netWorthCoeff * ageCoeff + casteBonus + skillBonus;
    finalPrice *= reputationCoeff;

    document.getElementById("price").innerText = finalPrice.toFixed(2);
}
