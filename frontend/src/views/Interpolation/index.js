import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getInterpolation } from "../../functions";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  card: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    marginTop: theme.spacing(10),
  },
  grid: {
    marginTop: theme.spacing(5),
  },
  typho: {
    marginTop: theme.spacing(5),
  },
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [x, setx] = useState(5);
  const [xi1, setxi1] = useState(0);
  const [xi2, setxi2] = useState(8);
  const [xi3, setxi3] = useState(14);
  const [xi4, setxi4] = useState(20);
  const [xi5, setxi5] = useState(23);
  const [xi6, setxi6] = useState(30);
  const [yi1, setyi1] = useState(0);
  const [yi2, setyi2] = useState(50);
  const [yi3, setyi3] = useState(96);
  const [yi4, setyi4] = useState(110);
  const [yi5, setyi5] = useState(100);
  const [yi6, setyi6] = useState(86);

  const [result, setresult] = useState("");

  const back = () => {
    navigate("/pj");
  };

  const generate = () => {
    const data = {
      x: x,
      xi: [xi1, xi2, xi3, xi4, xi5, xi6],
      yi: [yi1, yi2, yi3, yi4, yi5, yi6],
    };
    getInterpolation(data).then((res) => {
      setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`);
    });
  };
  return (
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="บทที่ 3"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="outlined-basic"
                label="t"

                onChange={(e) => setx(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x1"
                onChange={(e) => setxi1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x2"
                onChange={(e) => setxi2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x3"
                onChange={(e) => setxi3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x4"
                onChange={(e) => setxi4(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x5"
                onChange={(e) => setxi5(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x6"
                onChange={(e) => setxi6(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y1"
                onChange={(e) => setyi1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y2"
                onChange={(e) => setyi2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y3"
                onChange={(e) => setyi3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y4"
                onChange={(e) => setyi4(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y5"
                onChange={(e) => setyi5(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y6"
                onChange={(e) => setyi6(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
                <Button
                  onClick={generate}
                  variant="outlined"
                  color="secondary"
                >
                  คำนวณ
                </Button>
              </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id="outlined-read-only-input"
                    label="ผลลัพธ์"
                    value={result===""?"":result}
                    InputProps={{
                    readOnly: true,
                  }}
                  
                />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={5} alignItems="flex-end">
            
              <Grid item xs={12} >
                <Button
                  onClick={back}
                  variant="outlined"
                  color="secondary">
                  กลับ
                </Button>
              </Grid> 
          </Grid>
        </CardActions>
      </Card>
    </Typography>
  );
}
