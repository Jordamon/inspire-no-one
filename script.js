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
    const generatedStatement = phraseGenerator(beginningPhrase, middlePhrase, endingPhrase);
    generatedStatementElement.innerHTML = `<i class="fa-solid fa-quote-left"></i> "${generatedStatement}" <i class="fa-solid fa-quote-right"></i>`;
};

