# bem-components-react

A factory to create react components that follow BEM methodology with first-class typescript support.

## Getting started

Installation:

```
  yarn add bem-components-react

  npm install --save bem-components-react
```

Usage:

```jsx
import { styled } from 'bem-components-react'

// specify a class name and a list of variants afterwards
const Button = styled.button('button', ['large', 'small']) 

function MyComponent() {
  return <Button large>Click me</Button>
}

```

This component will render to:

```html
<button class="button button--large">Click me</button>
```

### API

```jsx
// omit the second argument if the component doesn't have any modifiers
const Button = styled.button('button')

// specify an array of variants as a second argument
const Button = styled.button('button', ['large', 'small']) 

// nest elements inside blocks by specifying it in the name
const Input = styled.button('dialog__input', ['error'])

// to enable a variant, pass a prop to the created component
<Button large>Click me</Button>

// you can pass any other prop to the created component
<Input error placeholder="write here"/>

// you can pass extra classNames to the component
<Button large className="foo">Click me</Button>
// will result in
<button classname="button button--large foo">Click me</button>
```

### Using a custom prefix for classes

```jsx
import { withPrefix } from 'bem-components-react'
const styled = withPrefix('myapp')

const Button = styled.button('button', ['large', 'small']) 
```

Will render to:

```html
<button class="myapp-button myapp-button--large">Click me</button>
```
