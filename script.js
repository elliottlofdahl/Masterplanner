// ======= KURSDATA =======
const kurser = [
  {
    kod: "TDDC58",
    namn: "Programmering i C++",
    hp: 6,
    niva: "G2F",
    block: 2,
    vof: "V"
  },
  {
    kod: "TDDD56",
    namn: "Grunderna i AI och maskininlärning",
    hp: 6,
    niva: "G2F",
    block: 2,
    vof: "V"
  },
  {
    kod: "TEIO19",
    namn: "Industriell organisation",
    hp: 6,
    niva: "A1N",
    block: 4,
    vof: "V"
  }
];

// ======= REFERENSER TILL HTML =======
const tbody = document.getElementById("kurs-tbody");
const dinLista = document.getElementById("din-lista");
const dinListaHint = document.getElementById("din-lista-hint");

// ======= GENERERA TABELLRADDER =======
kurser.forEach(kurs => {
  const tr = document.createElement("tr");
  tr.dataset.kod = kurs.kod;
  tr.dataset.namn = kurs.namn;
  tr.dataset.hp = kurs.hp;
  tr.dataset.niva = kurs.niva;
  tr.dataset.block = kurs.block;

  tr.innerHTML = `
    <td>${kurs.kod}</td>
    <td>${kurs.namn}</td>
    <td>${kurs.hp}</td>
    <td>${kurs.niva}</td>
    <td>${kurs.block}</td>
    <td>${kurs.vof}</td>
  `;

  tbody.appendChild(tr);
});

// ======= FUNKTION: VISA/DÖLJ HINT =======
function uppdateraHint() {
  if (dinLista.children.length > 0) {
    dinListaHint.style.display = "none";
  } else {
    dinListaHint.style.display = "block";
  }
}

// ======= KURSVAL / KLICKHANTERING =======
tbody.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (!row) return;

  const kod = row.dataset.kod;
  const namn = row.dataset.namn;
  const hp = row.dataset.hp;

  const existing = dinLista.querySelector(`li[data-kod="${kod}"]`);

  if (existing) {
    dinLista.removeChild(existing);
    row.classList.remove("vald");
  } else {
    const li = document.createElement("li");
    li.dataset.kod = kod;
    li.textContent = `${kod} – ${namn} (${hp} hp)`;
    dinLista.appendChild(li);
    row.classList.add("vald");
  }

  uppdateraHint();
});

// ======= INIT =======
uppdateraHint();

