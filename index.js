require('./style.scss');

window.onload = function(){

	var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
					'P','Q','R','S','T','U','V','W','X','Y','Z'];

	//Get elements
	var getLives = document.getElementById('lives');
	var getCategoryName = document.getElementById('categoryName');
	var getHintBtn = document.getElementById('hintBtn');
	var getPlayBtn = document.getElementById('playBtn');
	var getAlphabet = document.getElementById('alphabet');
	var getAlphabetList = document.getElementById('alphabetList');
	var clue = document.getElementById('clue');
	var emptyWord = document.getElementById('emptyWord');

	var word; 				//selected word
	var categories; 		//array of categories
	var letterBtn;	 		//letter buttons
	var letterGuess;		//guessed letter
	var counter;			//counter used to compare with guess array. if values = , user wins
	var guesses;		//array used to store length of word
	var lives;
	var counter;
	var selectCategory;

	//Render letters on screen
	var renderLetters = function (){
		ul = document.createElement('ul');
		ul.id = 'letter';
		//loop through alphabet array to render
		for(var i = 0; i < alphabet.length; i++){
			letterBtn = document.createElement('li');
			letterBtn.setAttribute('class', 'letters')
			letterBtn.innerHTML = alphabet[i];


			check(); //function to compare clicked letter to letter in word
			ul.appendChild(letterBtn);
			getAlphabetList.appendChild(ul);
			
		}
	}

	var check = function(){
		letterBtn.onclick = function(){

			this.setAttribute('class', 'active');

			//place letter inside variable to compare with word letters
			letterGuess = this.innerHTML.toLowerCase();
						
			for(var i = 0; i < word.length; i++)
				if(word[i] === letterGuess){

					counter++
					console.log("counter: " + counter)
					renderLives();
					guesses[i].innerHTML = letterGuess.toUpperCase();
				}

				//check to see if guessed letter exists in word
				var j = word.indexOf(letterGuess);

				if (j === -1){
					lives--;
					renderLives();
				}

		}
	}

	var renderLives = function(){
		getLives.innerHTML =  lives + " guesses left";

		if(lives < 1){
			console.log("lives: " + lives)
			getLives.innerHTML = "You Lose";
		}

		if(counter === guesses.length){
			getLives.innerHTML = "You Win";
		}
	}

	var renderBlanks = function(){

		wordHolder = document.createElement('ul');
		wordHolder.id = "word-holder";

		//loop through length of word
		for(var i = 0; i < word.length; i++){
			list = document.createElement('li');
			list.setAttribute('class', 'blank');

			if(word[i] === "-"){
				list.innerHTML = "-";
				
			} else {
				list.innerHTML = "_";
				
			}

			guesses.push(list);
			wordHolder.appendChild(list);
			emptyWord.appendChild(wordHolder);
			console.log("word length: " + guesses.length);
		}
	}

	var category = function(){
		if(selectCategory === categories[0]){
			getCategoryName.innerHTML = "Cities"
		}
		if(selectCategory === categories[1]){
			getCategoryName.innerHTML = "Sports"
		}
		if(selectCategory === categories[2]){
			getCategoryName.innerHTML = "Music"
		}
		if(selectCategory === categories[3]){
			getCategoryName.innerHTML = "TV Shows"
		}
	}

	var play = function(){

		//create categories
		categories = [
			['toronto', 'sydney', 'tokyo', 'paris', 'london', 'tijuana', 'havana','sao-paulo','moscow','venice'],		
			['blue-jays', 'yankees', 'red-sox', 'patriots', 'cowboys', 'maple-leafs', 'red-wings', 'bruins'],
			['taylor-swift', 'kanye-west', 'celine-dion', 'elvis', 'thriller', 'madonna', 'rihanna', 'drake', 'bee-gees'],
			['lost', 'breaking-bad', 'daredevil', 'fresh-prince', 'south-park', 'full-house', 'sopranos']
		]

		//select random category
		selectCategory = categories[Math.floor(Math.random() * categories.length)];
		//select random word
		word = selectCategory[Math.floor(Math.random() * selectCategory.length)];

		//console.log(word);
		guesses = [];
		counter = 0;
		lives = 5;

		console.log("counter: " + counter);
		renderLetters();
		renderBlanks();
		renderLives();
		category();
	}

	play();	



	//hint
	getHintBtn.onclick = function(){

		hints = [
			['4th higest population in North America', 'Home of Bondi Beach', 'Was previously known as Edo', 'Most romantic city in the world', 'Home of Heathrow Airport', 'Lies on US-Mexican border', 'Colorful city of Cuba', 'Birthplace of Neymar', 'Location of St. Basil Cathedral', 'City of canals'],
			['Ended 22 year playoff drought', 'Richest MLB franchise', 'Yankees Rival', 'Lead by Tom Brady', 'Richest NFL franchise', 'Won Stanley Cup in \'67', 'Plays in Joe Louis Arena', 'One of the original six teams'],
			['Has won too many awards to count', 'Controversial rapper', 'My Heart Will Go On', 'King of Rock n Roll', 'Highest selling album of all time', 'Queen of Pop', 'Born in Barbados', 'Canadian rapper', 'Stayin Alive'],
			['Strangers stuck on an island','School teacher turned drug dealer','Blind superhero', 'Will & Carlton', '4 kids in Colorado', 'Opposite of an empty house', 'Mobster and his family']
		]

		categoriesIndex = categories.indexOf(selectCategory);
		wordIndex = selectCategory.indexOf(word);

		clue.innerHTML = hints[categoriesIndex][wordIndex]

	}

	//restart game
	getPlayBtn.onclick = function() {
		wordHolder.parentNode.removeChild(wordHolder);
		ul.parentNode.removeChild(ul);
		clue.innerHTML = "";
		play();
	}
}




