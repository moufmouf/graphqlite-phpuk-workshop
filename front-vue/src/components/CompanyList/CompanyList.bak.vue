<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="company in result.companies.items" :key="company.id">
          <a href="/company/">{{company.name}}</a><br/><small>{{company.website}}</small>
      </div>
      Total company count: {{ state.foo.result.companies.count }}
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, Ref, ref, toRef, toRefs} from '@vue/composition-api'
import {useCompaniesQuery} from "../../generated/graphql";

export default defineComponent({
  setup() {
    const { result, loading } = useCompaniesQuery({ search: "a" })
    return { result, loading }
  }
})
</script>
