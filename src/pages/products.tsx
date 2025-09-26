import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import CheckCircleIcon from '@untitled-ui/icons-react/build/esm/CheckCircle';
import LightbulbIcon from '@untitled-ui/icons-react/build/esm/Lightbulb02';
import WifiIcon from '@untitled-ui/icons-react/build/esm/Wifi';
import ShieldIcon from '@untitled-ui/icons-react/build/esm/Shield03';
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import type { Page as PageType } from 'src/types/page';

const Page: PageType = () => {
  usePageView();

  const keyFeatures = [
    {
      icon: <LightbulbIcon />,
      title: 'Premium LED Technology',
      description: 'Ultra-bright, energy-efficient LEDs with 16 million color combinations and perfect color accuracy.'
    },
    {
      icon: <WifiIcon />,
      title: 'Smart App Control',
      description: 'Complete control via our intuitive mobile app with scheduling, scenes, and real-time customization.'
    },
    {
      icon: <ShieldIcon />,
      title: 'Weather Resistant',
      description: 'IP67 waterproof rating withstands extreme weather conditions year-round.'
    }
  ];

  const specifications = [
    { label: 'LED Lifespan', value: '50,000+ hours' },
    { label: 'Color Options', value: '16 million colors' },
    { label: 'Brightness', value: '120 lumens per foot' },
    { label: 'Weather Rating', value: 'IP67 Waterproof' },
    { label: 'Operating Temperature', value: '-40°F to 140°F' },
    { label: 'Warranty', value: '5 Years Comprehensive' },
    { label: 'Energy Consumption', value: '7W per foot' },
    { label: 'Control Range', value: 'Unlimited (WiFi)' }
  ];

  const advantages = [
    'No more dangerous ladder climbing for holiday decorating',
    'Zero storage requirements - lights stay up year-round',
    'Significant energy savings compared to traditional bulbs',
    'Professional installation with lifetime support',
    'Increase home value with permanent architectural lighting',
    'Perfect for holidays, parties, security, and accent lighting',
    'Customizable zones for different areas of your home',
    'Schedule automatic on/off times and color changes'
  ];

  const comparisons = [
    {
      feature: 'Installation',
      jellyfish: 'One-time professional installation',
      traditional: 'Reinstall every season',
      winner: 'jellyfish'
    },
    {
      feature: 'Energy Cost',
      jellyfish: '90% less energy usage',
      traditional: 'High electricity bills',
      winner: 'jellyfish'
    },
    {
      feature: 'Lifespan',
      jellyfish: '50,000+ hours',
      traditional: '1,000 hours average',
      winner: 'jellyfish'
    },
    {
      feature: 'Weather Resistance',
      jellyfish: 'IP67 waterproof rating',
      traditional: 'Often fail in weather',
      winner: 'jellyfish'
    },
    {
      feature: 'Customization',
      jellyfish: '16 million colors + patterns',
      traditional: 'Limited color options',
      winner: 'jellyfish'
    }
  ];

  return (
    <>
      <Seo title="Jellyfish Permanent LED Lights - Premium Outdoor Lighting" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6}>
            {/* Navigation */}
            <div>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.index}
                sx={{
                  alignItems: 'center',
                  display: 'inline-flex'
                }}
                underline="hover"
              >
                <SvgIcon sx={{ mr: 1 }}>
                  <ArrowLeftIcon />
                </SvgIcon>
                <Typography variant="subtitle2">
                  Back to Home
                </Typography>
              </Link>
            </div>

            {/* Hero Section */}
            <Stack spacing={4} alignItems="center" textAlign="center">
              <Chip
                label="Premium Product"
                color="primary"
                sx={{ fontSize: '0.875rem', fontWeight: 600 }}
              />

              <Typography variant="h1">
                Jellyfish Permanent LED Lights
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800 }}
              >
                The industry's most advanced permanent outdoor lighting system.
                Transform your home with professional-grade LED technology that's built to last.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  href={paths.contact}
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  href={paths.warranty}
                >
                  View Warranty
                </Button>
              </Stack>
            </Stack>

            {/* Product Image */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3
              }}
            >
              <img
                src="/assets/ai-house.jpg"
                alt="Jellyfish Permanent LED Lights on House"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </Box>

            {/* Key Features */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Why Jellyfish Lights Are Superior
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {keyFeatures.map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ textAlign: 'center', p: 4 }}>
                        <Avatar
                          sx={{
                            backgroundColor: 'primary.main',
                            mb: 2,
                            mx: 'auto',
                            width: 60,
                            height: 60
                          }}
                        >
                          <SvgIcon sx={{ fontSize: 30 }}>
                            {feature.icon}
                          </SvgIcon>
                        </Avatar>
                        <Typography variant="h5" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Specifications */}
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Technical Specifications
                </Typography>
                <Grid container spacing={3}>
                  {specifications.map((spec, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          {spec.label}
                        </Typography>
                        <Typography variant="h6" color="primary.main">
                          {spec.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Advantages */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                The Jellyfish Advantage
              </Typography>
              <Card sx={{ mt: 4 }}>
                <CardContent sx={{ p: 4 }}>
                  <List>
                    {advantages.map((advantage, index) => (
                      <ListItem key={index} sx={{ pl: 0 }}>
                        <ListItemIcon>
                          <SvgIcon color="success">
                            <CheckCircleIcon />
                          </SvgIcon>
                        </ListItemIcon>
                        <ListItemText
                          primary={advantage}
                          primaryTypographyProps={{
                            variant: 'body1',
                            fontWeight: 500
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>

            {/* Comparison Table */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Jellyfish vs. Traditional Lights
              </Typography>
              <Card sx={{ mt: 4 }}>
                <CardContent sx={{ p: 0 }}>
                  {comparisons.map((comparison, index) => (
                    <Box key={index}>
                      <Box sx={{ p: 3 }}>
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={12} md={3}>
                            <Typography variant="h6">
                              {comparison.feature}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box
                              sx={{
                                p: 2,
                                borderRadius: 1,
                                backgroundColor: comparison.winner === 'jellyfish' ? 'success.light' : 'grey.100'
                              }}
                            >
                              <Typography
                                variant="body1"
                                color={comparison.winner === 'jellyfish' ? 'success.dark' : 'text.primary'}
                                fontWeight={comparison.winner === 'jellyfish' ? 600 : 400}
                              >
                                {comparison.jellyfish}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box
                              sx={{
                                p: 2,
                                borderRadius: 1,
                                backgroundColor: comparison.winner !== 'jellyfish' ? 'success.light' : 'grey.100'
                              }}
                            >
                              <Typography
                                variant="body1"
                                color={comparison.winner !== 'jellyfish' ? 'success.dark' : 'text.secondary'}
                              >
                                {comparison.traditional}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      {index < comparisons.length - 1 && <Divider />}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>

            {/* Call to Action */}
            <Card sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
              <CardContent sx={{ textAlign: 'center', p: 6 }}>
                <Typography variant="h3" gutterBottom>
                  Ready to Upgrade Your Home?
                </Typography>
                <Typography variant="h6" paragraph>
                  Join thousands of satisfied customers who've made the switch to Jellyfish Permanent LED Lights.
                  Get your free quote today and transform your home's exterior lighting forever.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    href={paths.contact}
                    sx={{
                      backgroundColor: 'primary.contrastText',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'grey.100'
                      }
                    }}
                  >
                    Get Free Quote Today
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: 'primary.contrastText',
                      borderColor: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.contrastText',
                        color: 'primary.main'
                      }
                    }}
                    href="tel:+1-425-465-1290"
                  >
                    Call (425) 465-1290
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;