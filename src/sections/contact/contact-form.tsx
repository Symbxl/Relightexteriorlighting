import type { FC, FormEvent } from 'react';
import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const ContactForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);

      await fetch('https://formspree.io/f/xpwjnerv', { // Updated to your Formspree endpoint
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      setSubmitted(true);
    },
    []
  );

  if (submitted) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 3 }}>
        Thank you for contacting us!
      </Typography>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Full Name
            </FormLabel>
            <OutlinedInput
              name="name"
              required
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Full Address
            </FormLabel>
            <OutlinedInput
              name="address"
              required
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Email
            </FormLabel>
            <OutlinedInput
              name="email"
              type="email"
              required
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Phone Number
            </FormLabel>
            <OutlinedInput
              name="phone"
              required
              type="tel"
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
        </Grid>
        {/* Support Inquiry Input */}
        <Grid xs={12}>
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: 'text.primary',
                mb: 1
              }}
            >
              Leave a message for the team
            </FormLabel>
            <OutlinedInput
              name="supportInquiry"
              placeholder="eg. Requesting a quote for new lighting installation"
              multiline
              minRows={3}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <Button
          fullWidth
          size="large"
          variant="contained"
          type="submit"
        >
          Let&apos;s Talk
        </Button>
      </Box>
    </form>
  );
};
