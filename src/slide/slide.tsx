import { Props, c, useEffect, useRef, useProp, useEvent } from "atomico";
import { useChildNodes } from "@atomico/hooks/use-child-nodes";
import { useMutationObserver } from "@atomico/hooks/use-mutation-observer";
import KeenSlider, { TOptions } from "keen-slider";
import { useResponsiveProp } from "./use-responsive-prop.js";
import style from "./slide.css";

function slide({
  centered,
  vertical,
  loop,
  initial,
  duration,
  mode,
  spacing,
  autoplay,
  autoplayMs,
  breakpoints,
}: Props<typeof slide.props> & { mode: TOptions["mode"] }) {
  const refHost = useRef();
  const refSlide = useRef();
  const [childNodes, update] = useChildNodes();
  useMutationObserver(refHost, update, { childList: true });

  const slidesPerView = useResponsiveProp("slidesPerView", Number);

  const [slider, setSlider] = useProp("slider");
  const [autoplayPause, setAutoplayPause] = useProp("autoplayPause");

  const dispatchSlideChanged = useEvent("SlideChanged");
  const dispatchSlideDragStart = useEvent("SlideDragStart");
  const dispatchSlideDragEnd = useEvent("SlideDragEnd");
  const dispatchSlideMove = useEvent("SlideDragMove");
  const dispatchSlideDestroyed = useEvent("Slidedestroyed");

  useEffect(() => {
    const slider = new KeenSlider(refSlide.current, {
      slidesPerView,
      centered,
      vertical,
      loop,
      initial,
      duration,
      mode,
      spacing,
      breakpoints,
      slideChanged: dispatchSlideChanged,
      dragStart: dispatchSlideDragStart,
      dragEnd: dispatchSlideDragEnd,
      move: dispatchSlideMove,
      destroyed: dispatchSlideDestroyed,
    });

    setSlider(slider);

    return () => slider.destroy();
  }, [
    slidesPerView,
    centered,
    vertical,
    loop,
    initial,
    duration,
    mode,
    spacing,
  ]);

  const children = childNodes.filter(
    (child) =>
      child instanceof HTMLElement && !["left", "right"].includes(child.slot)
  ) as Element[];

  useEffect(() => {
    if (autoplay && slider && !autoplayPause) {
      const idInterval = setInterval(slider.next, autoplayMs);
      return () => clearInterval(idInterval);
    }
  }, [slider, autoplayPause]);
  return (
    <host
      shadowDom
      ref={refHost}
      onSlideDragStart={() => setAutoplayPause(true)}
      onSlideDragEnd={() => setAutoplayPause(false)}
      onmouseover={() => setAutoplayPause(true)}
      onmouseout={() => setAutoplayPause(false)}
    >
      <div class="keen-slider" ref={refSlide}>
        {children.map((child, slot) => (
          <div class="keen-slider__slide">
            <slot name={(child.slot = "" + slot)}></slot>
          </div>
        ))}
      </div>

      <slot name="left" onclick={slider?.prev}></slot>
      <slot name="right" onclick={slider?.next}></slot>
    </host>
  );
}

slide.props = {
  breakpoints: Object,
  centered: Boolean,
  vertical: {
    type: Boolean,
  },
  loop: {
    type: Boolean,
  },
  spacing: {
    type: Number,
    value: 0,
  },
  initial: {
    type: Number,
    value: 0,
  },
  duration: {
    type: Number,
    value: 500,
  },
  slidesPerView: {
    value: 1,
  },
  mode: {
    type: String,
    value: "snap",
  },
  autoplay: {
    type: Boolean,
  },
  autoplayMs: {
    type: Number,
    value: 5000,
  },
  slider: {
    type: Object,
    event: { type: "SliderMounted" },
  },
  autoplayPause: {
    type: Boolean,
  },
};

slide.styles = style;

export const Slide = c(slide);
