mydata=[
    {
      "id": 1,
      "name": "Luke Skywalker",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      "homeworld": "tatooine"
    },
    {
      "id": 2,
      "name": "C-3PO",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      "homeworld": "tatooine"
    },
    {
      "id": 3,
      "name": "R2-D2",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      "homeworld": "naboo"
    },
    {
      "id": 4,
      "name": "Darth Vader",
      "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      "homeworld": "tatooine"
    },
    {
      "id": 5,
      "name": "Leia Organa",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      "homeworld": "alderaan"
    },
    {
      "id": 6,
      "name": "Owen Lars",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      "homeworld": "tatooine"
    },
    {
      "id": 7,
      "name": "Beru Whitesun lars",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      "homeworld": "tatooine"
    },
    {
      "id": 8,
      "name": "R5-D4",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      "homeworld": "tatooine"
    },
    {
      "id": 9,
      "name": "Biggs Darklighter",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      "homeworld": "tatooine"
    },
    {
      "id": 10,
      "name": "Obi-Wan Kenobi",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      "homeworld": "stewjon"
    },
    {
      "id": 11,
      "name": "Anakin Skywalker",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      "homeworld": "tatooine"
    },
    {
      "id": 12,
      "name": "Wilhuff Tarkin",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      "homeworld": "eriadu"
    },
    {
      "id": 13,
      "name": "Chewbacca",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      "homeworld": "kashyyyk"
    },
    {
      "id": 14,
      "name": "Han Solo",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      "homeworld": "corellia"
    },
    {
      "id": 15,
      "name": "Greedo",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      "homeworld": "Rodia"
    },
    {
      "id": 16,
      "name": "Jabba Desilijic Tiure",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      "homeworld": "tatooine"
    },
    {
      "id": 18,
      "name": "Wedge Antilles",
      "pic": "https://www.rebelscum.com/2022/Wedge_6_A.jpg",
      "homeworld": "corellia"
    },
    {
      "id": 19,
      "name": "Jek Tono Porkins",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      "homeworld": "bestine"
    },
    {
      "id": 20,
      "name": "Yoda",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
      "id": 21,
      "name": "Palpatine",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      "homeworld": "naboo"
    }
  ]


  const myradiobtns = document.querySelector(".myradiobtns");




  const myradioekle = (homeworld)=>`
              <div class="form-check">
                <input class="form-check-input" type="radio" onchange="RadioChange()" name="flexRadioDefault" id="homeworld-${homeworld}">
                <label class="form-check-label" for="flexRadioDefault1">
                  ${homeworld}
                </label>
              </div>
  `



  const render = (Characters)=>{

    myradiobtns.innerHTML = Characters.map(myradioekle).join(""); 
  }



  myhomewrld = mydata.map((mydata)=>{
    return mydata.homeworld ?? "other";
  })

 function gethomeworlds(){
  uniqueArr = Array.from(new Set(myhomewrld));
  mystr = JSON.stringify(uniqueArr).toLowerCase();
  return JSON.parse(mystr)
  }
  

  document.addEventListener("DOMContentLoaded",()=>{
    render(gethomeworlds());

  })

  function RadioChange(){
    if (document.getElementById('homeworld-tatooine').checked == true){
      filtershomeworld("tatooine");

    }
    if (document.getElementById('homeworld-naboo').checked == true){
      filtershomeworld("naboo");
      
    }
    if (document.getElementById('homeworld-alderaan').checked == true){
      filtershomeworld("alderaan");

      
    }
    if (document.getElementById('homeworld-stewjon').checked == true){
      filtershomeworld("stewjon");
      
    }
    if (document.getElementById('homeworld-eriadu').checked == true){
      filtershomeworld("eriadu");
      
    }
    if (document.getElementById('homeworld-kashyyyk').checked == true){
      filtershomeworld("kashyyyk");
      
    }
    if (document.getElementById('homeworld-corellia').checked == true){
      filtershomeworld("corellia");
      
    }
    if (document.getElementById('homeworld-rodia').checked == true){
      filtershomeworld("Rodia");
      
    }
    if (document.getElementById('homeworld-bestine').checked == true){
      filtershomeworld("bestine");
      
    }
    if (document.getElementById('homeworld-other').checked == true){
      filtershomeworld(undefined);
      
    }

  }

  const mycontainer = document.querySelector(".mycontainer");
  const CardCreate = ({pic,name,homeworld = "other"})=>`
    <div class="col">
      <div class="card text-start">
        <img class="card-img-top" src="${pic}" alt="Title" />
        <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <p class="card-text">${homeworld}</p>
        </div>
      </div>
    </div>
        
  `
    
const renderpic = (characters)=>{
    mycontainer.innerHTML = characters.map(CardCreate).join("");
}


function filtershomeworld(homeworld){
  var data_filter = mydata.filter( element => element.homeworld ==homeworld);
  renderpic(data_filter);

}