import { defineComponent } from "vue";

const Button = defineComponent({
  props: {
    type: { type: String, default: () => "primary" },
  },
  setup(props, { slots }) {
    return () => (
      <button class={`mybtn-${props.type}`}>{slots.default()}</button>
    );
  },
});

export default Button;
