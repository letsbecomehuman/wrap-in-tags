<template>
  <div style="padding: 10px;">
  <h1>Wrap in Tags App</h1>
    <p>Your Stuff:</p>
    <textarea v-model="message" placeholder="your text"  />
    <br />
    Class: <input v-model="myclass" />
    <br />
    ID (incremented): <input v-model="myid" />
    <br />
    <span>Tag Type:</span>
    <br />
    <select name="tags" id="tag-select" v-model="tag">
        <option value="">--Please choose an option--</option>
        <option value="div">div</option>
        <option value="p">p</option>
        <option value="span">span</option>
    </select>
    <br />
    <hr />
    <span>Your output:</span>
    <div class="myoutput">
      <div v-for="word in (message.split(' '))"> 
        {{ `<` + tag }} class="{{ myclass }}"
        
        <span v-if=myid>id="{{ myid }}"</span>
        >
        {{ word }}
        {{ `</` + tag }}>

      </div>
    </div>
  </div>
</template>

<script setup>
  const tag = ''
  const myclass = ''
  const message = ''
</script>