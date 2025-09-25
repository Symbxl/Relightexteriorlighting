import type { FC } from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';

interface Feature {
  id: string;
  title: string;
  description: string;
  imageDark: string;
  imageLight: string;
}

const features: Feature[] = [
  {
    id: 'Holiday Lighting',
    title: 'Holiday Lighting',
    description: 'Permanent outdoor Christmas lights not only provide enduring festive charm but offer a covenient and time-saving lighting solution.',
    imageDark: 'assets/christmas.jpg',
    imageLight: 'assets/christmas.jpg'
  },
  {
    id: 'Accent Lighting',
    title: 'Accent Lighting',
    description: 'Lighting makes it easy to highlight specific features on your home like peaks or columns, or simply eliminate nightime darkness',
    imageDark: 'assets/accent.png',
    imageLight: 'assets/accent.png'
  },
  {
    id: 'Security Lighting',
    title: 'Security Lighting',
    description: 'Lighting makes it easier to spot suspicious activity or deter intruders on your property.',
    imageDark: 'assets/security.png',
    imageLight: 'assets/security.png'
  },
  {
    id: 'GameDay Lighting',
    title: 'GameDay Lighting',
    description: "Match your lights to your favorite teams' colors to show your team spirit. Make a custom schedule to sync your lights up to gameday. ",
    imageDark: 'assets/seahawks.png',
    imageLight: 'assets/seahawks.png'
  },
];

export const HomeFeatures: FC = () => {
  const theme = useTheme();
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const feature = features[activeFeature];
  const image = theme.palette.mode === 'dark' ? feature?.imageDark : feature?.imageLight;
  const handleOne = () => setActiveFeature(0)
  const handleTwo = () => setActiveFeature(1)
  const handleThree = () => setActiveFeature(2)
  const handleFour = () => setActiveFeature(3)

  return (
    <Box
      sx={{
        backgroundColor: 'inherit',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        color: 'inherit',
        py: '120px'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          sx={{ mb: 8 }}
        >
          <Typography
            align="center"
            color="inherit"
            variant="h3"
          >
            Illuminate your home for every occasion!
          </Typography>
          <Typography
            align="center"
            color="inherit"
            variant="subtitle2"
          >
            The all-in-one outdoor lighting solution, perfect for Companies, Homeowners & HOAs
          </Typography>
        </Stack>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Box
              sx={{
                '& img': {
                  width: '100%',
                  borderRadius: 2.5,
                }
              }}
            >
              <img src={image} />
        
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              {features.map((feature, index) => {
                const isActive = activeFeature === index;

                return (
                  <Box
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    sx={{
                      borderRadius: 2.5,
                      color: 'inherit',
                      cursor: 'pointer',
                      p: 3,
                      transition: (theme) => theme.transitions.create(
                        ['background-color, box-shadow', 'color'],
                        {
                          easing: theme.transitions.easing.easeOut,
                          duration: theme.transitions.duration.enteringScreen
                        }
                      ),
                      ...(isActive && {
                        backgroundColor: 'primary.alpha12',
                        boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                        color: 'inherit'
                      }),
                      '&:hover': {
                        ...(!isActive && {
                          backgroundColor: 'primary.alpha4',
                          boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                        })
                      }
                    }}
                  >
                    <Typography
                      color="inherit"
                      sx={{ mb: 1 }}
                      variant="h6"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      color="inherit"
                      variant="body2"
                    >
                      {feature.description}
                    </Typography>
                    {feature.id === 'More' && (
                      <Box sx={{ mt: 3 }}>
                        <Button
                          color="success"
                          component="a"
                          endIcon={(
                            <SvgIcon fontSize="small">
                              <LinkExternal01Icon />
                            </SvgIcon>
                          )}
                          href="https://www.figma.com/file/xrx6uDljzsWuDZiuz3ITCp/Devias-Kit-Pro-UI-6.0-Master"
                          size="small"
                          target="_blank"
                          variant="contained"
                        >
                          view more use cases
                        </Button>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
