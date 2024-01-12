//Arrays for parts of the phrase generator

const beginingPhrase = ["You ", "Just ", "Believe ", "Can ", "Power ", "Pray ", "Energy ", "Keep ", "Get ", "Go "];
const middlePhrase = ["Are ", "In ", "Keep ", "Do ", "You ", "Is ", "For ", "From ", "Running ", "Move "];
const endingPhrase = ["Strong", "Yourself", "Going", "It", "Not", "Within", "Love", "Food"];

// Generator

const phraseGenerator = (arr1, arr2, arr3) => {
    let word1 = arr1[Math.floor(Math.random() * arr1.length)];
    let word2 = arr2[Math.floor(Math.random() * arr2.length)];
    let word3 = arr3[Math.floor(Math.random() * arr3.length)];
    let word4 = arr2[Math.floor(Math.random() * arr2.length)];
    let word5 = arr3[Math.floor(Math.random() * arr3.length)];

    let howManyWords = Math.floor(Math.random() * 3) + 2;

    if (howManyWords === 3) {
        return word1 + word2 + word3;
    } else if (howManyWords === 4) {
        return word1 + word2 + word3 + " " + word4;
    } else {
        return word1 + word2 + word3 + " " + word4 + word5;
    }
}

const updateGeneratedStatement = () => {

    const generatedStatementElement = document.getElementById('generatedStatement');
    const generatedStatement = phraseGenerator(beginingPhrase, middlePhrase, endingPhrase);
    generatedStatementElement.textContent = `${generatedStatement}`;
};

