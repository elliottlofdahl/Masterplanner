// Exempelkurser
const courses = [
  { name: "Machine Learning", hp: 15, level: "advanced" },
  { name: "Web Development", hp: 7.5, level: "basic" },
  { name: "Data Mining", hp: 15, level: "advanced" },
  { name: "Databasteknik", hp: 7.5, level: "basic" }
];

// Hämta element från HTML
const courseList = document.getElementById("courses");
const planList = document.getElementById("plan");
const totalHpSpan = document.getElementById("total-hp");
const advancedHpSpan = document.getElementById("advanced-hp");
const requirementsP = document.getElementById("requirements");

// Visa alla kurser i listan
courses.forEach((course, index) => {
  const li = document.createElement("li");
  li.textContent = `${course.name} (${course.hp} hp, ${course.level})`;
  
  // Lägg till knapp
  const button = document.createElement("button");
  button.textContent = "Lägg till";
  button.onclick = () => addCourseToPlan(index);
  li.appendChild(button);

  courseList.appendChild(li);
});

// Funktion för att lägga till kurs i planen
let studyPlan = [];

function addCourseToPlan(index) {
  const course = courses[index];

  // Kolla om kursen redan är vald
  if (studyPlan.includes(course)) return;

  studyPlan.push(course);

  const li = document.createElement("li");
  li.textContent = `${course.name} (${course.hp} hp, ${course.level})`;
  planList.appendChild(li);

  updateStats();
}

// Uppdatera totalsumma och krav
function updateStats() {
  const totalHp = studyPlan.reduce((sum, c) => sum + c.hp, 0);
  const advancedHp = studyPlan
    .filter(c => c.level === "advanced")
    .reduce((sum, c) => sum + c.hp, 0);

  totalHpSpan.textContent = totalHp;
  advancedHpSpan.textContent = advancedHp;

  // Kolla masterkrav (t.ex. min 60 hp advanced)
  requirementsP.textContent = `Masterkrav uppfylls: ${totalHp >= 90 && advancedHp >= 60 ? "Ja" : "Nej"}`;
}

