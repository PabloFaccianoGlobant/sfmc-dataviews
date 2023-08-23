<template>
  <div class="min-h-screen flex flex-col scroll-smooth bg-neutral-700 relative" @keyup="saveKeyPress($event)">

    <!-- Navbar -->
    <div class="sticky top-0 w-full flex justify-between items-center bg-black/50 border-b border-sky-600 shadow backdrop-blur z-40">
      <button @click="this.config.showSidebar = !this.config.showSidebar; if(this.config.showSidebar){ this.$gtag.pageview('settings'); }" class="p-3 hover:bg-neutral-700">
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/666666/settings.png" alt="Settings" />
      </button>
      <span class="text-neutral-400 text-lg">
        <span class="font-medium">SFMC Data Views </span><span class="font-light text-sm">by Pablo Facciano</span>
      </span>
      <button @click="this.config.showProfile = !this.config.showProfile; if(this.config.showProfile){ this.$gtag.pageview('profile'); }" class="p-3 relative flex hover:bg-neutral-700">
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/666666/user-male-circle--v1.png" alt="Profile" />
        <span class="relative flex h-3 w-3 -ms-2" v-if="pendingNotification">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </button>
    </div>

    <!-- Changelog message -->
    <div class="fixed top-0 w-full bg-sky-600 z-50 text-white" v-if="this.config.lastVisitedChangelog != this.changelogVersion">
      <button class="cursor-pointer flex justify-between items-center w-full cursor-pointer p-4" @click="this.openChangelog">
      <div>🆕 Some things have changed! Click here to see the <span class="inline-flex align-center">
              <span class="me-2 hover:underline hover:decoration-solid">changelog<sup><small>{{ 'V' + this.changelogVersion }}</small></sup></span>
              </span></div>
      <div>&times;</div>
      </button>
    </div>

    <!-- Content -->
    <div class="flex-1 flex h-full relative bg-neutral-900">


      <!-- Sidebar -->
      <div class="w-auto px-2 py-3 shadow text-neutral-300 whitespace-nowrap sticky h-full top-10 left-0" v-show="this.config.showSidebar">
        <div class="p-3">

          <div class="w-full">
            <div class="text-xl mb-6">Preferences</div>
            <div class="text-sm flex items-center w-full mb-4">
              <div class="pe-4 w-full">Data Views</div>
              <div class="flex-1">
                <button class="px-4 py-2 hover:bg-gray-800 flex" @click="setNextDataviewVisibility">
                  <div class="w-full" v-text="this.getDataviewsVisibilityText()"></div>
                </button>
              </div>
            </div>
            <div class="text-sm flex items-center w-full mb-4">
              <div class="pe-4 w-full">Size</div>
              <div class="flex-1">
                <button class="px-4 py-2 hover:bg-gray-800 flex" @click="setNextSize">
                  <div class="w-full" v-text="this.getSizeText()"></div>
                </button>
              </div>
            </div>
            <div class="text-sm flex items-center w-full mb-4">
              <div class="pe-4 w-full">Names</div>
              <div class="flex-1">
                <button class="px-4 py-2 hover:bg-gray-800 flex" @click="setNameSize">
                  <div class="w-full" v-text="this.getNameSizeText()"></div>
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col mt-8">
            <div class="text-xl mb-6">Channels</div>
            <label class="relative inline-flex items-center mb-8 cursor-pointer">
              <input v-model="this.config.showOthersDataviews" type="checkbox" value="" class="sr-only peer" checked>
              <div
                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600">
              </div>
              <span class="ml-3 text-sm text-gray-900 dark:text-gray-300 pe-8 whitespace-nowrap">Others</span>
            </label>
            <label class="relative inline-flex items-center mb-8 cursor-pointer">
              <input v-model="this.config.showEmailDataviews" type="checkbox" value="" class="sr-only peer" checked>
              <div
                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600">
              </div>
              <span class="ml-3 text-sm text-gray-900 dark:text-gray-300 pe-8 whitespace-nowrap">Email</span>
            </label>
            <label class="relative inline-flex items-center mb-8 cursor-pointer">
              <input v-model="this.config.showSmsDataviews" type="checkbox" value="" class="sr-only peer" checked>
              <div
                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600">
              </div>
              <span class="ml-3 text-sm text-gray-900 dark:text-gray-300 pe-8 whitespace-nowrap">Mobile Connect /
                SMS</span>
            </label>
            <label class="relative inline-flex items-center mb-8 cursor-pointer">
              <input v-model="this.config.showPushDataviews" type="checkbox" value="" class="sr-only peer" checked>
              <div
                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600">
              </div>
              <span class="ml-3 text-sm text-gray-900 dark:text-gray-300 pe-8 whitespace-nowrap">Mobile Push</span>
            </label>
            <label class="relative inline-flex items-center mb-8 cursor-pointer">
              <input v-model="this.config.showLineDataviews" type="checkbox" value="" class="sr-only peer" checked>
              <div
                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600">
              </div>
              <span class="ml-3 text-sm text-gray-900 dark:text-gray-300 pe-8 whitespace-nowrap">Group Connect /
                LINE</span>
            </label>
          </div>

        </div>
      </div>

      <!-- Tables -->
      <div v-dragscroll.pass
        class="w-full px-12 bg-neutral-800 overflow-auto cursor-grab active:cursor-grabbing"
        >

        <div 
          class="text-center text-neutral-400 inline-block w-full h-full flex flex-col justify-center animate-pulse"
          v-if="this.currentLayout.length == 0"
        >
          <div class="flex justify-center mb-4">
            <span class="text-4xl rounded-full border border-neutral-400 w-20 h-20 flex items-center justify-center">
              <span class="rotate-45 font-bold">:/</span>
            </span>
          </div>
          <div class="text-3xl mb-4">Nothing to see here</div>
          <div>Try adjusting your filter to find what you are looking for.</div>

        </div>

        <!-- Table -->
        <div v-for="(row,rowindex) in this.currentLayout" :key="row.name" :ref="'tablerow-'+rowindex" >
          <div class="text-neutral-300 mt-12 mb-6 text-xl font-medium">{{ row.name }}</div>
          <div class="flex mb-6">
            <div v-for="(table,tableindex) in row.tables" :key="table.name" :ref="'table-'+rowindex+'-'+tableindex" class="relative w-auto">
              <!-- table itselft -->
              <div class="bg-neutral-700 text-neutral-300 me-6 rounded-md overflow-hidden whitespace-nowrap w-auto"
                    @contextmenu.prevent="openTableInfo($event, table)">
                <button class="bg-sky-600 text-center w-full text-white cursor-hand active:cursor-grabbing px-4"
                  :class="{ 'py-2': this.config.size == 0, 'py-1': this.config.size == 1 }"
                  @click.stop="openTableInfo($event, table)">
                  {{ this.config.nameSize == 0 ? table.name.replace(/([a-z])([A-Z])|_/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase()) : table.name }}
                </button>
                <div
                  class="w-auto"
                  v-for="field in (this.config.size == 0 ? table.fields : table.fields.slice(0, 5))"
                  :key="field.name">
                  <div class="px-2 flex gap-4 w-auto min-w-full justify-between select-none"
                    draggable="false"
                    :title="field.info"
                    :class="{ 
                      'py-2': this.config.size == 0, 'py-1': this.config.size == 1,
                      'cursor-pointer hover:bg-white/10 active:bg-white/20 hover:text-white': (this.filterMode?.table?.name != null && this.filterMode?.table?.name == table.name),
                      'cursor-grab active:cursor-grabbing': !(this.filterMode?.table?.name != null && this.filterMode?.table?.name == table.name)
                    }"
                    @click="openFieldFilter($event, table, field)"
                  >
                    <div class="min-w-fit" v-if="this.filterMode?.table?.name != null && this.filterMode?.table?.name == table.name"> 
                      <img class="inline-block" v-if="field.condition" width="16" height="16" src="https://img.icons8.com/ios-filled/16/007ACC/filter--v1.png" alt="filterfield" />
                      <img class="inline-block" v-else width="16" height="16" src="https://img.icons8.com/ios-filled/16/AAAAAA/filter--v1.png" alt="filterfield" />
                    </div>
                    <div class="text-start flex-1">{{ this.config.nameSize == 0 ? field.name.replace(/([a-z])([A-Z])|_/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase()) : field.name }}</div>
                    <div class="text-neutral-100/25" v-if="this.config.size == 0">{{ field.type }}</div>
                  </div>
                </div>
                <button class="p-2 flex w-full cursor-hand" @click="setNextSize"
                  v-if="this.config.size > 0 && table.fields.length > 5">
                  <div class="text-center italic text-neutral-400 select-none">{{ (table.fields.length - 5) + ' more fields' }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- My Profile -->
      <div class="w-auto p-6 text-neutral-300 flex flex-col gap-6" v-show="this.config.showProfile">
        
        <div>
          <div class="text-xl font-medium	mb-6">About app</div>
          <div>Tired of typing several times the same query and looking for the documentation every time I need it, I created this app to save time and centralize the knowledge about the DataViews available in SFMC.</div>
          <button @click="openChangelog"
            :class="{ 'bg-sky-600 hover:bg-sky-500':this.pendingNotification, 'bg-neutral-800 hover:bg-neutral-700 border-none': !this.pendingNotification}"
            class="text-white px-6 py-2 mt-4 rounded flex items-center">
            <span>Open Changelog<sup><small>{{ 'V' + this.changelogVersion }}</small></sup></span>
          </button>
        </div>
        <div>
          <div class="text-xl font-medium	mb-6">Something wrong?</div>
          <div>You can upload an Issue in the repo or send me a message via email or LinkedIn (links below).<br>Happy to continue improving!</div>
        </div>
        <div>
          <div class="text-xl font-medium	mb-6">About me</div>
          <img src="/pablofacciano.png" alt="Pablo Facciano" width="200" class="h-auto rounded-full" />
          <div class="mt-4">My name is <span class="font-medium">Pablo Facciano</span> and I am a <span class="italic">Salesforce Marketing Cloud Developer</span> at <span class="italic">Globant</span>.</div>
        </div>
        <div>
          <div class="text-xl font-medium mb-6">Links</div>
          <div class="flex flex-col gap-3">
            <a href="https://marketingcloudspecialist.hashnode.dev/?utm_source=dataviewsdiagram&utm_medium=direct&utm_campaign=header&utm_content=My%20Blog"
              target="_blank" class="cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">My Blog</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="blog" />
            </a>
            <a href="https://www.linkedin.com/in/pablofacciano/"
              target="_blank" class="cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">LinkedIn</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="linkedin" />
            </a>
            <a href="https://github.com/PabloFacciano/"
              target="_blank" class="cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">GitHub (Personal)</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="linkedin" />
            </a>
            <a href="https://github.com/PabloFaccianoGlobant/"
              target="_blank" class="cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">GitHub (Enterprise)</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="linkedin" />
            </a>
            <a href="https://trailblazer.me/id/pablofacciano"
              target="_blank" class="cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">Trailblazer Profile (Trailhead)</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="linkedin" />
            </a>
            <a href="mailto:pablo.facciano@globant.com"
              target="_blank" class="cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">Email</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="linkedin" />
            </a>
          </div>  
        </div>
        <div>
        <div class="text-xl font-medium	mb-6">Tech Stack</div>
          <div>Built using <a href="https://vuejs.org/"
              target="_blank" class="cursor-pointer inline-flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">Vue 3</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="vue3" />
            </a> and <a href="https://tailwindcss.com/"
              target="_blank" class="cursor-pointer inline-flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">TailwindCSS</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="tailwindcss" />
            </a>.</div>
          <div>Open Source! See repo at <a href="https://github.com/PabloFaccianoGlobant/sfmc-dataviews"
              target="_blank" class="cursor-pointer inline-flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">GitHub</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="tailwindcss" />
            </a></div>
          <div>Icons from <a href="https://icons8.com/"
              target="_blank" class="cursor-pointer inline-flex items-center text-sky-600 hover:underline hover:decoration-solid">
              <span class="me-2">Icons8.com</span>
              <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="tailwindcss" />
            </a></div>
        </div>

      </div>

    </div>


    <!-- Dialogs -->
    <div>
      <!-- Minimap -->
      <div class="fixed bottom-10 right-10 inline-block w-40 h-24 bg-black/50 rounded overflow-hidden p-2 shadow-md flex backdrop-blur-2xl" draggable="false">

        <div class="overflow-hidden w-full h-full flex flex-col content-stretch">
          <div v-for="(row,rowindex) in this.currentLayout" :key="row.name" class="w-full h-full cursor-pointer hover:bg-neutral-500/10" @click="scrollTo('tablerow-'+rowindex,rowindex)">
            <div class="flex w-full h-full">
              <div v-for="(table,tableindex) in row.tables" :key="table.name" class="flex-1 max-w-[1rem] hover:bg-neutral-100 cursor-none" @click.stop="scrollTo('table-'+rowindex+'-'+tableindex,rowindex)">
                <!-- table itselft -->
                <div class="bg-neutral-700/50 w-full h-full">
                  <div class="h-1/4 bg-sky-600"></div>
                  <div class="h-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <!-- Background (autoclosed) -->
      <div class="fixed inline-block w-full h-full left-0 top-0 bg-black/50" v-show="showOverlay"
        @mouseover="closeContextMenu">
      </div>
      <!-- Table Context Menu -->
      <div class="fixed bg-neutral-800 shadow text-white rounded-md overflow-hidden h-auto p-3 select-none" v-if="tableContextMenu.show"
        :style="this.mouseLocation">
        <div class="text-center">
          <button @click="onClick_copySQL" class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/ios/24/FFFFFF/sql.png" alt="copysql" /></div>
            <div>Copy SQL</div>
          </button>
          <button @click="onClick_copyFields" class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/windows/32/FFFFFF/copy.png" alt="copyfields" />
            </div>
            <div>Copy Fields</div>
          </button>
          <button @click="onClick_filterSQL($event)" class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/ios-filled/24/FFFFFF/filter--v1.png" alt="filtersql" /></div>
            <div>Enable Filters</div>
          </button>
          <button @click="onClick_openLink" v-show="this.tableContextMenu?.table?.link != ''"
            class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/ios/24/FFFFFF/link--v1.png" alt="link" /></div>
            <div>Open Docs</div>
          </button>
        </div>
      </div>
      <!-- Field Context Menu -->
      <div class="fixed bg-neutral-800 shadow text-white rounded-md overflow-hidden h-auto p-3" v-if="filterMode.showContextMenu && this.filterMode?.field != null"
        :style="this.mouseLocation">        
        <div class="flex flex-col gap-4">
          
          <!-- Condition -->
          <div v-if="this.currentFieldInfo.showCondition">Condition:</div>
          <div 
            v-if="this.currentFieldInfo.showCondition"
            class="flex"
          >
            <div class="flex border border-neutral-700/50">
              <input v-model="this.filterMode.field.not" type="checkbox" id="not-condition" class="peer hidden" />
              <label for="not-condition" class="p-2 outline-none select-none cursor-pointer text-neutral-600 transition-colors duration-200 ease-in-out line-through peer-checked:text-neutral-200 peer-checked:no-underline bg-neutral-700/50">Not</label>
            </div>
            <select 
              class="flex-1 bg-neutral-700/50 p-2"
              v-model="this.filterMode.field.condition"
            >
              <option v-for="c in this.currentFieldInfo.availableConditions" :key="c.value" :value="c.value" v-text="c.label"></option>
            </select>
          </div>
          
          <!-- Range -->
          <div v-if="this.currentFieldInfo.showRange">Range:</div>
          <select 
            class="bg-neutral-700/50 p-2"
            v-if="this.currentFieldInfo.showRange"
            v-model="this.filterMode.field.range"
          >    
            <option v-for="c in this.currentFieldInfo.availableRanges" :key="c.value" :value="c.value" v-text="c.label"></option>
          </select>

          <!-- Value 1 -->
          <div v-if="this.currentFieldInfo.showValue1">{{ this.currentFieldInfo.labelValue1 }}</div>
          <input 
            v-if="this.currentFieldInfo.showValue1"
            :type="this.currentFieldInfo.inputType"
            class="p-2 rounded bg-neutral-700/50 text-white outline-0"
            autocomplete="one-time-code"
            v-model="this.filterMode.field.value"
          />

          <!-- Value 2 -->
          <div v-if="this.currentFieldInfo.showValue2">{{ this.currentFieldInfo.labelValue2 }}</div>
          <input 
            v-if="this.currentFieldInfo.showValue2"
            :type="this.currentFieldInfo.inputType"
            class="p-2 rounded bg-neutral-700/50 text-white outline-0"
            autocomplete="one-time-code"
            v-model="this.filterMode.field.value2"
          />

          <!-- Close -->
          <button @click="closeContextMenu" class="mt-6 text-center py-2 px-4 flex-1 rounded-md w-full bg-neutral-700/50 text-white hover:bg-sky-600">
            Close
          </button>

          <!-- Remove filter -->
          <button @click="onClick_removeFilter" class="text-center py-2 px-4 flex-1 rounded-md w-full bg-neutral-700/50 text-white hover:bg-red-700">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dragscroll } from 'vue-dragscroll'
import diagramInfo from '@/diagramInfo.js';
import queryBuilder from '@/queryBuilder.js';

export default {
  name: 'App',
  directives: {
    dragscroll
  },
  data: function () {
    return {
      changelogVersion: 2,
      tableContextMenu: {
        show: false,
        table: null
      },
      showOverlay: false,
      mouseLocation: { left: 0, top: 0 },
      config: {},
      filterMode: {
        enabled: () => { return this.filterMode.table != null },
        table: null,
        field: null,
        showContextMenu: false
      },
      currentScrollRowindex: null
    }
  },
  watch: {
    config: {
     handler(){
      if (window.localStorage /* function to detect if localstorage is supported*/) {
        window.localStorage.setItem('storedConfig', JSON.stringify(this.config))
      }
     },
     deep: true
    }
  },
  mounted(){
    this.$gtag.pageview('home');
    // default config
    let currentConfig = {
      lastVisitedChangelog: 1,
      showSidebar: false,
      showProfile: false,
      dataviewsVisibility: 1,
      showEmailDataviews: true,
      showSmsDataviews: true,
      showPushDataviews: true,
      showLineDataviews: true,
      showOthersDataviews: true,
      size: 1,
      nameSize: 1
    }  
    if (window.localStorage){      
      let savedConfig = window.localStorage.getItem('storedConfig');
      if (savedConfig){
        currentConfig = { ...currentConfig, ...JSON.parse(savedConfig) };
      }
    }
    this.config = currentConfig;
  },
  computed: {
    currentFieldInfo(){
      const currentField = this.filterMode?.field;
      let labelValue1 = '',
          labelValue2 = '',
          availableConditions = [],
          availableRanges = [];

      let inputType = 'text';
      if (currentField.type.includes("Email")){
        inputType = 'email';
      } else if (currentField.type.includes("Phone")){
        inputType = 'tel';
      } else if (currentField.type == "Date"){
        inputType = 'date';
      } else if (currentField.type == "Number"){
        inputType = 'number';
      }

      // BOOLEAN
      if (currentField.type == 'Boolean'){
        availableConditions = [
          { value: 'empty', label: 'empty' },
          { value: '1', label: 'True' },
          { value: '0', label: 'False' }
        ];
      }
      // TEXT
      if (currentField.type != 'Boolean' && (inputType == 'text' || inputType == 'email')){
        availableConditions = [
          { value: 'empty', label: 'empty' },
          { value: 'equals', label: 'equals' },
          { value: 'contains', label: 'contains' },
          { value: 'starts', label: 'starts with' },
          { value: 'ends', label: 'ends with' }
        ];
        if (currentField.condition && currentField.condition != 'empty'){
          labelValue1 = 'Value:';
        }
      }
      // NUMBER
      if (inputType == 'number' || inputType == 'tel'){
        availableConditions = [
          { value: 'empty', label: 'empty' },
          { value: 'equals', label: 'equals' },
          { value: 'inrange', label: 'in range' },
          { value: 'less', label: 'less than' },
          { value: 'greather', label: 'greather than' },
          { value: 'lessequals', label: 'less or equals than' },
          { value: 'greatherequals', label: 'greather or equals than' },
        ];
        if (currentField.condition == 'inrange'){
          labelValue1 = 'Start value:';
          labelValue2 = 'End value:';
        } else if (currentField.condition && currentField.condition != 'empty' ){
          labelValue1 = 'Value:';
        }
      }
      // DATE
      if (inputType == 'date'){
        availableConditions = [
          { value: 'empty', label: 'empty' },
          { value: 'equals', label: 'equals' },
          { value: 'inrange', label: 'in range' }
        ];
        if (currentField.condition == 'equals'){
          availableRanges = [
            { value: 'custom', label: 'Custom' },
            { value: 'yesterday', label: 'Yesterday' },
            { value: 'today', label: 'Today' },
            { value: 'tomorrow', label: 'Tomorrow' },
            { value: 'month', label: 'Current Month' },
            { value: 'year', label: 'Current Year' }
          ];
        }
        if (currentField.condition == 'inrange'){
          availableRanges = [
            { value: 'custom', label: 'Custom' },
            { value: 'lastdays', label: '-# days 👉 Today' },
            { value: 'nextdays', label: 'Today 👉 +# days' },
            { value: 'lastmonths', label: '-# months 👉 Today' },
            { value: 'nextmonths', label: 'Today 👉 +# months' },
            { value: 'lastyears', label: '-# years 👉 Today' },
            { value: 'nextyears', label: 'Today 👉 +# years' }
          ];
        }
        if (currentField.condition == 'equals' && currentField.range == 'custom'){
          labelValue1 = 'Date:';
        }
        if (currentField.condition == 'inrange' && currentField.range == 'custom'){
          labelValue1 = 'Start date:';
          labelValue2 = 'End date:';
        }
        if (currentField.condition == 'inrange' && currentField.range != 'custom'){
          labelValue1 = 'Number:';
          inputType = 'number';
        }

      }

      return {
        inputType: inputType,
        showCondition: availableConditions.length > 0,
        showRange: availableRanges.length > 0,
        labelValue1: labelValue1,
        labelValue2: labelValue2,
        showValue1: labelValue1.length > 0,
        showValue2: labelValue2.length > 0,
        availableConditions: availableConditions,
        availableRanges: availableRanges
      }
    },
    pendingNotification(){
      if (this.config.lastVisitedChangelog != this.changelogVersion){
        return true;
      }
      return false;
    },  
    currentLayout() {
      let layout = [];
      diagramInfo.layout.forEach(row => {
        let tablesInCurrentRow = [];
        row.tables.forEach(table => {

          let tbl = diagramInfo.tables.find(t => t.name.trim().toLowerCase() === table.trim().toLowerCase())
          if (!tbl) { return; }

          if (this.config.dataviewsVisibility == 1) {
            if (!tbl.link) { return; }
          }
          if (this.config.dataviewsVisibility == 2) {
            if (!tbl.hidden) { return; }
          }
          if (this.config.dataviewsVisibility == 3) {
            if (!tbl.deprecated) { return; }
          }

          if (
            (tbl.channel == "Email" && !this.config.showEmailDataviews) ||
            (tbl.channel == "SMS" && !this.config.showSmsDataviews) ||
            (tbl.channel == "Push" && !this.config.showPushDataviews) ||
            (tbl.channel == "LINE" && !this.config.showLineDataviews) ||
            (tbl.channel == "Others" && !this.config.showOthersDataviews)
          ) {
            return;
          }

          tablesInCurrentRow.push(tbl);
        });
        if (tablesInCurrentRow.length > 0) {
          layout.push({
            name: row.name,
            tables: tablesInCurrentRow
          });
        }
      });
      return layout;
    }
  },
  methods: {
    saveKeyPress(e){
      this.$gtag.event('key-up', {
        'event_label': e.code
      });
    },
    openChangelog(){
      this.$gtag.pageview('changelog');
      this.config.lastVisitedChangelog = this.changelogVersion;
      window.open('https://github.com/PabloFaccianoGlobant/sfmc-dataviews/blob/main/Changelog.md');
    },
    scrollTo(to, currentScrollRowindex){ 
      const el = this.$refs[to];
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        if (this.lastScrollId && this.lastScrollId != to){
          const el2 = this.$refs[this.lastScrollId];
          if (el2 && el2.length > 0){
            el2[0].scrollIntoView({ block: "center", inline: "nearest" });
          }
        }

        el[0].scrollIntoView({ 
          behavior: "smooth", 
          block: "center", 
          inline: "center"
        });
        this.lastScrollId = to;
        this.currentScrollRowindex = currentScrollRowindex;
      }
    },
    onClick_removeFilter(){
      this.filterMode.field.condition = '';
      this.filterMode.field.range = '';
      this.closeContextMenu();
    },
    onClick_filterSQL() {
      this.$gtag.event('filter-table', {
        'event_label': this.tableContextMenu.table.name
      });
      this.filterMode.table = this.tableContextMenu.table;
      this.closeContextMenu();
    },
    onClick_openLink() {
      if (this.tableContextMenu.table.link) {
        this.$gtag.event('open-link', {
          'event_label': this.tableContextMenu.table.link
        });
        window.open(this.tableContextMenu.table.link);     
      }
      this.closeContextMenu();
    },
    onClick_copySQL() {
      const table = this.tableContextMenu.table;
      let query = queryBuilder.buildQuery(table);
      console.log(query);
      this.$gtag.event('copy-sql', {
        'event_label': table.name
      });
      this.copyToClipboard(query);
      this.closeContextMenu();
    },
    onClick_copyFields() {
      let fields = this.getFieldsForCurrentTable();
      console.log(fields);
      this.$gtag.event('copy-fields', {
        'event_label': this.tableContextMenu.table.name
      });
      this.copyToClipboard(fields);
      this.closeContextMenu();
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text);
    },
    getFieldsForCurrentTable() {
      const headers = '"name"\t"type"\t"description"\n"';
      const fields = this.tableContextMenu.table.fields.map(field => {
        return [field.name, field.type, field.info].join('"\t"');
      })
      return headers + fields.join('"\n"');
    },
    openFieldFilter(event, table, field){
      if (this.filterMode?.table?.name == null || this.filterMode?.table?.name != table.name){
        return;
      }
      this.$gtag.event('filter-field', {
        'event_label': table.name + '.' + field.name
      });

      this.filterMode.field = field;
      this.showOverlay = true;
      this.mouseLocation = {
        left: event.clientX - 10 + 'px',
        top: event.clientY - 10 + 'px'
      }
      this.filterMode.showContextMenu = true;
    },
    openTableInfo(event, table) {
      this.showOverlay = true;
      this.tableContextMenu.table = table;
      this.mouseLocation = {
        left: event.clientX - 10 + 'px',
        top: event.clientY - 10 + 'px'
      }
      this.tableContextMenu.show = true;
    },
    closeContextMenu() {
      this.tableContextMenu.show = false;
      this.filterMode.showContextMenu = false;
      this.showOverlay = false;
    },
    setNameSize() {
      let next = this.config.nameSize + 1;
      if (next > 1) { next = 0; }
      this.config.nameSize = next;
      this.$gtag.event('change-name', {
        'event_label': next
      });
    },
    getNameSizeText() {
      let text = {
        0: 'Pretty ▼',
        1: 'Default ▼'
      };
      return text[this.config.nameSize];
    },
    setNextSize() {
      let next = this.config.size + 1;
      if (next > 1) { next = 0; }
      this.config.size = next;
      this.$gtag.event('change-size', {
        'event_label': next
      });
    },
    getSizeText() {
      let text = {
        0: 'Default ▼',
        1: 'Compact ▼'
      };
      return text[this.config.size];
    },
    setNextDataviewVisibility() {
      let next = this.config.dataviewsVisibility + 1;
      if (next > 3) { next = 0; }
      this.config.dataviewsVisibility = next;
      this.$gtag.event('change-visibility', {
        'event_label': next
      });
    },
    getDataviewsVisibilityText() {
      let text = {
        0: 'Show all ▼',
        1: 'Only with Docs ▼',
        2: 'Only Hidden ▼',
        3: 'Only Deprecated ▼'
      };
      return text[this.config.dataviewsVisibility];
    }
  }
}
</script>
