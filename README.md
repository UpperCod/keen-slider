# @uppercod/keen-slider

**Working...**

It is a wrapper for keen-slider as a webcomponent created with Atomico.

## Example

### HTML

```html
<keen-slider>
  <div>slide 1</div>
  <div>slide 2</div>
  <div>slide 3</div>
  <div>slide 4</div>
</keen-slider>
```

### React

To use in React you must first install the dependency `@atomico/react`.

```jsx
import { Slider } from "@uppercod/keen-slider/components.react";

function App() {
  return (
    <>
      <Slider>
        <div>slide 1</div>
        <div>slide 2</div>
        <div>slide 3</div>
        <div>slide 4</div>
      </Slider>
    </>
  );
}
```

## Api

currently the component reflects the following options from the [original api](https://keen-slider.io/api/#api).

### Properties

| Property / Attribute            | Type                   | Description                                                                                                              |
| ------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| loop                            | boolean                | Infinite loop of slides                                                                                                  |
| centered                        | boolean                | Active slide will be centered - only makes sense, when slidesPerView is greater than 1                                   |
| vertical                        | boolean                | Set the slider direction to vertical                                                                                     |
| autoplay                        | boolean                | defines if the slide advances automatically                                                                              |
| autoplayMs / autoplay-ms        | number, default `5000` | timeout to retrieve autoplay loop                                                                                        |
| duration                        | number, default `500`  | Set the animation duration for the "snap"-mode                                                                           |
| slidesPerView / slides-per-view | number, default `1`    | Number of slides per view                                                                                                |
| spacing                         | number, default `0`    | Spacing between slides in pixel                                                                                          |
| mode                            | string, default `snap` | Set the mode of movement of the slider                                                                                   |
| slider                          | KeenSlider             | KeenSlider Last Instance                                                                                                 |
| breakpoints                     | Object                 | defines the breakpoints for the instance of KeenSlider, eg `'(min-width: 720px) and (max-width: 1000px)': {loop: false}` |

### Events
