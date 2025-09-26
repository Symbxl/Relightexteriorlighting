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
import { useState } from 'react';

const Page: PageType = () => {
  usePageView();
  const [showLandscapeLighting, setShowLandscapeLighting] = useState(false);
  const [showCommercialProperties, setShowCommercialProperties] = useState(false);

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

            {/* Product Categories */}
            <Box>
              <Typography variant="h3" align="center" gutterBottom>
                Our Lighting Solutions
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                align="center"
                paragraph
                sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
              >
                Choose the perfect lighting solution for your needs. From residential homes to commercial properties,
                we have the expertise and products to illuminate any space.
              </Typography>

              <Grid container spacing={4} sx={{ mb: 8 }}>
                {[
                  {
                    title: 'Jellyfish Permanent LED Lights',
                    description: 'Premium permanent outdoor lighting for residential homes with 16 million color combinations and smart app control.',
                    image: '/assets/ai-house.jpg',
                    features: ['Smart App Control', '16M Colors', '5-Year Warranty', 'Energy Efficient']
                  },
                  {
                    title: 'Landscape Lighting',
                    description: 'Professional landscape lighting solutions that enhance your home\'s architecture with clean, modern illumination.',
                    image: '/assets/landscape.png',
                    features: ['Architectural Enhancement', 'Weather Resistant', 'Professional Installation', 'Custom Design']
                  },
                  {
                    title: 'Commercial Properties',
                    description: 'Large-scale lighting solutions for commercial buildings, retail spaces, and multi-unit properties.',
                    image: '/assets/security.png',
                    features: ['Large Scale Projects', 'Commercial Grade', 'Maintenance Plans', 'Energy Savings']
                  }
                ].map((category, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card
                      sx={{
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: 200,
                          overflow: 'hidden'
                        }}
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {index === 0 && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: 12
                            }}
                          >
                            <Chip
                              label="Most Popular"
                              color="primary"
                              size="small"
                              sx={{
                                backgroundColor: 'primary.main',
                                color: 'white'
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">
                          {category.title}
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                          {category.description}
                        </Typography>
                        <Stack spacing={1}>
                          {category.features.map((feature, featureIndex) => (
                            <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <SvgIcon color="success" sx={{ fontSize: 16 }}>
                                <CheckCircleIcon />
                              </SvgIcon>
                              <Typography variant="body2" color="text.secondary">
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                        {index === 1 ? (
                          <Button
                            fullWidth
                            variant={showLandscapeLighting ? 'contained' : 'outlined'}
                            sx={{ mt: 2 }}
                            onClick={() => {
                              setShowLandscapeLighting(!showLandscapeLighting);
                              setShowCommercialProperties(false);
                            }}
                          >
                            {showLandscapeLighting ? 'Get a Quote' : 'Learn More'}
                          </Button>
                        ) : index === 2 ? (
                          <Button
                            fullWidth
                            variant={showCommercialProperties ? 'contained' : 'outlined'}
                            sx={{ mt: 2 }}
                            onClick={() => {
                              setShowCommercialProperties(!showCommercialProperties);
                              setShowLandscapeLighting(false);
                            }}
                          >
                            {showCommercialProperties ? 'Get a Quote' : 'Learn More'}
                          </Button>
                        ) : index === 0 && (showLandscapeLighting || showCommercialProperties) ? (
                          <Button
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 2 }}
                            onClick={() => {
                              setShowLandscapeLighting(false);
                              setShowCommercialProperties(false);
                            }}
                          >
                            Learn More
                          </Button>
                        ) : (
                          <Button
                            fullWidth
                            variant={index === 0 ? 'contained' : 'outlined'}
                            sx={{ mt: 2 }}
                            component={RouterLink}
                            href={paths.contact}
                          >
                            {index === 0 ? 'Get Quote' : 'Learn More'}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Hero Section - Jellyfish Permanent LED Lights */}
            {!showLandscapeLighting && !showCommercialProperties && (
              <>
            <Stack spacing={4} alignItems="center" textAlign="center">
              <Chip
                label="Featured Product"
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

            {/* Landscape Lighting */}
            {showLandscapeLighting && !showCommercialProperties && (
              <Box>
                <Typography variant="h3" align="center" gutterBottom>
                  Landscape Lighting
                </Typography>
              <Typography variant="h6" color="text.secondary" align="center" paragraph>
                Complete your outdoor lighting design with our smart landscape lighting solutions.
                Perfect for creating ambiance and highlighting your property's best features.
              </Typography>

              <Grid container spacing={4} sx={{ mt: 2 }}>
                {[
                  {
                    name: 'Cylinder',
                    description: 'Modern cylindrical fixtures for contemporary landscape designs',
                    image: '/assets/ai-house.jpg',
                    specs: {
                      'Lights in Series': '15',
                      'Distance Between Lights': '1ft to 100ft',
                      'Mounting': 'Screw in bracket or ground',
                      'Material': 'Powder-coated Steel',
                      'IP Rating': 'IP66',
                      'Color Temp': '3000K-5000K'
                    }
                  },
                  {
                    name: 'Pathway',
                    description: 'Illuminate walkways and garden paths with subtle ground-level lighting',
                    image: '/assets/accent.png',
                    specs: {
                      'Lights in Series': '15',
                      'Distance Between Lights': '1ft to 100ft',
                      'Mounting': 'Screw in bracket or ground',
                      'Material': 'Cast Aluminum',
                      'IP Rating': 'IP65',
                      'Color Temp': '3000K-6500K'
                    }
                  },
                  {
                    name: 'Spotlight',
                    description: 'Accent lighting for trees, architectural features, and focal points',
                    image: '/assets/security.png',
                    specs: {
                      'Lights in Series': '15',
                      'Distance Between Lights': '1ft to 100ft',
                      'Mounting': 'Screw in bracket or ground',
                      'Material': 'Marine-grade Aluminum',
                      'IP Rating': 'IP67',
                      'Color Temp': '2700K-6500K'
                    }
                  },
                  {
                    name: 'Patio',
                    description: 'Overhead and perimeter lighting for outdoor living spaces',
                    image: '/assets/christmas.jpg',
                    specs: {
                      'Lights in Series': '15',
                      'Distance Between Lights': '1ft to 100ft',
                      'Mounting': 'Screw in bracket or ground',
                      'Material': 'Weather-resistant Polymer',
                      'IP Rating': 'IP68',
                      'Color Temp': '2700K-6500K'
                    }
                  }
                ].map((light, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <Box
                        sx={{
                          position: 'relative',
                          height: 160,
                          overflow: 'hidden'
                        }}
                      >
                        <img
                          src={light.image}
                          alt={light.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                            color: 'white',
                            p: 2
                          }}
                        >
                          <Typography variant="h5" fontWeight="bold">
                            {light.name}
                          </Typography>
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Typography color="text.secondary" paragraph>
                          {light.description}
                        </Typography>

                        <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 1 }}>
                          Technical Specifications
                        </Typography>

                        <Grid container spacing={2}>
                          {Object.entries(light.specs).map(([key, value], specIndex) => (
                            <Grid item xs={6} key={specIndex}>
                              <Box>
                                <Typography variant="caption" color="text.secondary" display="block">
                                  {key}
                                </Typography>
                                <Typography variant="body2" fontWeight={500}>
                                  {value}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>

                        <Button
                          fullWidth
                          variant="outlined"
                          sx={{ mt: 3 }}
                          component={RouterLink}
                          href={paths.contact}
                        >
                          Request Quote
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Landscape Lighting Advantages */}
              <Box sx={{ mt: 6 }}>
                <Typography variant="h4" align="center" gutterBottom>
                  Why Choose Our Landscape Lighting?
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', textAlign: 'center' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Avatar
                          sx={{
                            backgroundColor: 'success.main',
                            mb: 2,
                            mx: 'auto',
                            width: 56,
                            height: 56
                          }}
                        >
                          <SvgIcon sx={{ fontSize: 28 }}>
                            <LightbulbIcon />
                          </SvgIcon>
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                          Energy Efficient
                        </Typography>
                        <Typography color="text.secondary">
                          LED technology uses 90% less energy than traditional landscape lighting while providing superior illumination.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', textAlign: 'center' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Avatar
                          sx={{
                            backgroundColor: 'warning.main',
                            mb: 2,
                            mx: 'auto',
                            width: 56,
                            height: 56
                          }}
                        >
                          <SvgIcon sx={{ fontSize: 28 }}>
                            <ShieldIcon />
                          </SvgIcon>
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                          Weather Resistant
                        </Typography>
                        <Typography color="text.secondary">
                          All fixtures are rated IP65+ for complete weather protection and designed to withstand harsh outdoor conditions.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ height: '100%', textAlign: 'center' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Avatar
                          sx={{
                            backgroundColor: 'info.main',
                            mb: 2,
                            mx: 'auto',
                            width: 56,
                            height: 56
                          }}
                        >
                          <SvgIcon sx={{ fontSize: 28 }}>
                            <WifiIcon />
                          </SvgIcon>
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                          Smart Control
                        </Typography>
                        <Typography color="text.secondary">
                          Control all your landscape lighting from your smartphone with scheduling, dimming, and color changing capabilities.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>

              {/* Installation Process */}
              <Card sx={{ mt: 4 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Professional Installation Process
                  </Typography>
                  <Grid container spacing={4} sx={{ mt: 2 }}>
                    {[
                      { step: '1', title: 'Design Consultation', description: 'Our lighting designers visit your property to create a custom lighting plan.' },
                      { step: '2', title: 'Product Selection', description: 'Choose from our premium fixture collection based on your design and budget.' },
                      { step: '3', title: 'Professional Install', description: 'Certified technicians install your system with minimal landscape disruption.' },
                      { step: '4', title: 'Smart Setup', description: 'We configure your app and train you on all the smart features and controls.' }
                    ].map((process, index) => (
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Avatar
                            sx={{
                              backgroundColor: 'primary.main',
                              mb: 2,
                              mx: 'auto',
                              width: 48,
                              height: 48,
                              fontSize: '1.5rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {process.step}
                          </Avatar>
                          <Typography variant="h6" gutterBottom>
                            {process.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {process.description}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
              </Box>
            )}

            {/* Commercial Properties Section */}
              <Box>
                <Typography variant="h3" align="center" gutterBottom>
                  Commercial Lighting Solutions
                </Typography>
                <Typography variant="h6" color="text.secondary" align="center" paragraph>
                  Professional lighting solutions for commercial buildings, retail spaces, and multi-unit properties.
                  Our commercial-grade systems are designed for durability, efficiency, and large-scale installations.
                </Typography>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                  {[
                    {
                      name: 'Office Buildings',
                      description: 'Energy-efficient LED solutions for corporate campuses and office complexes',
                      image: '/assets/security.png',
                      specs: {
                        'Coverage': 'Up to 500,000 sq ft',
                        'Energy Savings': '70% reduction',
                        'Maintenance': '10-year warranty',
                        'Installation': 'Licensed commercial crews',
                        'Controls': 'Smart building integration',
                        'Compliance': 'Commercial building codes'
                      }
                    },
                    {
                      name: 'Retail Spaces',
                      description: 'Attract customers with dynamic lighting that enhances your storefront',
                      image: '/assets/accent.png',
                      specs: {
                        'Brightness': 'Up to 2000 lumens/ft',
                        'Colors': '16 million+ combinations',
                        'Scheduling': 'Business hours automation',
                        'Material': 'Commercial-grade aluminum',
                        'Weather Rating': 'IP68 certified',
                        'Support': '24/7 technical support'
                      }
                    },
                    {
                      name: 'Multi-Unit Properties',
                      description: 'Cost-effective lighting solutions for apartments and condominiums',
                      image: '/assets/ai-house.jpg',
                      specs: {
                        'Scale': 'Multi-building projects',
                        'Cost': 'Bulk pricing available',
                        'Management': 'Centralized control system',
                        'Maintenance': 'Property manager training',
                        'Financing': 'Commercial lease options',
                        'Timeline': '30-90 day installation'
                      }
                    },
                    {
                      name: 'Hotels & Hospitality',
                      description: 'Create memorable experiences with customizable architectural lighting',
                      image: '/assets/christmas.jpg',
                      specs: {
                        'Ambiance': 'Custom scene programming',
                        'Events': 'Holiday and special occasions',
                        'Integration': 'Hotel management systems',
                        'Guest Control': 'Mobile app access',
                        'Durability': 'Heavy-duty construction',
                        'Service': 'Priority maintenance plans'
                      }
                    }
                  ].map((property, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ height: '100%' }}>
                        <Box
                          sx={{
                            position: 'relative',
                            height: 160,
                            overflow: 'hidden'
                          }}
                        >
                          <img
                            src={property.image}
                            alt={property.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                              color: 'white',
                              p: 2
                            }}
                          >
                            <Typography variant="h5" fontWeight="bold">
                              {property.name}
                            </Typography>
                          </Box>
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                          <Typography color="text.secondary" paragraph>
                            {property.description}
                          </Typography>

                          <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 1 }}>
                            Service Details
                          </Typography>

                          <Grid container spacing={2}>
                            {Object.entries(property.specs).map(([key, value], specIndex) => (
                              <Grid item xs={6} key={specIndex}>
                                <Box>
                                  <Typography variant="caption" color="text.secondary" display="block">
                                    {key}
                                  </Typography>
                                  <Typography variant="body2" fontWeight={500}>
                                    {value}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>

                          <Button
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 3 }}
                            component={RouterLink}
                            href={paths.contact}
                          >
                            Request Commercial Quote
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                {/* Commercial Benefits */}
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Commercial Lighting Benefits
                  </Typography>
                  <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom color="primary.main">
                            🏢 Increased Property Value
                          </Typography>
                          <Typography color="text.secondary">
                            Professional lighting systems can increase commercial property values by 15-20% while attracting premium tenants and customers.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom color="primary.main">
                            ⚡ Massive Energy Savings
                          </Typography>
                          <Typography color="text.secondary">
                            LED commercial lighting reduces energy consumption by 60-80%, resulting in significant monthly utility bill reductions.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom color="primary.main">
                            🔧 Reduced Maintenance
                          </Typography>
                          <Typography color="text.secondary">
                            Our commercial systems require minimal maintenance with 10+ year lifespans and comprehensive warranty coverage.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="h6" gutterBottom color="primary.main">
                            🎯 Enhanced Security
                          </Typography>
                          <Typography color="text.secondary">
                            Well-lit commercial properties deter crime and create safer environments for employees, customers, and visitors.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>

                {/* Commercial Process */}
                <Card sx={{ mt: 4 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                      Commercial Project Process
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      We handle everything from initial assessment to ongoing maintenance for your commercial lighting project.
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 2 }}>
                      {[
                        {
                          phase: 'Assessment',
                          duration: '1-2 weeks',
                          description: 'Site survey, energy audit, and lighting design proposal with ROI analysis.'
                        },
                        {
                          phase: 'Planning',
                          duration: '2-3 weeks',
                          description: 'Permit acquisition, electrical planning, and project timeline coordination.'
                        },
                        {
                          phase: 'Installation',
                          duration: '2-8 weeks',
                          description: 'Professional installation by licensed commercial electricians with minimal business disruption.'
                        },
                        {
                          phase: 'Support',
                          duration: 'Ongoing',
                          description: 'Training, warranty support, and optional maintenance plans for long-term peace of mind.'
                        }
                      ].map((phase, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Box>
                            <Typography variant="h6" color="primary.main" gutterBottom>
                              {phase.phase}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                              Timeline: {phase.duration}
                            </Typography>
                            <Typography variant="body2">
                              {phase.description}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Box>

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
              </>
            )}

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