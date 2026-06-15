function checkAnswer(correctAnswer, storyPart) {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase(); // Convert to lowercase and trim whitespace
    const feedback = document.getElementById('feedback');
    const nextPuzzle = document.getElementById('nextPuzzle');
    
    if (userAnswer === correctAnswer.toLowerCase()) { // Convert correct answer to lowercase for comparison
        feedback.textContent = 'Correct! You can proceed to the next part of the story.';
        feedback.style.color = 'darkgreen';
        nextPuzzle.href = `story.html#${storyPart}`;
        nextPuzzle.style.display = 'inline-block';
    } else {
        feedback.textContent = 'Incorrect. Try again.';
        feedback.style.color = 'red';
    }
}
function showHint(hintId) {
    document.getElementById(hintId).style.display = 'block';
}
