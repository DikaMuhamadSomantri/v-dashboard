<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Tables</h3>

    <div class="mt-4">
      <h4 class="text-gray-600">Simple Table</h4>

      <div class="mt-6">
        <div class="my-6 overflow-hidden bg-white rounded-md shadow">
          <table class="w-full text-left border-collapse">
            <thead class="border-b">
              <tr>
                <th
                  class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
                >
                  City
                </th>
                <th
                  class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
                >
                  Total orders
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(i, index) in simpleTableData"
                :key="index"
                class="hover:bg-gray-200"
              >
                <td class="px-6 py-4 text-lg text-gray-700 border-b">
                  {{ i.city }}
                </td>
                <td class="px-6 py-4 text-gray-500 border-b">
                  {{ i.totalOrders }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">Table with pagination</h4>

      
    </div>

    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useTableData } from "../hooks/useTableData";

export default defineComponent({
  setup() {
    const {
      simpleTableData,
      paginatedTableData,
      wideTableData,
    } = useTableData();

    return {
      simpleTableData,
      paginatedTableData,
      wideTableData,
    };
  },
});
</script>
