import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4>Here is your favorite questions with answers</h4>
            <div className='border rounded-2 bg-light'>
                <h3>What is props of React Router? </h3>
                <p className="text-start m-2 p-3">
                    'Router'
                    The common low-level interface for all router components. Typically apps will use one of the high-level routers instead:
                    'BrowserRouter'
                    ' HashRouter'
                    'MemoryRouter'
                    'NativeRouter'
                    ' StaticRouter'
                    The most common use-case for using the low-level Router is to synchronize a custom history with a state management lib like Redux or Mobx. Note that this is not required to use state management libs alongside React Router, it's only for deep integration.
                </p>
                <p className="text-start p-3">
                    props
                    The second argument are the props to match against, they are identical to the matching props Route accepts. It could also be a string or an array of strings as shortcut for path.
                </p>
            </div>
            <div className='border rounded-2 bg-light'>
                <h3>React context API: How it works?</h3>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <p>

                    React.createContext is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </p>

            </div>
            <div className='border rounded-2 bg-light'>
                <h3>What is useRef</h3>
                <p className="text-start p-3">
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
                <p className="text-start p-3">
                    <p className="text-start p-3">How does useRef work in React?</p>
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                </p>
            </div>

        </div>
    );
};

export default Blog;