import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";


export default function ListingSearch() {
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleLocationChange = (event, value) => {
    setLocation(value);
  };

  const handleCheckInChange = (checkInDate) => {    
    setDate({ ...date, checkIn: checkInDate });
  };

  const handleCheckOutChange = (selectedDate) => {
    setDate({ ...date, checkOut: selectedDate });
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        bgcolor: "#fff",
        width: "fit-content",
        borderRadius: 50,
        padding: "10px 15px",
      }}
    >
      <form noValidate autoComplete='off'>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item>
            <Autocomplete
              disablePortal
              loadingText='Loading...'
              noOptionsText='Location not found'
              onChange={handleLocationChange}
              sx={{ width: 200 }}
              options={["Toronto, Ontario", "Vancouver, British Columbia"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant='standard'
                  label='Location'
                  required
                />
              )}
            />
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item>
              <DatePicker
                label='Check in'
                openTo='year'
                views={["year", "month", "day"]}
                onChange={handleCheckInChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='standard'
                  />
                )}
              />
            </Grid>
            <Grid item>
              <DatePicker
                label='Check out'
                openTo='year'
                views={["year", "month", "day"]}
                onChange={handleCheckOutChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='standard'
                  />
                )}
              />
            </Grid>
          </LocalizationProvider>
          <Grid item>
            <IconButton size='large' type='search'>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
