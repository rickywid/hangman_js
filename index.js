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
	var guesses = [];		//array used to store length of word
	var lives = 10;
	var counter = 0;
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

					console.log(letterGuess)
					counter++
					renderLives();
					guesses[i].innerHTML = letterGuess;
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
		}
	}

	var category = function(){
		if(selectCategory === categories[0]){
			getCategoryName.innerHTML = "Perth"
		}
		if(selectCategory === categories[1]){
			getCategoryName.innerHTML = "Australia"
		}
		if(selectCategory === categories[2]){
			getCategoryName.innerHTML = "Bundy"
		}
	}

	var play = function(){
		console.log('replay called')
		//create categories
		categories = [
			['mustang', 'kings-park', 'fremantle'],
			['melbourne', 'sydney', 'bundaberg'],
			['globe-hotel', 'flood', 'northside']
		]

		//select random category
		selectCategory = categories[Math.floor(Math.random() * categories.length)];
		//select random word
		word = selectCategory[Math.floor(Math.random() * selectCategory.length)];

		console.log(word);

		renderLetters();
		renderBlanks();
		renderLives();
		category();
	}

	play();	



	//hint
	getHintBtn.onclick = function(){

		hints = [
			['Friday, Saturday, Sunday Night', "High in the sky", "cottlesloe beach"],
			['federation square', 'opera house', 'farming'],
			['get pissed everyday', 'water everywhere', 'wayne the driver']
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




