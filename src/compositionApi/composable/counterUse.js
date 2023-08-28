import { ref } from "vue";
const counterUse = (initialcounter = 0, stepSize = 1) => {
  const count = ref(initialcounter);
  function IncrementCount() {
    count.value += stepSize;
  }
  return {
    count,
    IncrementCount,
  };
};

export default counterUse;
