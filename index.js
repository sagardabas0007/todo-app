const t = document.querySelector("#current-time");
const greeting = document.querySelector(".heading");
const total = document.querySelector("#total-count");
const done = document.querySelector("#done-count");
const active = document.querySelector("#active-count");
const progress = document.querySelector("#progress-count");
const addBtn = document.querySelector("#add");
const inp = document.querySelector("#input");
const task = document.querySelector(".showcase-tasks");


// this is to set a dynamic day and date
const today = new Date();
const days = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saterday", "Sunday"];
const todayDay = days[today.getDay()];
const date = today.getDate();
const time = today.getHours();
t.textContent = `${todayDay}, ${date}`;


// display greeting
let message = "";
if (time < 12) {
    message = "Good Morning";
} else if (time < 18) {
    message = "Good afternoon";
} else {
    message = "good evening";
}
greeting.textContent = message;



let totalCount = 0;
let doneCount = 0;
let progressCount = 0;
let activeCount = 0;


addBtn.addEventListener("click", () => {
    let input = inp.value.trim();

    if (input) {
        totalCount++;
        activeCount++;

        total.textContent = totalCount;
        active.textContent = activeCount;

        inp.value = "";

        task.innerHTML += `<ul>
        <li>${input}</li>
        </ul>`;

        let li = document.querySelectorAll("li");

        li.forEach((val) => {
            val.addEventListener("click", () => {
            val.style.textDecoration = "line-through";
                doneCount++;
                activeCount--;

                done.textContent = doneCount;
                active.textContent = activeCount;
        })
        })

    }
})







