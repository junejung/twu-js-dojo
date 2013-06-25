describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  var factor = function (value) {
    var result = [];
    for(var candidate = 2; value > 1; candidate++)
      for(; value % candidate === 0; value /= candidate)
        result.push(candidate);
    return result;
  };

  describe("factor", function() {
    it("should return empty list for factor of 1", function() {
      expect(factor(1)).toEqual([]);
    });
    it("should return 2 for factor of 2", function() {
      expect(factor(2)).toEqual([2]);
    });
    it("should return 3 for factor of 3", function() {
      expect(factor(3)).toEqual([3]);
    });
    it("should return 2,2 for factor of 4", function() {
      expect(factor(4)).toEqual([2,2]);
    });
    it("should return 2,3 for factor of 6", function() {
      expect(factor(6)).toEqual([2,3]);
    });
    it("should return 2,2,2 for factor of 8", function() {
      expect(factor(8)).toEqual([2,2,2]);
    });
    it("should return 3,3 for factor of 9", function() {
      expect(factor(9)).toEqual([3,3]);
    });
  });
	
	var DECIMAL_TO_ROMAN = [
		[[9000, "MY"], [5000, "K"], [4000, "MK"], [1000, "M"]],
		[[900, "CM"], [500, "D"], [400, "CD"], [100, "C"]],
		[[90, "XC"], [50, "L"], [40, "XL"], [10, "X"]],
		[[9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
	];
	
	var romanNumeralFor = function(number){
		var result = "";
		for(var i = 0; i < DECIMAL_TO_ROMAN.length; i++) {
			var nineSlot = DECIMAL_TO_ROMAN[i][0];
			var fiveSlot = DECIMAL_TO_ROMAN[i][1];
			var fourSlot = DECIMAL_TO_ROMAN[i][2];
			var oneSlot = DECIMAL_TO_ROMAN[i][3];

	 	 	if (number >= nineSlot[0]){
				result += nineSlot[1];
				number -= nineSlot[0];
			}

			if ( number >= fiveSlot[0] ) {
				result += fiveSlot[1];
				number -= fiveSlot[0];
			}

			if (number >= fourSlot[0]) {
				result += fourSlot[1];
				number -= fourSlot[0];
			}

			while(number >= oneSlot[0]) {
				result += oneSlot[1];
				number -= oneSlot[0];
			}
		}
		
		return result;
	}

	describe("roman numeral", function(){
		it("should return I given number 1", function(){
			expect(romanNumeralFor(1)).toEqual("I");
		});
		
		it("should return II given number 2", function(){
			expect(romanNumeralFor(2)).toEqual("II");
		});

		it("should return III given number 3", function(){
			expect(romanNumeralFor(3)).toEqual("III");
		});

		it("should return IV given number 3", function(){
			expect(romanNumeralFor(4)).toEqual("IV");
		});
		
		it("should return V given number 5", function(){
			expect(romanNumeralFor(5)).toEqual("V");
		});
		
		it("should return VII given number 7", function(){
			expect(romanNumeralFor(7)).toEqual("VII");
		});
		
		it("should return IX given number 9", function(){
			expect(romanNumeralFor(9)).toEqual("IX");
		});
		
		it("should return X given number 10", function(){
			expect(romanNumeralFor(10)).toEqual("X");
		});
		
		it("should return XI given number 11", function(){
			expect(romanNumeralFor(11)).toEqual("XI");
		});
		
		it("should return XX given number 20", function(){
			expect(romanNumeralFor(20)).toEqual("XX");
		});
		
		it("should return L given number 50", function(){
			expect(romanNumeralFor(50)).toEqual("L");
		});
		
		it("should return XLV given number 45", function(){
			expect(romanNumeralFor(45)).toEqual("XLV");
		});
		
		it("should return LI given number 51", function(){
			expect(romanNumeralFor(51)).toEqual("LI");
		});
		
		it("should return LXXV given number 75", function(){
			expect(romanNumeralFor(75)).toEqual("LXXV");
		});
		
		it("should return XC given number 90", function(){
			expect(romanNumeralFor(90)).toEqual("XC");
		});
		
		it("should return XCI given number 91", function(){
			expect(romanNumeralFor(91)).toEqual("XCI");
		});

		it("should return MMD given number 2500", function(){
			expect(romanNumeralFor(2500)).toEqual("MMD");
		});
		
		it("should return MMCMXCIX given number 2999", function(){
			expect(romanNumeralFor(2999)).toEqual("MMCMXCIX");
		});
		
	});

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
});
