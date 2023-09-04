class InputForm {
  constructor() {
    const form = document.createElement("form");
    form.innerHTML = `
            <input/>
            <button class="addBtn">Add</button>
        `;

    return form;
  }
}

export default InputForm;
