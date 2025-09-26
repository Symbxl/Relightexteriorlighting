import type { FC } from 'react';
import { Box, Button, Container, Stack, Typography, SvgIcon } from '@mui/material';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import ToolIcon from '@untitled-ui/icons-react/build/esm/Tool02';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
export const HomeCta: FC = () => (
  <Box
    sx={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      color: 'inherit',
      py: '120px'
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography
          align="center"
          color="inherit"
          variant="h3"
        >
          Professional Installation
        </Typography>
        <Typography
          align="center"
          color="inherit"
          variant="subtitle2"
        >
          Every home is serviced by the trained professionals to make sure you're lighting is perfect.
        </Typography>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4, mb: 4 }}
      >
        <Button
          component={RouterLink}
          href={paths.installation}
          variant="contained"
          size="large"
          startIcon={
            <SvgIcon>
              <ToolIcon />
            </SvgIcon>
          }
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          Learn About Installation
        </Button>
      </Stack>

      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Box
          sx={{
            '& img': {
              width: '100%',
              borderRadius: 2.5,
            }
          }}
        >
          <img src="https://framerusercontent.com/images/6C149iYRFXIpVognqz1kfkDI5E.webp?scale-down-to=1024" />
        </Box>
      </Stack>
    </Container>
  </Box>
);
