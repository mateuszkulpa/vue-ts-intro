<template>
  <div class="w-full">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-blue-600 rounded-xl">
        <Tab
          v-for="tab in tabs"
          :key="tab.label"
          v-slot="{ selected }"
          as="template"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
              'focus:outline-none',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ tab.label }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['bg-white rounded-xl mt-4', 'focus:outline-none']"
        >
          <component :is="tab.content" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { computed } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup(_, { slots }) {
    const tabs = computed(() =>
      slots
        .default()
        .map((slot) => ({ label: slot.props.label, content: slot }))
    )
    return { tabs }
  },
}
</script>
