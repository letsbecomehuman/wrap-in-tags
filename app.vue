<template>
<div class="w-full min-x-full h-screen">
  <div class=" text-slate-100 mx-auto">
  <theHeader />
  <div class="p-4 max-w-4xl mx-auto">
  <projectInfo />
  <div>
    <label for="theText">Paste your text</label>
    <textarea v-model="message" class="bg-stone-700 focus:border-solid focus:border-2 focus:border-teal-400 focus:ring-0 outline-none" name="theText"/>
    <div class="grid-container">
    <div class="grid-item">
      <label for="theClass">Class</label> 
      <input v-model="myclass" name="theClass" class="bg-stone-700 focus:border-solid focus:border-2 focus:border-teal-400 focus:ring-0 outline-none" />
    </div>
    <div class="grid-item">
      <label for="theID">ID (incremented)</label> 
      <input v-model="myid" class="bg-stone-700 focus:border-solid focus:border-2 focus:border-teal-400 focus:ring-0 outline-none" name="theID" />
    </div>
    <div class="grid-item">
      <label for="theTag">Tag Type</label>
      <select name="theTag" id="tag-select" v-model="tag" class="bg-stone-700 ">
          <option value="div">H1</option>
          <option value="div">H2</option>
          <option value="div">H3</option>
          <option value="div">div</option>
          <option value="p">p</option>
          <option value="span">span</option>
      </select>
    </div>
  <label>Wrap Type
  <div class="flex">
    <div class="flex items-center mr-4">
        <input id="inline-radio" type="radio" name="inline-radio-group" class="w-4 h-4 text-blue-100 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  value="words" v-model="mode">
        <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-100 dark:text-gray-100">Words</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="inline-2-radio" type="radio" name="inline-radio-group" class="w-4 h-4 text-blue-100 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  value="letters" v-model="mode">
        <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-100 dark:text-gray-100">Letters</label>
    </div>
</div>
</label>
  </div>
  <div class="pt-6">
    <label for="theOutput">Your Output</label>
    <code name="theOutput">
      <div class="myoutput bg-stone-700">
        <div v-if="mode === 'words'" ref="message" id="copiedText" >
          <div v-for="word in (message.split(' '))" > 
            {{ `<` + tag }} class="{{ myclass }}"
            <span v-if=myid>id="{{ myid }}"</span>
            >
            {{ word }}
            {{ `</` + tag }}>
          </div>
          </div>
          <div v-else-if="mode === 'letters'" ref="myoutput" id="copiedTextOther">
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
    </div>
  <theButton />  
    <div style="display: none;">
      <h2>GSAP Code</h2>
      <span>Coming soonish!</span>
    </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script setup>
  const tag = ''
  const myclass = ''
  const message = ''
  const mode = 'words'
</script>