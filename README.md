# React + Redux + Reselect TodoMVC Example (with ICC)

This is an example demonstrating **Independently Connected Components** pattern with React + Redux + Reselect.
 
It is based on initial [TodoMVC React example](https://github.com/reactjs/redux/tree/master/examples/todomvc).  
The example was extended to handle **several lists** (to show the additional comlexity). Have a look at exercises below.

This is a demo related to my talk at FDConf 2017 and several meetups. Here is [the slide deck](http://slides.com/mr-mig/microsoft-to-do-23) (the slides are 2D, you can go down in some sections).

## Todo
**Note**: I did not make a clean complete refactoring so that you can easier trace the difference from the original.

- [ ] Make a clean refactoring in a separate branch 

## Things to notice 

1. Passing IDs through components (`MainSection`)
1. Binding components to specific handlers (`CompelteTodoComponents`, `DeleteTodoButton`)
1. Specializing components and reusing a template (`TodoInput/new` and `TodoInput/edit`)
1. Domains (todo and filter) and linking domains (`filter-todo`)
1. Derived data in selectors (`completedTodos`)
1. Render props (`TodoItem`)
1. Dependent Actions (`relations/list->todo`)

## Why so much overhead? 

This approach provides a clean structure for components and store.  
Changing the app and moving things around are much easier than with other approaches.
 
If you want to **feel** the benefits, I'd suggest to fork this repo and make these exercise changes to the app:

1. Rename the list to "Home".
1. Add a second list called "Work". It should work independently from "Home" list.
1. Make task counts work per list
1. Add a third todo list called "All" containing all tasks from both "Home" and "Work" lists.
1. When todo item is in "All" list, add a label to every todo item showing which list ("Home" or "Work") it belongs to.
1. Extract filters (All, Active, Completed) into components and remove them from "Home" and "Work" list.
1. Move a chevron (complete all tasks) to the footer of "All" list. Move completed todos counter to the header of "All" list.
1. Make "Work"/"Home" and "All" lists opaque when any todo is edited in "Home"/"Work" list (you probably need a new domain?).
1. Add drag'n'drop between "Work" and "Home" lists.
1. Add drag'n'drop sorting inside "Work" and "Home" lists.
1. Measure the performance. Try different options:  
    - passing primitives instead of todo model in props
    - ImmutableJS 
1. Make it possible to have 10000 items in any list  
    - generate test data on app start
    - use virtualized list
    
The exercises are listed by increasing complexity

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
