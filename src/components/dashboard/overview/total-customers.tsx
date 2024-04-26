import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { VideoCameraSlash } from '@phosphor-icons/react/dist/ssr';

export interface TotalCustomersProps {
  diff?: number;
  trend: 'up' | 'down';
  sx?: SxProps;
  value: string;
}

export function TotalCustomers({ sx }: TotalCustomersProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                выезд
              </Typography>
              <VideoCameraSlash size={100} />
            </Stack>
            <Typography color="text.secondary" variant="overline" fontSize={32}>
              всего тс - 200
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
