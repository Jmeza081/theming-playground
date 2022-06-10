# Themeable Design Tokens Proof of Concept

A proof of concept `create-react-app` showcasing how we can leverage a `React.Context` Provider/Consumer pattern alongside Design Tokens to create a themeable UI Kit. 

This example provides two base "themes" that you can toggle between `dark` and `light` **modes**. In addition to this, you can override any of these modes by utilizing a `themeOverrides` prop to the `Provider` component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Good Resources

The example created here is loosely based on similar solutions found on the web. In a particular, these two resources serve as a good starting point in understanding the architecture:

- [Provider Pattern with React Context API](https://flexiple.com/react/provider-pattern-with-react-context-api/)
- [Design Tokens & Theming](https://debbie.codes/blog/design-tokens-and-theming/)
- [Narmi Design System](https://master--60620d422ffdf100216415b2.chromatic.com/?path=/docs/introduction-welcome--page) - A pretty good example of an existing design system utilizing Design Tokens to theme a library

To learn React, check out the [React documentation](https://reactjs.org/).
