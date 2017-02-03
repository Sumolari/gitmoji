var statuses = ['joy', 'loved', 'haha', 'sunglasses', 'sexy', 'tongue'];
var clipboard = new Clipboard('.gitmoji');
document.getElementById(statuses[Math.floor(Math.random() * statuses.length)]).classList.add('emoji-visible');
