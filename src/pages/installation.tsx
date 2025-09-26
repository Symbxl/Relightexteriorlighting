import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import CalendarIcon from '@untitled-ui/icons-react/build/esm/Calendar';
import CheckCircleIcon from '@untitled-ui/icons-react/build/esm/CheckCircle';
import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import HomeIcon from '@untitled-ui/icons-react/build/esm/Home03';
import ToolsIcon from '@untitled-ui/icons-react/build/esm/Tool02';
import UserIcon from '@untitled-ui/icons-react/build/esm/User01';
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
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper
} from '@mui/material';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import type { Page as PageType } from 'src/types/page';

const Page: PageType = () => {
  usePageView();

  const installationSteps = [
    {
      icon: <CalendarIcon />,
      title: 'Free Consultation & Quote',
      description: 'Schedule a free on-site consultation where our experts assess your home and provide a detailed quote.',
      duration: '30 minuets',
      details: [
        'Property assessment and measurements',
        'Design consultation and track color recommendations',
        'Detailed written quote with no hidden fees',
        'Timeline and scheduling discussion'
      ]
    },
    {
      icon: <ToolsIcon />,
      title: 'Design & Planning',
      description: 'Our team creates a custom quote, and lighting design plan tailored specifically to your home\'s architecture.',
      duration: 'ready within 2-3 hours',
      details: [
        'Custom lighting layout design',
        'Electrical requirements assessment',
        'Material ordering and preparation',
        'Quote breakdown and approval'
      ]
    },
    {
      icon: <HomeIcon />,
      title: 'Professional Installation',
      description: 'Certified technicians install your Jellyfish lights with precision and care, ensuring perfect results.',
      duration: '4-8 hours',
      details: [
        'Safe installation using professional equipment',
        'Precise mounting and alignment',
        'Complete electrical connections and testing',
        'App setup and configuration'
      ]
    },
    {
      icon: <UserIcon />,
      title: 'Training & Support',
      description: 'Learn how to use your new lighting system with comprehensive training and ongoing support.',
      duration: '20 minutes',
      details: [
        'Mobile app tutorial and setup',
        'Custom scene programming',
        'Maintenance tips and best practices',
        'Warranty registration and documentation'
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: 'Certified Technicians',
      description: 'All installers are fully insured and trained in Jellyfish installation techniques.',
      icon: <CheckCircleIcon />
    },
    {
      title: 'No Damage Guarantee',
      description: 'We guarantee no damage to your property during installation or we fix it at no cost.',
      icon: <HomeIcon />
    },
    {
      title: 'Lifetime Support',
      description: 'Ongoing technical support and maintenance services for the life of your system and a 5 year warranty.',
      icon: <UserIcon />
    }
  ];

  const installationFAQs = [
    {
      question: 'How long does installation take?',
      answer: 'Most residential installations are completed in 4-8 hours, depending on the size and complexity of your home.'
    },
    {
      question: 'Do you need to access my roof?',
      answer: 'To install your Jellyfish Lighting Eave Lights, we will need access to both your roof and attic. This allows us to safely and efficciently run the wiring and mount the lights using proffesional equipment. We train everyone on the installation team to take all necessary safety precautions.'
    },
    {
      question: 'What about my existing holiday lights?',
      answer: 'We can remove and dispose of your old holiday lights as part of the installation service.'
    },
    {
      question: 'Do I need to be home during installation?',
      answer: 'Yes, we require a homeowner to be present during the installation process for access and final approval.'
    }
  ];

  const pricing = [
    {
      title: 'All Installations',
      price: '$26',
      priceUnit: 'per foot',
      description: 'Simple, transparent pricing for all homes',
      features: [
        'Professional installation included',
        'All materials and labor covered',
        'Mobile app setup and training',
        '5-year comprehensive warranty',
        'Free consultation and quote',
        'No hidden fees or surprises'
      ]
    }
  ];

  return (
    <>
      <Seo title="Professional Installation - Jellyfish Permanent LED Lights" />
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
                label="Professional Installation"
                color="primary"
                sx={{ fontSize: '0.875rem', fontWeight: 600 }}
              />

              <Typography variant="h1">
                Expert Installation Service
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 800 }}
              >
                Professional installation by certified technicians ensures your Jellyfish lights are installed safely,
                correctly, and beautifully. We handle everything from consultation to final setup.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  href={paths.contact}
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="tel:+1-425-465-1290"
                >
                  Call (425) 465-1290
                </Button>
              </Stack>
            </Stack>

            {/* Installation Process */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Our 4-Step Installation Process
              </Typography>
              <Typography variant="h6" color="text.secondary" align="center" paragraph>
                From consultation to completion, we make the process seamless and stress-free.
              </Typography>

              <Grid container spacing={4} sx={{ mt: 4 }}>
                {installationSteps.map((step, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 4 }}>
                        <Stack spacing={2}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar
                              sx={{
                                backgroundColor: 'primary.main',
                                width: 50,
                                height: 50
                              }}
                            >
                              <SvgIcon>
                                {step.icon}
                              </SvgIcon>
                            </Avatar>
                            <Box>
                              <Typography variant="h6">
                                Step {index + 1}: {step.title}
                              </Typography>
                              <Chip
                                label={step.duration}
                                size="small"
                                color="secondary"
                                sx={{ mt: 1 }}
                              />
                            </Box>
                          </Box>
                          <Typography color="text.secondary">
                            {step.description}
                          </Typography>
                          <List dense>
                            {step.details.map((detail, detailIndex) => (
                              <ListItem key={detailIndex} sx={{ pl: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <SvgIcon color="success" sx={{ fontSize: 16 }}>
                                    <CheckCircleIcon />
                                  </SvgIcon>
                                </ListItemIcon>
                                <ListItemText
                                  primary={detail}
                                  primaryTypographyProps={{ variant: 'body2' }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Why Choose Us */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Why Choose Our Installation Service?
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {whyChooseUs.map((reason, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card sx={{ textAlign: 'center', height: '100%' }}>
                      <CardContent sx={{ p: 4 }}>
                        <Avatar
                          sx={{
                            backgroundColor: 'success.main',
                            mb: 2,
                            mx: 'auto',
                            width: 60,
                            height: 60
                          }}
                        >
                          <SvgIcon sx={{ fontSize: 30 }}>
                            {reason.icon}
                          </SvgIcon>
                        </Avatar>
                        <Typography variant="h5" gutterBottom>
                          {reason.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {reason.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Pricing */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Installation Pricing
              </Typography>
              <Typography variant="h6" color="text.secondary" align="center" paragraph>
                Simple, transparent pricing with no hidden fees. All installations include materials, labor, and warranty.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                {pricing.map((tier, index) => (
                  <Card
                    key={index}
                    sx={{
                      maxWidth: 500,
                      width: '100%',
                      border: 2,
                      borderColor: 'primary.main'
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Chip
                        label="Simple Pricing"
                        color="primary"
                        sx={{ mb: 2 }}
                      />
                      <Typography variant="h4" gutterBottom>
                        {tier.title}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h2" color="primary.main" component="span">
                          {tier.price}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="span">
                          {' '}{tier.priceUnit}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary" paragraph>
                        {tier.description}
                      </Typography>
                      <List>
                        {tier.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <SvgIcon color="success" sx={{ fontSize: 16 }}>
                                <CheckCircleIcon />
                              </SvgIcon>
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            {/* FAQ */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Installation FAQ
              </Typography>
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {installationFAQs.map((faq, index) => (
                  <Grid item xs={12} key={index}>
                    <Card>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          {faq.question}
                        </Typography>
                        <Typography color="text.secondary">
                          {faq.answer}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Call to Action */}
            <Card sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
              <CardContent sx={{ textAlign: 'center', p: 6 }}>
                <Typography variant="h3" gutterBottom>
                  Ready to Get Started?
                </Typography>
                <Typography variant="h6" paragraph>
                  Schedule your free consultation today and discover how Jellyfish lights can transform your home.
                  Our expert team is standing by to help you every step of the way.
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
                    Schedule Free Consultation
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