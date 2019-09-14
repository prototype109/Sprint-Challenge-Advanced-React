- [ ] Why would you use class component over function components (removing hooks from the question)?

If the functional component doesn't have hooks then I can only see that it as a tool for displaying state, class components can keep and update state as needed and send it to the display functional components. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() - calls whatever functions you have after the component has mounted onto the DOM.

componentDidUpdate() - called when this.setState has been invoked and calls whatever functions you have in it.

componentWillUnmount() - called before the component gets removed from the DOM and does whatever cleanup functions you have in it.

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is if you want to keep your code non-repetitive. So you are using a combination of hooks that have a repeating pattern to be used together in a custom hook to perform the same functionality with minimal code.

- [ ] Why is it important to test our apps?

Testing apps is important to discover any bugs or unintended side effects our code has when users use our applications. The best way to test is through automated testing where the developer creates test cases to see if the application works from a users perspective.