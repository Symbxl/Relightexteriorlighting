import type { FC, ReactNode } from 'react';
import ContactIcon from '@untitled-ui/icons-react/build/esm/Send01';
import PhoneIcon from '@untitled-ui/icons-react/build/esm/Phone';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import type { Theme } from '@mui/material';
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Logo } from 'src/components/logo';
import { RouterLink } from 'src/components/router-link';
import { usePathname } from 'src/hooks/use-pathname';
import { useWindowScroll } from 'src/hooks/use-window-scroll';
import { paths } from 'src/paths';
import { PagesPopover } from './pages-popover';
import { TopNavItem } from './top-nav-item';

interface Item {
  disabled?: boolean;
  external?: boolean;
  popover?: ReactNode;
  path?: string;
  title: string;
}

const items: Item[] = [
  {
    title: 'Home',
    path: paths.index
  },
  {
    title: 'Products',
    path: paths.products
  },
   {
    title: 'Installation',
    path: paths.installation
  },
  {
    title: 'Warranty',
    path: paths.warranty
  },
  {
    title: 'Contact',
    path: paths.contact
  }
];

const TOP_NAV_HEIGHT: number = 64;

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { onMobileNavOpen } = props;
  const pathname = usePathname();
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [elevate, setElevate] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(
    (): void => {
      if (window.scrollY > offset) {
        setElevate(true);
      } else {
        setElevate(false);
      }
    },
    []
  );

  const handleMobileMenuOpen = useCallback((): void => {
    setMobileMenuOpen(true);
  }, []);

  const handleMobileMenuClose = useCallback((): void => {
    setMobileMenuOpen(false);
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay
  });

  return (
    <Box
      component="header"
      sx={{
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        pt: 2,
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: 'transparent',
          borderRadius: 2.5,
          boxShadow: 'none',
          transition: (theme) => theme.transitions.create('box-shadow, background-color', {
            easing: theme.transitions.easing.easeInOut,
            duration: 200
          }),
          ...(elevate && {
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.90),
            boxShadow: 8
          })
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ height: TOP_NAV_HEIGHT }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Stack
              alignItems="center"
              spacing={0.5}
            >
              <Stack
                alignItems="center"
                component={RouterLink}
                direction="row"
                display="inline-flex"
                href={paths.index}
                spacing={1}
                sx={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    height: 24,
                    width: 24
                  }}
                >
                 
                </Box>
                {mdUp && (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.10}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 34,
                        width: 'auto',
                        mr: 1
                      }}
                    >
                      <img src="assets/logo-main.png" alt="Logo" style={{ height: 34, width: 'auto', objectFit: 'contain' }}/>
                    </Box>
                    <Box
                      sx={{
                        color: 'text.primary',
                        fontFamily: '\'Plus Jakarta Sans\', sans-serif',
                        fontSize: 17.2,
                        fontWeight: 800,
                        letterSpacing: '0.3px',
                        lineHeight: 2.5,
                        '& span': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      Relight Exterior Lighting <span>Residential, Commercial & HOA</span>
                    </Box>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            <Button
              component={RouterLink}
              href={paths.contact}
              size={mdUp ? 'medium' : 'small'}
              variant="outlined"
              startIcon={
                <SvgIcon fontSize="inherit" sx={{ fontSize: 15 }}>
                  <ContactIcon />
                </SvgIcon>
              }
            >
              Contact
            </Button>
            <Button
              component={RouterLink}
              href="tel:+14254651290"
              size={mdUp ? 'medium' : 'small'}
              variant="contained"
              startIcon={
                <SvgIcon fontSize="inherit" sx={{ fontSize: 15 }}>
                  <PhoneIcon />
                </SvgIcon>
              }
            >
              425-465-1290
            </Button>
            <IconButton
              onClick={handleMobileMenuOpen}
              sx={{
                color: 'text.primary'
              }}
            >
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'background.paper'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: 1,
            borderColor: 'divider'
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Menu
          </Typography>
          <IconButton onClick={handleMobileMenuClose}>
            <SvgIcon>
              <XIcon />
            </SvgIcon>
          </IconButton>
        </Box>

        <List sx={{ pt: 0 }}>
          {items.map((item, index) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={RouterLink}
                href={item.path || '#'}
                onClick={handleMobileMenuClose}
                sx={{
                  py: 1.5,
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'action.hover'
                  },
                  ...(pathname === item.path && {
                    backgroundColor: 'primary.alpha8',
                    color: 'primary.main',
                    fontWeight: 600
                  })
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: pathname === item.path ? 600 : 400
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func
};
