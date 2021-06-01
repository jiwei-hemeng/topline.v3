import { defineComponent } from "vue";

const Button = defineComponent({
  name: "MyBtn",
  props: {
    type: { type: String, default: () => "primary" },
  },
  setup(props, { slots, emit }) {
    return () => (
      <button
        class={`mybtn-${props.type}`}
        onClick={() => {
          emit("addchage", "hahhah");
        }}
      >
        {slots.default()}
      </button>
    );
  },
});

export default Button;
