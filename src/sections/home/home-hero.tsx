import type { FC } from 'react';
import { useState, useEffect } from 'react';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import LayoutBottomIcon from '@untitled-ui/icons-react/build/esm/LayoutBottom';
import { Box, Button, Container, Rating, Stack, SvgIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
import { HomeCodeSamples } from './home-code-samples';
import { PiShieldCheckBold, PiShieldCheckDuotone } from 'react-icons/pi';
import { Shield, ShieldMoon, ShieldOutlined } from '@mui/icons-material';

export const HomeHero: FC = () => {
  const words = ["Holiday", "Gameday", "Accent", "Security"];
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1200);
    const interval = setInterval(() => {
      setVisible(true);
      setWordIndex((prev) => (prev + 1) % words.length);
      setTimeout(() => setVisible(false), 1200);
    }, 1600);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px'
      }}
    >
      <Container maxWidth="xl">
        <Box maxWidth="sm">
          <Box
            component={RouterLink}
            href={paths.warranty}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'primary.light',
              color: 'black',
              borderRadius: 2,
              px: 2,
              py: 1,
              mb: 2,
              fontWeight: 600,
              fontSize: 15,
              boxShadow: 2,
              width: 'fit-content',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'translateY(-1px)',
                boxShadow: 4
              }
            }}
          >
            <SvgIcon sx={{ mr: 1, fontSize: 20 }}>
              <PiShieldCheckBold />
            </SvgIcon>
            Free 5 year warranty!
          </Box>
          <Typography
            variant="h1"
            sx={{ mb: 2, fontSize: "60px !important" }}
          >
            Permenant Outdoor {' '}
            <span
              style={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                transition: 'opacity 0.5s',
                opacity: visible ? 1 : 0,
                marginRight: 8,
                display: 'inline-block',
                minWidth: 90
              }}
            >
              {words[wordIndex]}
            </span>
            &nbsp;
            <Typography
              component="span"
              color="primary.main"
              variant="inherit"
            >
             Lighting
            </Typography>
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500
            }}
          >
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 17,
              fontWeight: 500
            }}
          >
            Making homes brighter all across the state of Washington!
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={1}
            sx={{ my: 3 }}
          >
            <Rating
              readOnly
              value={4.7}
              precision={0.1}
              max={5}
            />
            <Typography
              color="text.primary"
              variant="caption"
              sx={{ fontWeight: 700 }}
            >
              4.7/5
            </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              based on (100+ reviews)
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Button
              component={RouterLink}
              href={paths.contact}
              startIcon={(
                <SvgIcon fontSize="small">
                  <EyeIcon />
                </SvgIcon>
              )}
              sx={(theme) => theme.palette.mode === 'dark'
                ? {
                  backgroundColor: 'neutral.50',
                  color: 'neutral.900',
                  '&:hover': {
                    backgroundColor: 'neutral.200'
                  }
                }
                : {
                  backgroundColor: 'neutral.900',
                  color: 'neutral.50',
                  '&:hover': {
                    backgroundColor: 'neutral.700'
                  }
                }
              }
              variant="contained"
            >
              Get free quote today!
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            pt: '120px',
            position: 'relative',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: { xs: '100%', sm: '100%', md: '1320px' },
              maxWidth: '100%',
              fontSize: 0,
              mt: -2, // hack to cut the bottom box shadow
              mx: 'auto',
              pt: 2,
              px: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%'
              }
            }}
          >
            <video
              src="https://framerusercontent.com/assets/ft2iKY1K0qOfCpm8003q4eoJJc.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', maxWidth: '1320px', height: 'auto', borderRadius: "12px" }}
            />
          </Box>
        </Box>
      </Container >
    </Box >
  );
};