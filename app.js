// Funktion för att skapa ett div-element för grodan
function createFrogElement() {
    const frog = document.createElement('div');
    frog.className = 'frog'; // Sätter klassen till 'frog' för enkel styling
    frog.innerHTML = '🐸'; // Sätter in emoji för grodan
    return frog;
}

// Funktion för att sätta slumpmässig position för ett element
function setRandomPosition(element) {
    const randomX = Math.random() * (window.innerWidth - 40);
    const randomY = Math.random() * -window.innerHeight; // Startposition ovanför skärmen
    element.style.left = `${randomX}px`; // Sätter den slumpmässiga X-positionen
    element.style.top = `${randomY}px`; // Sätter den slumpmässiga Y-positionen
}

// Funktion för att skapa och animera grodan
function createAndAnimateFrog() {
    const frogContainer = document.getElementById('frog-container'); // Hämtar container-elementet från HTML
    const frog = createFrogElement(); // Skapar ett grod-element
    setRandomPosition(frog); // Sätter slumpmässig position för grodan
    frogContainer.appendChild(frog); // Lägger till grodan i container-elementet

    // Tar bort grodan efter 5 sekunder (5000 millisekunder)
    setTimeout(() => {
        frog.remove();
    }, 5000);
}

// Funktion för att starta animationen genom att skapa och animera grodor med intervall
function startRainingFrogs() {
    setInterval(createAndAnimateFrog, 1000); // Skapar och animera grodan varje sekund (1000 millisekunder)
}

// Lyssnar på att DOM har laddats och startar sedan regnet av grodor
document.addEventListener('DOMContentLoaded', startRainingFrogs);
