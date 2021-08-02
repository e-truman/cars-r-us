import { getTechnologies, setTech } from "./database.js"



const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="tech" value="${technology.id}" /> ${technology.material}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}