"use strict";

let pets = [
    {
      name: "Fluffy",
      type: "Cat 🐈",
      photoUrl: "https://pet-ratings.surge.sh/fluffy.webp",
      comments: "So cute! 😻",
      numLikes: 2,
    },
    {
      name: "Dr. Slitherscale",
      type: "Snake 🐍",
      photoUrl: "https://pet-ratings.surge.sh/slitherscale.webp",
      comments: "Hissssss....",
      numLikes: 1,
    },
    {
      name: "Spike",
      type: "Porcupine 🦔",
      photoUrl: "https://pet-ratings.surge.sh/spike.webp",
      comments: "He loves to be petted!",
      numLikes: 0,
    },
  ];
  
  function showPets() {
    console.log("showPets");    
  
    let petArea = document.getElementById("pets");
    let html = "";
  
    for (let i = 0; i < pets.length; i++) {
      let pet = pets[i];
      let title = `<h3>${pet.name} (${pet.type})</h3>`;
      let img = `<img src="${pet.photoUrl}">`;
      let comments = `<p>${pet.comments}</p>`;
      html += `
        <div id="pet-${i}" class="pet">
          ${img}
          ${title}
          ${comments}
        </div>`;
    }
  
    petArea.innerHTML = html;
  }


  showPets();
  