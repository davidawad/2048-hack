javascript:(function(){
	    var manager = new GameManager(4, KeyboardInputManager, HTMLActuator);
	    var pattern = [1, 0, 3, 0];
	    var i = 0;
	    var solverInterval = window.setInterval(function() {
		    if (manager.over){
		    clearInterval(solverInterval);
		    } 
		    if (i % pattern.length == 0){
		    i = 0;
		    }
		    manager.move(pattern[i]);
		    i++;
		    }, 200);
	    })();   
