/*
MIT License

Copyright (c) 2021 Jordan Lees

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


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
