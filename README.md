This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

1. Redux is used for state mangement of application lets say there are 50 components and we need to pass data between 2nd component to 50th component in this case we use redux.
2. Redux tool kit is the advanced version of react.
3. Redux main concept are -- (Action + Reducer = Slice in redux toolkit)
   1. Action
   2. Reducer
   3. Store
   4. Dispatcher, Selected
4. For state management useState, redux toolkit and context is used ( context cannot be used for larger application coz it reduces application performance )
5. Redux vs Redux ToolKit
   1. Both has same purpose and use
   2. we need to write more code in redux
   3. Redux toolkit is wrapper of Redux
   4. Action and reducer come under slice
6. Create a folder called redux - inside it create file called provider.js, slice.js, store.js
7. store.js file holds call the data which passed to redux from the app
8. providers.js - the acts as the wrapper to connect the next-app with the redux.

9. Create a folder called redux - inside it create file called provider.js, slice.js, store.js
10. store.js file holds call the data which passed to redux from the app
11. providers.js - the acts as the wrapper to connect the next-app with the redux

Interview Question

1. How will be the data flow of Redux ? - Bi-directional or Uni-directional ?
   - It will be Unidirection i.e., View/UI --> (through dispatch) (Action --> Reducer = Slice) --> Sttore --> (through Subscribe) --> View/UI .

---

1. A slice is a collection of Redux reducer logic and action for a single feature in your app. In slice we define action and reducer in a single file.
   -- Send data from Next to Redux
   i). Get Data from input field to State
   ii). Import Action function from slice
   iii). use dispatch hook for send data in action
   iv). check data in slice

Redux dev tools

1. check action with redux dev tool
2. Don't store sensitive data in redux store

Get Data from Redux to Next

1. Import useSelector Hook
2. Display list of users
3. Add style with user list
4. While using redux make it as client component

Interview Question :

1. In one react application only one store is used

---

Redux data between the pages
use same useDispatch method

Redux with Local Storage

1. We can use redux with local storage.
2. Redux helps in transferring data between the components
3. Local storage - helps when Browser is closed or Tab closed or Page refreshed , the data will not get affected
4. We store data inside the reducer and by default it will be inside promise so it will be displayed as Proxy(Array) to remove this use current . Then use current
5. There can be multiple slice in the project
<<<<<<< HEAD
6. useSelector --(Get data from the redux) and useDispatch -- (Set data inside redux store) how to both in same component -- these 2 hooks are from connector react-redux from npm library

---

API call with Redux toolkit

1. Make API page for display API data
2. Make API call in Slice
3. Make reducer for API call
4. Display API data on UI

When API is called it will return promise to handle this in redux we will make use of createAsyncThunk

Redux Interview Questions.

1. Redux core principle : single source of truth (Only object will be created in a store), state is read only, changes are madewith pure(reducers are pure functions) functions.
2. what is Redux
   1. State management library
   2. with redux we can share data between components
   3. Redux can be used with any javascript library
3. Can we create 2 store in redux - No only one store can be created.
4. Redux vs Redux ToolKit
   1. Both has same purpose and use
   2. we need to write more code in redux
   3. Redux toolkit is wrapper of Redux
   4. Action and reducer come under slice
5. Difference between store and state
   1. The store is an object that holds the entire stateof the application
   2. The state is the data that application needs to render its UI.
6. What is Provider in react-redux ?
   1. The Provider is a component in React-Redux
   2. Makes Redux store available to any component of application.
7. What are the popular middleware?
   To handle promise data we use middleware in redux .
   Redux thunk (Inside Redux tool kit by default Thunk is used), Redux Saga, Redux Observable
8. What is the use of Slice
   Slice is a collection of reducer and action
9. Redux main components - Action, reducer, store and Provider
10. Alternative to redux-
    1. MobX
    2. Recoil- Facebook
    3. context API - if application is small
11. Redux devtool is used to degbug application
=======
>>>>>>> f7bf8d2 (added new code)
