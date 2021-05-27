import { defineComponent } from "vue";

const Button = defineComponent({
  props: {
    type: String,
    required: () => {
      return true;
    },
  },
  setup(props, { slots }) {
    return () => (
      <button class={("mybtn", `mybtn-${props.type}`)}>
        {slots.default()}
      </button>
    );
  },
});

export default Button;
