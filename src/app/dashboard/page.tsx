import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={1}>
      <Grid lg={6} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
      <Grid lg={6} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={6} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid>

      <Grid lg={6} md={6} xs={12}>
        <Traffic chartSeries={[63, 15]} labels={['Салон', 'Полная']} sx={{ height: '100%' }} />
      </Grid>

      <Grid lg={6} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: '1',
              nomer: '50 A 550 AA',
              createdAt: '15 раз за мес',
            },
            {
              id: '2',
              nomer: '50 A 550 AA',
              createdAt: '15 раз за мес',
            },
            {
              id: '3',
              nomer: '50 A 550 AA',
              createdAt: '15 раз за мес',
            },
            {
              id: '4',
              nomer: '50 A 550 AA',
              createdAt: '15 раз за мес',
            },
            {
              id: '5',
              nomer: '50 A 550 AA',
              createdAt: '15 раз за мес',
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
