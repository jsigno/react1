ReactDOM.render(<h1>Hello This is JSX</h1>, document.getElementById("root"));
// This line of code ^ takes the JSX code and puts it into the div named "root"

ReactDOM.render(
  <ul>
    <li>Item 1</li> <li>Item 2</li>
  </ul>,
  document.getElementById("root2")
);
// This line put a unordered JSX list into the div named "root2"

// WHY REACT ? //
// React basically allows developers to utilize individual parts of their application on both the client-side and the server-side which ultimately boosts the speed of the development process.
// In simple terms, different developers can write individual parts and all changes made won't cause the logic of the application.

const h1 = document.createElement("h1")
h1.textContent = "This is me using TextContext"
h1.className = "header"
document.getElementById("root3").append(h1)

// JSX //
// It's a tool that helps developers create the visual parts of websites or web applications using code. 
// It's like mixing colors and shapes to make something awesome online!

const navbar = (
    <nav>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
)

ReactDOM.render( navbar, document.getElementById("root4"))