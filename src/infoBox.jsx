// InfoBox.jsx
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(255, 255, 255, 0.8)",
  color: "black",
  overflow: "hidden",
  position: "relative",
  border: "2px solid rgba(0, 0, 0, 0.1)",
  "&::before": {
    content: '""',      
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.02)",
    backdropFilter: "blur(10px)",
    zIndex: 0,
  },
}));

const ContentBox = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
  padding: "24px",
}));

const WeatherItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  margin: "8px 0",
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
}));

export default function InfoBox({ info }) {
  const getWeatherIcon = (temp) => {
    if (temp > 30) return "☀️";
    if (temp > 20) return "⛅";
    if (temp > 10) return "🌤️";
    return "❄️";
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        maxWidth: "600px",
        margin: "0 auto",
        width: "100%",
        display: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          mb: 4,
          mt: 2,
          textAlign: "center",
          letterSpacing: "1px"
        }}
      >
        {/* Weather App by Kaushal */}
      </Typography>
      <StyledCard>
        <ContentBox>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 1,
                fontWeight: "bold",
              }}
            >
              {getWeatherIcon(info.temp)}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontWeight: "bold",
                mb: 1,
              }}
            >
              {info.city}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem" },
                fontWeight: "300",
              }}
            >
              {info.temp}°C
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <WeatherItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <span>🌡️</span>
                  <Typography variant="body2">Min Temp</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {info.temp_min}°C
                </Typography>
              </WeatherItem>
            </Grid>

            <Grid item xs={12} sm={6}>
              <WeatherItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <span>🌡️</span>
                  <Typography variant="body2">Max Temp</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {info.temp_max}°C
                </Typography>
              </WeatherItem>
            </Grid>

            <Grid item xs={12} sm={6}>
              <WeatherItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <span>💧</span>
                  <Typography variant="body2">Humidity</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {info.humidity}%
                </Typography>
              </WeatherItem>
            </Grid>

            <Grid item xs={12} sm={6}>
              <WeatherItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <span>🌪️</span>
                  <Typography variant="body2">Wind Speed</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {info.wind_speed} m/s
                </Typography>
              </WeatherItem>
            </Grid>

            <Grid item xs={12}>
              <WeatherItem>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <span>📊</span>
                  <Typography variant="body2">Pressure</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {info.pressure} hPa
                </Typography>
              </WeatherItem>
            </Grid>
          </Grid>
        </ContentBox>
      </StyledCard>
    </Box>
  );
}
