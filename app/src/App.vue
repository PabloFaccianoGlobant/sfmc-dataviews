<template>
  <div class="min-h-screen flex flex-col scroll-smooth bg-neutral-700 relative">

    <!-- Navbar -->
    <div class="sticky top-0 w-full flex justify-between items-center bg-black/50 border-b border-sky-600 shadow backdrop-blur z-50">
      <button @click="this.config.showSidebar = !this.config.showSidebar" class="p-3">
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/666666/settings.png" alt="Settings" />
      </button>
      <span class="text-neutral-400 text-lg">
        <span class="font-medium">SFMC Data Views </span><span class="font-light text-sm">by Pablo Facciano</span>
      </span>
      <a href="https://marketingcloudspecialist.hashnode.dev/?utm_source=dataviewsdiagram&utm_medium=direct&utm_campaign=header&utm_content=My%20Blog"
        target="_blank" class="p-3 cursor-pointer flex items-center text-sky-600 hover:underline hover:decoration-solid">
        <span class="me-2">My Blog</span>
        <img width="15" height="15" src="https://img.icons8.com/ios/20/0284C7/external-link.png" alt="external-link" />
      </a>
    </div>

    <!-- Content -->
    <div class="flex-1 flex h-full relative bg-neutral-900">

      <!-- Sidebar  w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/5   -->
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
        class="w-full px-12 bg-neutral-800 overflow-auto cursor-grab active:cursor-grabbing">

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
        <div v-for="(row,rowindex) in this.currentLayout" :key="row.name" :ref="'tablerow-'+rowindex">
          <div class="text-neutral-300 mt-12 mb-6 text-xl font-medium">{{ row.name }}</div>
          <div class="flex mb-6">
            <div v-for="(table,tableindex) in row.tables" :key="table.name" :ref="'table-'+rowindex+'-'+tableindex" class="relative">
              <!-- table itselft -->
              <div class="bg-neutral-700 text-neutral-300 me-6 rounded-md overflow-hidden whitespace-nowrap">
                <button class="bg-sky-600 text-center w-full text-white cursor-hand active:cursor-grabbing px-4"
                  :class="{ 'py-2': this.config.size == 0, 'py-1': this.config.size == 1 }"
                  @click="openTableInfo($event, table)">
                  {{ this.config.nameSize == 0 ? table.name.replace(/([a-z])([A-Z])|_/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase()) : table.name }}
                </button>
                <div
                  v-for="field in (this.config.size == 0 ? table.fields : table.fields.slice(0, 5))"
                  :key="field.name">
                  <button class="px-2 flex w-full cursor-grab active:cursor-grabbing"
                    :title="field.info"
                    :class="{ 'py-2': this.config.size == 0, 'py-1': this.config.size == 1 }">
                    <div class="flex-1 text-start select-none">{{ this.config.nameSize == 0 ? field.name.replace(/([a-z])([A-Z])|_/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase()) : field.name }}</div>
                    <div class="ms-8 text-neutral-400 select-none" v-if="this.config.size == 0">{{ field.type }}</div>
                  </button>
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

    </div>


    <!-- Context Menu -->
    <div>
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
      <div class="fixed inline-block w-full h-full left-0 top-0 bg-black/50" v-show="showOverlay"
        @mouseover="closeContextMenu">

      </div>
      <div class="fixed bg-neutral-800 shadow text-white rounded-md overflow-hidden h-auto p-3" v-show="tableContextMenu.show"
        :style="this.mouseLocation">
        <div class="text-center">
          <button @click="onClick_copySQL" class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/ios/24/FFFFFF/sql.png" alt="sql" /></div>
            <div>Copy SQL</div>
          </button>
          <button @click="onClick_copyFields" class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/windows/32/FFFFFF/copy.png" alt="link--v1" />
            </div>
            <div>Copy Fields</div>
          </button>
          <button @click="onClick_openLink" v-show="this.tableContextMenu?.table?.link != ''"
            class="flex gap-3 py-3 ps-3 pe-8 hover:bg-neutral-700 rounded-md w-full">
            <div><img width="24" height="24" src="https://img.icons8.com/ios/24/FFFFFF/link--v1.png" alt="link" /></div>
            <div>Open Docs</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dragscroll } from 'vue-dragscroll'
import diagramInfo from '@/diagramInfo.js';
export default {
  name: 'App',
  directives: {
    dragscroll
  },
  data: function () {
    return {
      tableContextMenu: {
        show: false,
        table: null
      },
      showOverlay: false,
      mouseLocation: { left: 0, top: 0 },
      config: {},
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
    // default config
    let currentConfig = {
      lastVisitedChangelog: 1,
      showSidebar: false,
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
    onClick_openLink() {
      if (this.tableContextMenu.table.link) {
        window.open(this.tableContextMenu.table.link);
      }
      this.closeContextMenu();
    },
    onClick_copySQL() {
      let query = this.getQueryForCurrentTable();
      console.log(query);
      this.copyToClipboard(query);
      this.closeContextMenu();
    },
    onClick_copyFields() {
      let fields = this.getFieldsForCurrentTable();
      console.log(fields);
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
    getQueryForCurrentTable() {
      let fields = this.tableContextMenu.table.fields.map(field => {
        if (field.name.startsWith('_')) {
          return `[${field.name}] AS ${field.name.substring(1)}`
        }
        return field.name;
      })

      let fieldsText = fields.join(",\n\t");
      return `SELECT\n\t${fieldsText}\nFROM [${this.tableContextMenu.table.name}]\n`;
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
      this.showOverlay = false;
    },
    setNameSize() {
      let next = this.config.nameSize + 1;
      if (next > 1) { next = 0; }
      this.config.nameSize = next;
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
