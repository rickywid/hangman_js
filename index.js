require('./style.scss');

window.onload = function(){

	var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
					'P','Q','R','S','T','U','V','W','X','Y','Z'];

	//Get elements
	var getLives = document.getElementById('lives');
	var getOutcome = document.getElementById('outcome');
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
	var guesses;			//array used to store length of word
	var lives;
	var counter;
	var selectCategory;
	var space;

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
			this.className += " animated bounceOutDown"; 

			//place letter inside variable to compare with word letters
			letterGuess = this.innerHTML.toLowerCase();
			this.onclick = null;
						
			for(var i = 0; i < word.length; i++)
				if(word[i] === letterGuess){

					counter++
					
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
			console.log(true)
			getOutcome.className = "animated zoomIn";
			getOutcome.innerHTML = "YOU LOSE!";
		}

		if(counter === guesses.length - space){
			console.log(true)
			getOutcome.className = "animated zoomIn";
			getOutcome.innerHTML = "YOU WIN!";
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
				space = 1;
				
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
			getCategoryName.innerHTML = "CITIES"
		}
		if(selectCategory === categories[1]){
			getCategoryName.innerHTML = "SPORTS"
		}
		if(selectCategory === categories[2]){
			getCategoryName.innerHTML = "MUSIC"
		}
		if(selectCategory === categories[3]){
			getCategoryName.innerHTML = "TV SHOWS"
		}
	}

	var play = function(){

		//create categories
		categories = [
			['toronto', 'sydney', 'tokyo', 'paris', 'london', 'tijuana', 'havana','las-vegas','moscow','venice'],		
			['blue-jays', 'yankees', 'red-sox', 'david-beckham', 'cowboys', 'maple-leafs', 'lionel-messi', 'don-king'],
			['taylor-swift', 'kanye-west', 'beyonce', 'elvis', 'thriller', 'madonna', 'rihanna', 'drake', 'beatles'],
			['lost', 'breaking-bad', 'daredevil', 'fresh-prince', 'south-park', 'sesame street', 'jeopardy']
		]

		//select random category
		selectCategory = categories[Math.floor(Math.random() * categories.length)];
		//select random word
		word = selectCategory[Math.floor(Math.random() * selectCategory.length)];

		guesses = [];
		counter = 0;
		space = 0;
		lives = 5;

		renderLetters();
		renderBlanks();
		renderLives();
		category();

			console.log('word length: ' + guesses.length);
			console.log('counter: ' + counter);
			console.log('spaces: ' + space);
			console.log('word: ' + word);


	}

	play();	



	//hint
	getHintBtn.onclick = function(){

		hints = [
			['4th highest population in North America', 'Home of Bondi Beach', 'Was previously known as Edo', 'Most romantic city in the world', 'Home of Heathrow Airport', 'Lies on US-Mexican border', 'Colorful city of Cuba', 'aka Sin City', 'Location of St. Basil Cathedral', 'City of canals'],
			['Ended 22 year playoff drought', 'Richest MLB franchise', 'Team of Fenway Park', 'Married to a Spice Girl', 'Richest NFL franchise', 'Won Stanley Cup in \'67', 'Argentinian soccer superstar', 'Iconic boxing promoter'],
			['Country turned Pop singer', 'Musician, Artist, Fashion Designer', 'Former lead singer of popular RnB group', 'King of Rock n Roll', 'Highest selling album of all time', 'Queen of Pop', 'Born in Barbados', 'Canadian rapper', '4 member band from Liverpool'],
			['Survivors stuck on a mysterious island','School teacher turned drug dealer','Blind superhero', '3 children & 1 nephew living together', '4 kids in Colorado', 'Classic children\'s TV show', 'Answer given as the question']
		]

		categoriesIndex = categories.indexOf(selectCategory);
		wordIndex = selectCategory.indexOf(word);

		// show clue by setting CSS showClue class
		clue.setAttribute('id', 'showClue');
		clue.innerHTML = hints[categoriesIndex][wordIndex]

	}

	//restart game
	getPlayBtn.onclick = function() {
		wordHolder.parentNode.removeChild(wordHolder);
		ul.parentNode.removeChild(ul);
		getOutcome.innerHTML = "";

		//clear animate zoomIn CSS class
		getOutcome.className = "";

		// hide hint container 
		clue.setAttribute('id', clue);
		clue.innerHTML = "";
		play();
	}
}




