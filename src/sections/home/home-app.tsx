import type { FC } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import PhoneCard from './PhoneCard';

interface AppFeature {
  title: string;
  subtitle: string;
  img: string;
}

const appFeatures: AppFeature[] = [
  {
    title: "Have Full Control Of Your Lights",
    subtitle: "Manage your lights with ease",
    img: "/assets/app2.jpg"
  },
  {
    title: "Smart App Control",
    subtitle: "Celebrate every holiday season with one press of a button",
    img: "/assets/app1.jpg"
  },
  {
    title: "Custom Zones, Transitions, Patterns, and Schedules",
    subtitle: "Create your perfect ambiance",
    img: "/assets/app3.jpg"
  }
];

export const HomeApp: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle phone
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) { // Minimum swipe distance
      if (diffX > 0) {
        // Swipe left - next
        setCurrentIndex((prev) => (prev + 1) % appFeatures.length);
      } else {
        // Swipe right - previous
        setCurrentIndex((prev) => (prev - 1 + appFeatures.length) % appFeatures.length);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const endX = e.clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) { // Minimum swipe distance
      if (diffX > 0) {
        // Swipe left - next
        setCurrentIndex((prev) => (prev + 1) % appFeatures.length);
      } else {
        // Swipe right - previous
        setCurrentIndex((prev) => (prev - 1 + appFeatures.length) % appFeatures.length);
      }
    }
  };

  return (
    <Box sx={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      pt: '120px',
    }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography
            align="center"
            color="inherit"
            variant="h3"
          >
            Download Mobile App!
          </Typography>
        </Stack>

        {/* App Description */}
        <Stack
          spacing={3}
          sx={{ mt: 4, mb: 4 }}
        >
          <Typography
            align="center"
            color="text.secondary"
            variant="h6"
            sx={{
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Experience the ultimate control over your permanent outdoor lighting with the Jellyfish Lighting mobile app.
            Transform your home's exterior with professional-grade lighting that's as easy to use as it is stunning.
          </Typography>
        </Stack>

        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 3, mb: 6 }}
        >
          <Button
            component="a"
            href="https://apps.apple.com/us/app/jellyfish-designer-cloud/id1612868160"
            target="_blank"
            variant="contained"
          >
            Apple App Store
          </Button>
          <Button
            component="a"
            href="https://play.google.com/store/apps/details?id=com.jellyfish_cloud&hl=en_US&pli=1"
            target="_blank"
            variant="contained"
          >
            Android Download
          </Button>
        </Stack>

        {/* iPhone Showcase */}
        <Box
          ref={containerRef}
          sx={{
            position: 'relative',
            height: '600px',
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setIsDragging(false)}
        >
          {appFeatures.map((feature, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + appFeatures.length) % appFeatures.length;
            const isNext = index === (currentIndex + 1) % appFeatures.length;

            let transform = 'translateX(1000px) scale(0.7)';
            let zIndex = 0;
            let opacity = 0;

            if (isActive) {
              transform = 'translateX(0) scale(1)';
              zIndex = 3;
              opacity = 1;
            } else if (isPrev) {
              transform = 'translateX(-300px) scale(0.8)';
              zIndex = 2;
              opacity = 0.7;
            } else if (isNext) {
              transform = 'translateX(300px) scale(0.8)';
              zIndex = 1;
              opacity = 0.7;
            }

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  transform,
                  zIndex,
                  opacity,
                  transition: 'all 0.5s ease-in-out',
                  transformOrigin: 'center',
                }}
              >
                <Box
                  sx={{
                    transform: 'scale(0.7)',
                    transformOrigin: 'center',
                  }}
                >
                  <PhoneCard img={feature.img} />
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Navigation Dots */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 4, mb: 6 }}
        >
          {appFeatures.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: index === currentIndex ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: index === currentIndex ? 'primary.dark' : 'grey.600',
                },
              }}
            />
          ))}
        </Stack>
         {/* Feature Title and Subtitle */}
        <Stack
          spacing={1}
          sx={{ mt: 6, mb: 4 }}
        >
          <Typography
            align="center"
            variant="h4"
            sx={{ fontWeight: 'bold' }}
          >
            {appFeatures[currentIndex].title}
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            variant="h6"
          >
            {appFeatures[currentIndex].subtitle}
          </Typography>
        </Stack>

        <Box
          sx={{
            maxWidth: '900px',
            margin: '0 auto',
            mb: 6
          }}
        >
          <Stack
            spacing={2}
            alignItems="center"
          >
            {[
              "🎨 Create unlimited custom lighting scenes with millions of color combinations",
              "📅 Schedule automatic lighting changes for holidays, seasons, and special events",
              "🏠 Control multiple zones independently for precise lighting design",
              "🌈 Real-time color preview and instant synchronization across all lights",
              "⚡ Energy-efficient LED technology with smart brightness controls",
              "📱 Intuitive mobile interface with one-touch preset activation",
              "🔧 Professional installation support and lifetime warranty included",
              "🌐 Cloud sync keeps your settings accessible from anywhere"
            ].map((feature, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 1,
                  justifyContent: 'center'
                }}
              >
                {feature}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
