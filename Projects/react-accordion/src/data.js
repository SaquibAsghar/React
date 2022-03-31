export const data = [
	{
		id: 1,
		question: "What is JSX?",
		ans: "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
	},
	{
		id: 2,
		question: "Can web browsers read JSX directly? ",
		ans: `Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object.
            For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel
        `,
	},
	{
		id: 3,
		question: "What is the virtual DOM?",
		ans: `
			DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.
			React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
        `,
	},
	{
		id: 4,
		question: "What is an event in React?",
		ans: `An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
        React events are named using camelCase, rather than lowercase in HTML.
        With JSX, you pass a function as the event handler, rather than a string in HTML.
    `,
	},
	{
		id: 5,
		question: "What are synthetic events in React?",
		ans: `Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
        The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.
    `,
	},
	{
		id: 6,
		question: "Why is there a need for using keys in Lists?",
		ans: `Keys are very important in lists for the following reasons:
        A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists
        It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered
    `,
	},
	{
		id: 7,
		question: "What are forms in React?",
		ans: `React employs forms to enable users to interact with web applications.
        Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc
        Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc
    `,
	},
	{
		id: 8,
		question: "What is a state in React?",
		ans: `The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
        The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.
    `,
	},
	{
		id: 9,
		question: "What are props in React?",
		ans: `
        Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.
        Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.
    `,
	},
	{
		id: 10,
		question: "What is a higher-order component in React?",
		ans: "A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic. ",
	},
];
