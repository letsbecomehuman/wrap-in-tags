<template>
  <div class="bg-slate-900 min-h-full h-screen text-slate-100">
  <theHeader />
  <label class="text-lg" for="theText">Paste your text</label>
  <textarea v-model="message" placeholder="your text" class="bg-stone-700" name="theText"/>
  <div class="grid-container">
  <div class="grid-item">
    <label for="theClass">Class</label> 
    <input v-model="myclass" name="theClass" class="bg-stone-700" />
  </div>
  <div class="grid-item">
    <label for="theID">ID (incremented)</label> 
    <input v-model="myid" class="bg-stone-700" name="theID" />
  </div>
  <div class="grid-item">
    <label for="theTag">Tag Type</label>
    <select name="theTag" id="tag-select" v-model="tag" class="bg-stone-700">
        <option value="">--Please choose an option--</option>
        <option value="div">H1</option>
        <option value="div">H2</option>
        <option value="div">H3</option>
        <option value="div">div</option>
        <option value="p">p</option>
        <option value="span">span</option>
    </select>
  </div>
  <div class="grid-item">
    <label class="form-control">
      <input type="radio" name="radio" value="words" v-model="mode"/>
      Wrap Words
    </label>
    <label class="form-control">
      <input type="radio" name="radio" value="letters" v-model="mode" />
      Wrap Letters
    </label>
  </div>
  </div>
  <div>
    <label for="theOutput">Your Output</label>
    <code name="theOutput">
      <div class="myoutput bg-stone-700">
        <div v-if="mode === 'words'" ref="message" >
          <div v-for="word in (message.split(' '))" > 
            {{ `<` + tag }} class="{{ myclass }}"
            <span v-if=myid>id="{{ myid }}"</span>
            >
            {{ word }}
            {{ `</` + tag }}>
          </div>
          </div>
          <div v-else-if="mode === 'letters'" ref="myoutput">
              <div v-for="word in (message.split(''))"> 
            {{ `<` + tag }} class="{{ myclass }}"
            <span v-if=myid>id="{{ myid }}"</span>
            >
            {{ word }}
            {{ `</` + tag }}>
          </div>
      </div>
      </div>
    </code>
  <theButton />  
  </div>
    <div>
      <h2>GSAP Code</h2>
      <span>Coming soon!</span>
    </div>
  </div>
</template>

<script setup>
  const tag = ''
  const myclass = ''
  const message = ''
  const mode = ''

  function copyTextNoInput() {
      const storage = document.createElement('textarea');
      storage.value = this.$refs.message.innerHTML;
      this.$refs.reference.appendChild(storage);
      storage.select();
      storage.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.$refs.reference.removeChild(storage);
    }
</script>