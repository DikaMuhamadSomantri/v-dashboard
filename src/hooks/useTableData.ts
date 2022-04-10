import { ref } from 'vue';

export interface ISimpleTableData {
  city: string;
  totalOrders: string;
}

export interface IPaginatedTableData {

  client: string;
  project_code: string;
  project_name: string;
  sum_of_amount: string;
}

export interface IWideTableData {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

export function useTableData() {
  const simpleTableData = ref<ISimpleTableData[]>([
    { city: 'New York', totalOrders: '200,120' },
    { city: 'Manchester', totalOrders: '632,310' },
    { city: 'London', totalOrders: '451,110' },
    { city: 'Madrid', totalOrders: '132,524' },
  ]);

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      client: 'Vera Carpenter',
      project_code: 'GPP001',
      project_name: 'GPP SYSTEM',
      sum_of_amount: '200.000.000',
    },
    {
      client: 'Blake Bowman',
      project_code: 'GPP002',
      project_name: 'GPP SYSTEM',
      sum_of_amount: '1.500.000',

    },
    {
      client: 'Dana Moore',
      project_code: 'GPP003',
      project_name: 'JPP SYSTEM',
      sum_of_amount: '3000.000',
    },
    {
      client: 'Alonzo Cox',
      project_code: 'GPP004',
      project_name: 'GPP SYSTEM',
      sum_of_amount: '2000.000',
    },
  ]);

  const wideTableData = ref<IWideTableData[]>(
    [...Array(10).keys()].map(() => ({
      name: 'John Doe',
      email: 'john@example.com',
      title: 'Software Engineer',
      title2: 'Web dev',
      status: 'Active',
      role: 'Owner',
    }))
  );

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  };
}
