class List {
    constructor() {
        const ul = document.createElement("ul")
        ul.innerHTML = `
            <li>Apple</li>
        `
        return ul;
    }
}

export default List;