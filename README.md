# @uppercod/keen-slider

It is a wrapper for keen-slider as a webcomponent created with Atomico.

## Example

### HTML

```html
<keen-slide>
  <div>slide 1</div>
  <div>slide 2</div>
  <div>slide 3</div>
  <div>slide 4</div>
</keen-slide>
```

### React

To use in React you must first install the dependency `@atomico/react`.

```jsx
import {Slider}
```

## Api

currently the component reflects the following options from the [original api](https://keen-slider.io/api/#api).

### centered

```html
<keen-slide centered>
  <div>slide 1</div>
  <div>slide 2</div>
  <div>slide 3</div>
  <div>slide 4</div>
</keen-slide>
```

### slidesPerView | slides-per-view

```html
<keen-slide slides-per-view="1, 2 720px 3 1080px">
  <div>slide 1</div>
  <div>slide 2</div>
  <div>slide 3</div>
  <div>slide 4</div>
</keen-slide>
```
