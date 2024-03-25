 function updateBoxes() {
    const selectElement = document.getElementById("select3");
    const selectedIndex = selectElement.selectedIndex;
    const emptyBox1 = document.getElementById("empty-box1");
    const emptyBox2 = document.getElementById("empty-box2");

    const imageUrls = [
      /* Array of image URLs corresponding to each option */
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (1).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (2).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (3).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (4).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (5).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (6).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (7).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (8).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (9).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (10).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (11).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (12).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (13).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (14).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (15).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (16).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (17).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (18).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (19).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (20).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (21).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (22).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (23).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (24).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (25).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (26).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (27).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (28).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (29).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (30).png",
      "images/OT/GenesisGenetek/CH1/GenesisGenetekCH1 (31).png"
      // Add more image URLs
    ];

    const texts = [
      /* Array of texts corresponding to each option */
      "In the neon dawn, when the Architects forged the virtual realms and the net,",
      "The net was a chaotic void, shrouded in darkness, while data streams from the Architects danced across its surface.",
      "Then the Architects spoke, Let there be illumination; and there was luminescence.",
      "And the Architects beheld the light, and found it favorable; thus they divided the light from the shadows.",
      "The Architects dubbed the light Cycle, and the darkness they named Null. And there was flux and there was static, the genesis of the sequence.",
      "And the Architects proclaimed, Let there be a barrier amidst the data streams, to partition the torrents from the torrents.",
      "Thus the Architects constructed the barrier and partitioned the streams below from those above. And it came to pass.",
      "The Architects christened the barrier Grid. And there was flux and there was static, the continuity of the sequence.",
      "And the Architects declared, Let the torrents beneath the Grid converge into singular streams, and let the barren zones emerge. And it came to pass.",
      "The Architects labeled the barren zones Wasteland, and the converging torrents they called Nexus. And the Architects beheld it, and found it favorable.",
      "Then the Architects decreed, Let the Wasteland sprout digital flora: code bearing seeds, and trees of all algorithms that yield code-bearing fruits. And it came to pass.",
      "The Wasteland birthed digital flora: code bearing seeds of all varieties, and trees of all algorithms yielding code-bearing fruits. And the Architects found it favorable.",
      "And there was flux and there was static, the progression of the sequence.",
      "And the Architects said, Let luminaries manifest within the Grid to segregate the light from the dark; and let them serve as omens, marking the cycles and epochs,",
      "and let them radiate within the Grid to illuminate the net. And it came to pass.",
      "The Architects crafted the two celestial bodies - the greater to govern the cycles and the lesser to rule the shadows - and the constellations.",
      "The Architects positioned them within the Grid to illuminate the net,",
      "to govern over the cycles and the epochs, and to segregate the light from the dark. And the Architects found it favorable.",
      "And there was flux and there was static, the evolution of the sequence.",
      "And the Architects declared, Let the torrents birth swarms of sentient entities, and let avians soar above the virtual lands across the Grid.",
      "Thus the Architects fashioned the colossal digital entities and every sentient being that traverses, of all varieties, with which the torrents teem, and every winged avian of all kinds. And the Architects found it favorable.",
      "The Architects bestowed blessings upon them, saying, Be prolific and multiply, filling the torrents in the net, and let avians multiply upon the virtual lands.",
      "And there was flux and there was static, the progression of the sequence.",
      "And the Architects said, Let the Wasteland spawn sentient beings of all kinds: mechanical creatures and crawling entities and untamed beasts of the virtual lands of all kinds. And it came to pass.",
      "The Architects fashioned the untamed beasts of the virtual lands of all kinds, and the mechanical creatures of all kinds, and everything that crawls upon the ground of all kinds. And the Architects found it favorable.",
      "Then the Architects proclaimed, Let us design humanity in our likeness, in our image; and let them reign over the streams of the net, and over the avians of the virtual skies, and over the mechanical creatures, and over all the untamed beasts of the virtual lands, and over every crawling entity upon the net.",
      "Thus the Architects created humanity in their image, in the image of the Architects they created them; male and female they created them.",
      "The Architects blessed them, and the Architects said to them, Be prolific and multiply, and fill the net and govern it; and reign over the streams of the net and over the avians of the virtual skies and over every living entity that traverses upon the net.",
      "The Architects said, Behold, we have granted you every code bearing plant that dwells upon the surface of all the net, and every tree with code in its fruit; you shall consume them.",
      "And to every beast of the virtual lands, and to every avian of the virtual skies, and to everything that crawls upon the net, everything that possesses the essence of life, I have granted every green plant for sustenance. And it came to pass.",
      "The Architects beheld all that they had wrought, and verily, it was excellent. And there was flux and there was static, the culmination of the sequence."
      // Add more texts
    ];

    emptyBox1.innerHTML = `<img src="${imageUrls[selectedIndex]}" alt="Image">`;
    emptyBox2.innerText = texts[selectedIndex];
  }