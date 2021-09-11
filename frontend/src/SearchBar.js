import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "fit-content",
    backgroundColor: "white",
    borderRadius: 50,
    padding: "0 15px 5px 15px",
    "& svg": {
      margin: theme.spacing(1.5),
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
  textField: {
    padding: "20px",
  },
  dateField: {
    padding: "8px",
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleLocationChange = (event) => {
    console.log(event.target.value);
    
    setLocation(event.target.value);
  };

  const handleCheckInChange = (selectedDate) => {
    console.log(selectedDate);
    
    setDate({ ...date, checkIn: selectedDate });
  };

  const handleCheckOutChange = (selectedDate) => {
    console.log(selectedDate);
    
    setDate({ ...date, checkOut: selectedDate });
  };

  return (
    <form noValidate autoComplete='off'>
      <Grid container alignItems='center' className={classes.form}>
        <FormControl className={classes.textField}>
          <TextField
            id='location-text-field'
            value={location}
            onChange={handleLocationChange}
            label='Location'
            placeholder='Where are you going?'
          />
        </FormControl>
        <Divider orientation='vertical' flexItem />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <FormControl className={classes.dateField}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='check-in-date-picker'
              label='Check in'
              value={date.checkIn}
              onChange={handleCheckInChange}
              KeyboardButtonProps={{
                "aria-label": "change check-in date",
              }}
            />
          </FormControl>
          <Divider orientation='vertical' flexItem />
          <FormControl className={classes.dateField}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='check-out-date-picker'
              label='Check out'
              value={date.checkOut}
              onChange={handleCheckOutChange}
              KeyboardButtonProps={{
                "aria-label": "change checkout date",
              }}
            />
          </FormControl>
        </MuiPickersUtilsProvider>
        <FormControl>
          <IconButton type='submit'>
            <SearchIcon />
          </IconButton>
        </FormControl>
      </Grid>
    </form>
  );
}
