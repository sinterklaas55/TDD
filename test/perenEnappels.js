
// Haalt het programma op dat nodig is om de test uit te voeren.
var expect    = require("chai").expect;
// Geeft aan waar het bestand zich bevind dat getest moet worden.
var converter = require("../applicatie/perenEnappels");

describe("Het gebruik maken van TDD", function() {
  describe("Van een peer naar appel", function() {
    it("Je hebt zojuist peren appels vergeleken... lol!", function() {

      var appel   = converter.peerNaarappel(0.8);

      // Hier worden de antwoorden vergeleken.
      expect(appel).to.equal(120);
 
    });
  });
 describe("Van appel naar peer", function() {
    it("Did something!", function() {

      var peer  = converter.appelNaarpeer(1.25);

      expect(peer).to.equal(150);
    
    });
  });
});


