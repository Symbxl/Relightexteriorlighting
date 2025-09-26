import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import Shield03Icon from '@untitled-ui/icons-react/build/esm/Shield03';
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import type { Page as PageType } from 'src/types/page';

const Page: PageType = () => {
  usePageView();

  const handleDownloadPDF = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/assets/warranty-document.pdf';
    link.download = 'ReLight-5Year-Warranty.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const warrantyFeatures = [
    'Full product replacement for manufacturing defects',
    'Coverage for all LED components and housing materials',
    'Professional installation support included',
    'Remote troubleshooting and technical support',
    'Weather damage protection guarantee',
    'Color accuracy and brightness consistency warranty',
    'App functionality and software updates covered',
    'Transfer warranty to new homeowner (conditions apply)'
  ];

  return (
    <>
      <Seo title="5-Year Warranty | ReLight Exterior Lighting" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
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

            {/* Header Section */}
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Avatar
                sx={{
                  backgroundColor: 'success.main',
                  color: 'success.contrastText',
                  height: 80,
                  width: 80
                }}
                variant="rounded"
              >
                <SvgIcon sx={{ fontSize: 40 }}>
                  <Shield03Icon />
                </SvgIcon>
              </Avatar>

              <Typography variant="h1">
                5-Year Comprehensive Warranty
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 600 }}
              >
                Your investment in ReLight permanent outdoor lighting is protected by our industry-leading 5-year comprehensive warranty. We stand behind our products with complete confidence.
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={
                  <SvgIcon>
                    <Download01Icon />
                  </SvgIcon>
                }
                onClick={handleDownloadPDF}
                sx={{ mt: 2 }}
              >
                Download Warranty Certificate (PDF)
              </Button>
            </Stack>

            {/* Warranty Details Card */}
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  What's Covered
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our 5-year warranty covers all aspects of your ReLight system, ensuring peace of mind and protection for your investment.
                </Typography>

                <List>
                  {warrantyFeatures.map((feature, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          variant: 'body1'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Coverage Details */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              <Card sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Warranty Period
                  </Typography>
                  <Typography variant="h3" color="primary.main" gutterBottom>
                    5 Years
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From the date of professional installation by our certified team.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Response Time
                  </Typography>
                  <Typography variant="h3" color="primary.main" gutterBottom>
                    24 Hours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Guaranteed response time for warranty claims and technical support.
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Coverage
                  </Typography>
                  <Typography variant="h3" color="primary.main" gutterBottom>
                    100%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Complete coverage including parts, labor, and reinstallation.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>

            {/* Contact Information */}
            <Card sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Need Warranty Support?
                </Typography>
                <Typography variant="body1" paragraph>
                  Contact our warranty support team for claims, questions, or technical assistance.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                  sx={{ mt: 3 }}
                >
                  <Button
                    variant="outlined"
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
                  <Button
                    variant="outlined"
                    component={RouterLink}
                    href={paths.contact}
                    sx={{
                      color: 'primary.contrastText',
                      borderColor: 'primary.contrastText',
                      '&:hover': {
                        backgroundColor: 'primary.contrastText',
                        color: 'primary.main'
                      }
                    }}
                  >
                    Submit Warranty Claim
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