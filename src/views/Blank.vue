<style>
@import url('https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css');
@import url('https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css');
@import url('https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css');
</style>
<template>
  <h3 class="text-gray-700 text-3xl font-medium">Blank Page</h3>

  <!--Container-->
	<div class="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">

		<!--Title-->
		<h1 class="flex items-center font-sans font-bold break-normal text-indigo-500 px-2 py-8 text-xl md:text-2xl">
			Responsive DataTables.net Table
		</h1>


		<!--Card-->
		<div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">


			<table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
				<thead>
					<tr>
						<th data-priority="1">Name</th>
						<th data-priority="2">Position</th>
						<th data-priority="3">Office</th>
						<th data-priority="4">Age</th>
						<th data-priority="5">Start date</th>
						<th data-priority="6">Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>

					<!-- Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing)-->

					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
					<tr>
						<td>aan</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr><tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr><tr>
						<td>Donna Snider</td>
						<td>Customer Support</td>
						<td>New York</td>
						<td>27</td>
						<td>2011/01/25</td>
						<td>$112,000</td>
					</tr>
				</tbody>

			</table>


		</div>
		<!--/Card-->


	</div>



 <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          type="text"
          placeholder="Search"
        />

        <button class=" flex items-center px-2 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 float-right" >              
              <span class="mx-1">Refresh</span>        
        </button>
        <button class=" flex items-center px-2 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 float-right" >          
              <span class="mx-1">filter</span>          
     </button>



    
</div>





    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Client
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Project Code
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Project Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Sum of Amount
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in users" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex items-center">
                   

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u.client }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.email }}
                      </div>
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ u.pj }}
                  </div>
                </td>

                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                    <div class="text-sm font-medium leading-5 text-gray-900">
                  {{ u.name_project }}
                     </div>
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                    <div class="text-sm font-medium leading-5 text-gray-900">
                  {{ u.sum_of_amount }}
                     </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface User {
  client: string;
  email: string;
  pj: string;
  name_project: string;
  sum_of_amount: string;
}

export default defineComponent({
  setup() {
    const testUser: User = {
      client: "Dika",
      email: "Dika@example.com",
      pj: "GPP001",
      name_project: "GPP SYSTEM",
      sum_of_amount: "2000.000",
    };

    const users = ref<User[]>([...Array(10).keys()].map(() => testUser));

    return {
      users,
    };
  },
});





import 'https://code.jquery.com/jquery-3.4.1.min.js'
import 'https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js'
import 'https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js'

// $(document).ready(function() {

//			var table = $('#example').DataTable({
//					responsive: true
	//			})
	//			.columns.adjust()
	//			.responsive.recalc();
  // });



</script>


