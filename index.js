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
			getCategoryName.innerHTML = "Knockout Artists"
		}
		if(selectCategory === categories[1]){
			getCategoryName.innerHTML = "Old Skool"
		}
		if(selectCategory === categories[2]){
			getCategoryName.innerHTML = "P4P Legends"
		}
		if(selectCategory === categories[3]){
			getCategoryName.innerHTML = "Characters of the Game"
		}
	}

	var play = function(){

		//create categories
		categories = [
			['pacman', 'golovkin', 'wladamir', 'iron-mike', 'prince-naseem', 'tito', 'krusher-kovalev','foreman','chino','cotto'],
			['marciano', 'ray-robinson', 'manassa-mauler','sonny-liston', 'willie-pep', 'smokin-joe', 'brown-bomber','raging-bull'],
			['money-may', 'jcc', 'cassius-clay', 'rjj', 'bhop', 'marvin-hagler', 'golden-boy','sweet-pea', 'lennox-lewis'],
			['broner', 'malignaggi', 'mayorga', 'tyson-fury', 'briggs', 'sam-peters', 'hitman-hatton']
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
			['Gays is worst than animals', 'Big drama show', 'Married to Claire Bennett', 'Once the baddest man in the world', 'Damn Im looking good', 'PR boxing icon', 'Proably did it with Duva', 'The Grill', 'Im fat now..', 'Vindicated loss to Mexican rival'],
			['Brockton boxer', 'Had 91 fight unbeaten streak', 'the Long Count Controversy', 'Controversial 1964 Rematch', 'Won a round without throwing a punch', 'Deadly left hook', 'Home of Detroid Red Wings', 'Scorsece directed a film based on him'],
			['Lifestle flassshy', 'GOAT Mexican boxer', 'GOAT', 'Yall mustve forgot!', 'From prison to MW champ', 'Later moved to Italy', 'He has the blueprint', 'Cant be touched', 'Im #1 No guy test'],
			['Brush my hair','Got a haircut in round 8','I dont give a f*ck','I dont want to miss a thing','Lets go champ!', 'WHO NECKS!!!', 'Greatest wrestler of all time']
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




