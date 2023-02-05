<template>
  <button
    @click="copyText"
    class="bg-teal-400 hover:bg-teal-500 px-3 py-2 font-bold"
  >
    Copy Now
  </button>
</template>

<script setup>
function copyText(mode) {
 
  if (mode === 'words') {
    var copied = document.getElementById('copiedText');
    navigator.clipboard.writeText(copied.textContent);
  } else if (mode === 'letters') {
    var copied = document.getElementById('copiedTextOther');
    navigator.clipboard.writeText(copied.textContent);
  }
}
</script>
