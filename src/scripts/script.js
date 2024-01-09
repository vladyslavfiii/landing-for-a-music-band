
function goToListen(el) {
	switch(el.parentNode.id){
		case "fearOfTheDawnJackWhiteLinkSection":
			switch (el.id) {
				case "spotify":
					window.open('https://open.spotify.com/album/46qeiLBu3KwqFQpJBT7t6B?autoplay=true', '_blank');
					break;
				case "youtubeMusic":
					window.open('https://music.youtube.com/playlist?list=OLAK5uy_lIgHd3UE-YvdjfGBrVj94RjyBWltH7hnU', '_blank');
					break;
				case "appleMusic":
					window.open('https://music.apple.com/ua/album/fear-of-the-dawn/1608206266', '_blank');
					break;
			}
			break;
		case "enteringHeavenAliveJackWhiteLinkSection":
			switch (el.id) {
				case "spotify":
					window.open('https://open.spotify.com/album/4GxhBXlAhfNzI7ehTDmFJ5?autoplay=true', '_blank');
					break;
				case "youtubeMusic":
					window.open('https://music.youtube.com/playlist?list=OLAK5uy_kEEZrRNn3NheqsAWgq9vY7iIo3FaPVnbE', '_blank');
					break;
				case "appleMusic":
					window.open('https://music.apple.com/ua/album/entering-heaven-alive/1624743251', '_blank');
					break;
			}
			break;
		case "theWhiteStripesGreatestHitsLinkSection":
			switch (el.id) {
				case "spotify":
					window.open('https://open.spotify.com/album/6iOP7HgYAk3x5i19Os1d7v?autoplay=true', '_blank');
					break;
				case "youtubeMusic":
					window.open('https://www.youtube.com/watch?v=vGMI7Tdd014&list=PLRkypqpSISVuNhUGTlveY9V1L-ZCZvOU2', '_blank');
					break;
				case "appleMusic":
					window.open('https://music.apple.com/ua/album/the-white-stripes-greatest-hits/1534387685', '_blank');
					break;
			}
			break;
	}
}

function copyEmail(el) {
	navigator.clipboard.writeText(el.innerHTML);
	document.querySelector('.email-to-copy').style.textDecoration = "underline";
}

let audio = document.querySelector("#fearOfTheDawnIntroductionSong");;

async function playAudio(el) {
	audio.pause();
	audio.currentTime = 0;
	
	switch (el.parentNode.id){
		case "fearOfTheDawnSong":
			audio = document.querySelector("#fearOfTheDawnIntroductionSong");
			break;
		case "sevenNationArmySong":
			audio = document.querySelector("#sevenNationArmyIntroductionSong");
			break;
		case "ifIDieTomorrowSong":
			audio = document.querySelector("#ifIDieTomorrowIntroductionSong");
			break;
	}
	console.log(audio);
	switch (el.id) {
		case "playSongButton":
			el.id = "pauseSongButton";
			audio.play();
			audio.loop = false;
			break;
		case "pauseSongButton":
			el.id = "playSongButton";
			audio.pause();
			audio.currentTime = 0;
			break;
	}
}

function moreDescription(el){
	switch (el.id){
		case "moreDescriptionButton":
			el.id = "lessDescriptionButton";
			el.innerHTML = "Less";
			el.parentNode.children[2].style.display = "flex"
			break;
		case "lessDescriptionButton":
			el.id = "moreDescriptionButton";
			el.innerHTML = "More";
			el.parentNode.children[2].style.display = "none"
			break;
	}
}

function scrollTrigger(selector) {
	let els = document.querySelectorAll(selector)
	els = Array.from(els)
	els.forEach(el => {
	  addObserver(el)
	})
  }

function addObserver(el){
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
       
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(el)
}

scrollTrigger('.scroll-reveal');

function goToSocial(el){
	switch(el.id){
		case "JackWhiteInstagramLink":
			window.open('https://www.instagram.com/officialjackwhite/?hl=en', '_blank');
			break;
		case "JackWhiteFacebookLink":
			window.open('https://www.facebook.com/jackwhite/', '_blank');
			break;
		case "TheWhiteStripesInstagramLink":
			window.open('https://www.instagram.com/thewhitestripes/?hl=en', '_blank');
			break;
		case "TheWhiteStripesFacebookLink":
			window.open('https://www.facebook.com/thewhitestripes/', '_blank');
			break;
		case "TheRaconteursInstagramLink":
			window.open('https://www.instagram.com/theraconteurs/?hl=en', '_blank');
			break;
		case "TheRaconteursFacebookLink":
			window.open('https://www.facebook.com/theraconteurs/', '_blank');
			break;
		case "TheDeadWeatherInstagramLink":
			window.open('https://thedeadweatherstore.com/', '_blank');
			break;
		case "TheDeadWeatherFacebookLink":
			window.open('https://www.facebook.com/Dead.Weather/', '_blank');
			break;
	}
}
