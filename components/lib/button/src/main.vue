<template>
  <button
    type="button"
    class="btn"
    :class="`${buttonSize} ${buttonPlain ? buttonPlain : buttonType}`"
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { computed } from "vue";

defineOptions({
  name: "g-button",
});

// 通过属性值判断按钮样式
const props = defineProps(["type", "size", "plain"]);
console.log("type:" + props.type);
console.log("plain:" + props.plain);

// 类型 type
const buttonType = computed(() => {
  if (props.type !== "" && props.type) {
    return `btn-${props.type}`;
  } else {
    return "btn-light";
  }
});

// 大小 size
const buttonSize = computed(() => {
  if (props.size === "large") {
    return "btn-lg";
  } else {
    return "btn-sm";
  }
});

// 简洁 plain
const buttonPlain = computed(() => {
  if (props.plain === "" && props.type !== "") {
    return `btn-outline-${props.type}`;
  } else {
    return "";
  }
});
</script>
