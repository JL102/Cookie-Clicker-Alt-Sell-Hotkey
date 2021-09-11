Game.registerMod("altSellHotkey",{
	init:function(){
		
		var isAltKeyHeld = false;
		
		AddEvent(window, 'keydown', function(e) {
			if (e.key == 'Alt' && !isAltKeyHeld) {
				isAltKeyHeld = true;
				Game.buyMode = -1; // Switch buyMode to sell
				Game.storeBulkButton(1);
			}
		});
		AddEvent(window, 'keyup', function(e) {
			if (e.key == 'Alt') {
				resetToBuy();
			}
		});
		AddEvent(window, 'blur', resetToBuy)
		function resetToBuy() {
			isAltKeyHeld = false;
			Game.buyMode = 1; // Reset buyMode to buy
			Game.storeBulkButton(0);
		}
	},
	save:function(){
		
	},
	load:function(str){
		
	},
});
