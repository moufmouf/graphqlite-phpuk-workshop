<template>
  <div>
    <div v-if="foo.loading.value">Loading...</div>
    <div v-else>
      <div v-for="company in foo.result.companies.items" :key="company.id">
          <a href="/company/">{{company.name}}</a><br/><small>{{company.website}}</small>
      </div>
      Total company count: {{ foo.result.value.companies.count }}
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, Ref, ref, toRef, toRefs, unref} from '@vue/composition-api'
import {useCompaniesQuery} from "../../generated/graphql";

export default defineComponent({
  props: {
    search: String
  },
  /*data: () => {
    return {
      result: String,
      loading: String,
    }
  },*/
  setup(props) {

    const foo = computed(() => {
      return useCompaniesQuery({ search: props.search as string })
    })
    return { foo };
  }
})
</script>
