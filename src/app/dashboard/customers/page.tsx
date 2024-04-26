  import * as React from 'react';
  import type { Metadata } from 'next';
  import Button from '@mui/material/Button';
  import Stack from '@mui/material/Stack';
  import Typography from '@mui/material/Typography';
  import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
  import dayjs from 'dayjs';

  import { config } from '@/config';
  import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
  import { CustomersTable } from '@/components/dashboard/customer/customers-table';
  import type { Customer } from '@/components/dashboard/customer/customers-table';

  export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

  const customers = [
    {
      id: 'USR-010',
      nomer: '50 A 555 AA',
      come: '09:00',
      went: '12:00',
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-010',
      nomer: '50 A 555 AA',
      come: '09:00',
      went: '12:00',
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-010',
      nomer: '50 A 555 AA',
      come: '09:00',
      went: '12:00',
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-010',
      nomer: '50 A 555 AA',
      come: '09:00',
      went: '12:00',
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    },
    {
      id: 'USR-010',
      nomer: '50 A 555 AA',
      come: '09:00',
      went: '12:00',
      createdAt: dayjs().subtract(2, 'hours').toDate(),
    }
    
  ] satisfies Customer[];

  export default function Page(): React.JSX.Element {
    const page = 0;
    const  rowsPerPage = 5;
    const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={3}>
          <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
            <Typography variant="h4">Cars</Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
                Export
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <CustomersFilters />
        <CustomersTable
          count={paginatedCustomers.length}
          page={page}
          rows={paginatedCustomers}
          rowsPerPage={rowsPerPage}
        />
      </Stack>
    );
  }

  function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }
