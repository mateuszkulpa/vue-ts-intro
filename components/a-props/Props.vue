<template>
  <div>
    <Tabs>
      <TabsItem label="Implicit">
        <PropsImplicit name="Cheese cake" :price="12.34" :available="true" />
      </TabsItem>

      <TabsItem label="Object">
        <PropsObject
          :book="{
            title: 'Design Patterns for Vue.js',
            author: 'Lachlan Miller',
            year: 2020,
            photoUrl: 'https://cutt.ly/fYPYJV0',
          }"
        />
      </TabsItem>

      <TabsItem label="Function">
        <PropsFunction :search-function="fetchItems" />
        <!-- <PropsFunction :search-function="fetchItemsWithIds" /> -->
      </TabsItem>

      <TabsItem label="Union">
        <PropsUnion type="spinner" />
        <PropsUnion type="skeleton" />
        <PropsUnion type="pulse" />
      </TabsItem>

      <TabsItem label="Enum">
        <PropsEnum :status="OrderStatus.New" />
        <PropsEnum :status="OrderStatus.Cancelled" />
      </TabsItem>

      <TabsItem label="Type guard">
        <PropsTypeGuard
          v-for="question in questions"
          :key="question.title"
          :question="question"
        />
      </TabsItem>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fetchQuestions, searchVehicles, searchVehiclesWithIds } from './api'
import { OrderStatus } from './types'

import PropsObject from './PropsObject.vue'
import PropsImplicit from './PropsImplicit.vue'
import Tabs from '../common/Tabs.vue'
import TabsItem from '../common/TabsItem.vue'
import PropsFunction from './PropsFunction.vue'
import PropsEnum from './PropsEnum.vue'
import PropsTypeGuard from './PropsTypeGuard.vue'
import PropsUnion from './PropsUnion.vue'

export default defineComponent({
  components: {
    PropsImplicit,
    PropsObject,
    Tabs,
    TabsItem,
    PropsFunction,
    PropsEnum,
    PropsTypeGuard,
    PropsUnion,
  },
  setup() {
    const fetchItems = async (query: string) => {
      return await searchVehicles(query)
    }

    const fetchItemsWithIds = async (query: string) => {
      return await searchVehiclesWithIds(query)
    }

    const questions = fetchQuestions()

    return {
      fetchItems,
      fetchItemsWithIds,
      OrderStatus,
      questions,
    }
  },
})
</script>
