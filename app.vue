<template>
  <div style="padding: 10px;">
  <theHeader />
    <p>Your Stuff:</p>
    <textarea v-model="message" placeholder="your text"  />
    <br />
<div class="grid-container">
 <div class="grid-item">
    Class: <input v-model="myclass" />
 </div>
 <div class="grid-item">
    ID (incremented): <input v-model="myid" />
 </div>
 <div class="grid-item">
     <span>Tag Type:</span>
    <br />
    <select name="tags" id="tag-select" v-model="tag">
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
    <h2>Your Output</h2>
    <code>
      <div class="myoutput">
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
    <button @click="copyTextNoInput()" style="cursor: not-allowed; pointer-events: none;">Copy</button>
  </div>
  <div>
    <h2>GSAP Code</h2>
    <span>Coming soon!</span>
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