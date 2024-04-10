const readline = require("readline");

const questions = [
  "What's your name? Nicknames are also acceptable ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const responses = [];

const survey = function(index) {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      responses.push(answer);
      survey(index + 1); // ask the next question via recursion
    });
  } else {
    rl.close();
    console.log('\n');
    console.log("Survey Complete!");

    console.log(`${responses[0]} loves listening to ${responses[2]} while ${responses[1]}, devouring ${responses[4]} for ${responses[3]}, prefers ${responses[5]} over any other sport, and is amazing at ${responses[6]}.`);
  }
};

// Start the recursive function with the first question
survey(0);




