/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere, sotto alla sezione dei membri del team, un form di aggiunta membri che permetta di aggiungere un nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
 
  ....
  ]

  aggiungere con js le card in pagina e inserire i dati nell array per ogni card soltanto alla fine.  

  2. Copiate il codice di una card (ovviamente commentate le card lato HTML) e con JS stampate per 6 volte (tanti quanti sono gli elementi dell'array) la stessa card

    3. Modificate il codice della singola card in modo che abbia al suo interno ogni volta i dati del singolo componente del team

  card result example 
  
  img 
    name: "Marco Bianchi"
    role: "Designer"
    email: "marcobianchi@team.com"

*/

//const newSectionElement = document.getElementById("section-cards");

const newCardElement = document.getElementById("team-card");

const newElementItem = document.getElementById("team-property");

/*
1) pre prendere gli elementi dell' array delle card dobbiamo usare il 
   ciclo for
*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const newDomMerbersTeam = document.getElementById("new-members-team");

for (i = 0; i < teamMembers.length; i++) {
  const currentMember = teamMembers[i];
  console.log(i, currentMember);

  newCardElement.innerHTML += `<div class="team-card"> card </div>`;
}
