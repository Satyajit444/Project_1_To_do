window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const removeAll = document.querySelector(".removeAll");
    const notask = document.querySelector(".notask");


    form.addEventListener("submit", (e) => {
        e.preventDefault();


        if (input.value === "") {
            task_el.classList.remove("task");
            input.value = "";
            alert("Plz enter somthing...");
        } else if (input.value.replace(/\s+/g, "").length === 0) {
            input.value = "";
            task_el.classList.remove("task");
            alert("space can't be listed as tasks...");
        } else {
            removeAll.style.display = "block";
            notask.style.display = "none";

            // creating elements 

            const task = input.value.trim();
            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el);

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");

            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");

            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerText = "Edit";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerText = "Delete";

            // adding to DOM 

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);

            task_el.appendChild(task_actions_el);
            list_el.appendChild(task_el);

            input.value = "";

            // edit task 
            task_edit_el.addEventListener("click", () => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_edit_el.innerText = "Save";
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                } else {
                    if (
                        task_input_el.value === "" ||
                        task_input_el.value.replace(/\s/g, "").length === 0
                    ) {
                        alert("Plz Write something....!");
                    } else {
                        task_edit_el.innerText = "Edit";
                        task_input_el.setAttribute("readonly", "readonly");
                    }
                }
            });

            // delete task 
            task_delete_el.addEventListener("click", (e) => {
                list_el.removeChild(task_el);
                if (list_el.childElementCount === 0) {
                    removeAll.style.display = "none";
                    notask.style.display = "block";
                }
            });
            removeAll.addEventListener("click", (e) => {
                list_el.removeChild(task_el);
                removeAll.style.display = "none";
                notask.style.display = "block";
                localStorage.clear()
            });
        }
    });
});