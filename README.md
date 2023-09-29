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
5. Redux vs Reedux ToolKit
   1. Both has same purpose and use
   2. we need to write more code in redux
   3. Redux toolkit is wrapper of Redux
   4. Action and reducer come under slice

Interview Question

1. After creating redux store to the application does the created store stores locally ? or on refresh of page data goes away ? - Yes it goes away it doesn't store locally.
2. To store data after retriving from store - Redux Persist is a tool used to seamlessly save the application's Redux state object to AsyncStorage .
