function WelcomeMessage(props, age) {
  return (
    <h2>
      Welcome, {props.name}! and my age is {props.age}
    </h2>
  );
}

// Destructuring method
function Hello({ country, location }) {
  return (
    <p>
      My Address is {country}, in {location}
    </p>
  );
}

function App() {
  return (
    <div>
      <h1>Hello, Friends</h1>
      <p>I'm learning React</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        commodi impedit iste. Pariatur dolores aspernatur, enim est obcaecati,
        nam aliquam aliquid commodi quisquam, blanditiis ratione corporis quidem
        laboriosam ullam amet.
      </p>
      <button type="button">Button Submit </button>

      <WelcomeMessage name="Lakshan" age="23" />
      <WelcomeMessage name="Sandeepa" />
      <WelcomeMessage name="Nimal" />
      <WelcomeMessage name="Kasun" />
      <WelcomeMessage name="Supun" />

      <Hello country="Sri Lanka" location="Kandy" />
    </div>
  );
}

export default App;
