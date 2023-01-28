<template>
  <div style="padding: 10px;">
  <h1>Wrap in Tags App</h1>
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
        <option value="div">div</option>
        <option value="p">p</option>
        <option value="span">span</option>
    </select>
 </div>
 <div class="grid-item">
 <label class="form-control">
  <input type="radio" name="radio" />
  Wrap Words
</label>

<label class="form-control">
  <input type="radio" name="radio" />
  Wrap Letters
</label>
 
 </div>

</div>
    <hr />
    <span>Your output:</span>

    <code>
      <div class="myoutput">
        <div v-for="word in (message.split(' '))"> 
          {{ `<` + tag }} class="{{ myclass }}"
          
          <span v-if=myid>id="{{ myid }}"</span>
          >
          {{ word }}
          {{ `</` + tag }}>
        </div>
      </div>
    </code>
  </div>
</template>

<script setup>
  const tag = ''
  const myclass = ''
  const message = ''
</script>