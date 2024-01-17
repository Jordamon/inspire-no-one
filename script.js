//Arrays for parts of the phrase generator
const beginningPhrase = [
    "You ", "Just ", "Believe ", "Can ", "Power ", "Pray ", "Energy ", 
    "Keep ", "Get ", "Go ", "Live ", "Dream ", "Imagine ", "Dance ", "Explore ",
    "Feel ", "Create ", "Embrace ", "Unlock ", "Discover ", "Transform ", 
    "Cherish ", "Radiate ", "Invent ", "Celebrate ", "Radiant ", "Enchant ",
    "Captivate ", "Inspire ", "Uplift ", "Awaken ", "Blossom ", "Thrive ", 
    "Radiant ", "Ascend ", "Conquer ", "Embark ", "Mystify ", "Emanate ",
    "Illuminate ", "Fascinate ", "Resonate ", "Synchronize ", "Energize ", "Envision ",
    "Sculpt ", "Vibrate ", "Stimulate ", "Immerse ", "Transcend ", "Mesmerize ",
    "Revive ", "Revel ", "Pioneer ", "You ", "Just ", "Believe ", "Can ", "Keep ", "Get ", "Go ", "Live ", "Dream "
  ];
  
  const middlePhrase = [
    "Are ", "In ", "Keep ", "Do ", "You ", "Is ", "For ", "From ", 
    "Running ", "Move ", "Laugh ", "Conquer ", "Contribute ", 
    "Radiate ", "Savor ", "Breathe ", "Illuminate ", "Spark ", "Succeed ", 
    "Thrive ", "Unleash ", "Empower ", "Harmonize ", "Enrich ", "Revitalize ", 
    "Persevere ", "Vibrant ", "Elevate ", "Harmonize ", "Revitalize ", "Inspire ", 
    "Renew ", "Flourish ", "Magnetize ", "Synergize ", "Contribute ", "Engage ", "Transcend ", "Elevate ", "Sway ", "Pioneer ",
    "Cultivate ", "Revolve ", "Aspire ", "Journey ", "Uproot ", "Ponder ", "Enthrall ",
    "Quicken ", "Illuminate "
  ];
  
  const endingPhrase = [
    "Strong", "Yourself", "Going", "It", "Not", "Within", "Love", "Food", 
    "Adventure", "Harmony", "Wonder", "Magic", "Wisdom", "Infinity", 
    "Serenity", "Bliss", "Eternity", "Journey", "Symphony", "Rhythm", 
    "Sunshine", "Whimsy", "Radiance", "Glow", "Unity", "Soul", "Zest", 
    "Vitality", "Tranquility", "Euphoria", "Sparkle", "Inspiration", 
    "Gleam", "Dream", "Flair", "Spectacle", "Eclipse", "Luminary",
    "Ripple", "Infinity","Legacy", "Whisper", "Vortex",
    "Reverie", "Epiphany", "Majesty", "Eclipse"
  ];
  
// Generator

// Helper function to get a random word from an array
const getRandomWord = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generator function
const phraseGenerator = (arr1, arr2, arr3) => {
    let word1 = getRandomWord(arr1);
    let word2 = getRandomWord(arr2);
    let word3 = getRandomWord(arr3);
    let word4 = getRandomWord(arr2);
    let word5 = getRandomWord(arr3);

    let howManyWords = Math.floor(Math.random() * 3) + 2;

    if (howManyWords === 3) {
        return `${word1}${word2}${word3}`;
    } else if (howManyWords === 4) {
        return `${word1}${word2}${word3} ${word4}`;
    } else {
        return `${word1}${word2}${word3} ${word4}${word5}`;
    }
};

let generatedStatement = '';

const updateGeneratedStatement = () => {
  const generatedStatementElement = document.getElementById('generatedStatement');
  generatedStatement = phraseGenerator(beginningPhrase, middlePhrase, endingPhrase);
  generatedStatementElement.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${generatedStatement} <i class="fa-solid fa-quote-right"></i>`;
  return generatedStatement;
};

// Script for saving favourite quotes

const savedQuotes = [];

const saveAQuote = (generatedStatement) => {
  savedQuotes.push(generatedStatement);

  const savedItemList = document.getElementById('saved-list');
  
  // Clear existing list items
  savedItemList.innerHTML = '';

  // Iterate over savedQuotes and create list items
  savedQuotes.forEach((quote) => {
    const listItem = document.createElement('li');
    listItem.textContent = quote;
    savedItemList.appendChild(listItem);
  });

  console.log(savedQuotes);
};