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
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getRootFinding } from "../../functions";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  card: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
    marginTop: theme.spacing(10),
  },
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.001);
  const [result, setresult] = useState("");

  const back = () => {
    navigate("/projact-commath");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="บทที่ 6"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="ค่า A"
                onChange={(e) => seta(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="ค่า B"
                onChange={(e) => setb(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                label="ค่าใกล้เคียง"
                onChange={(e) => setdx(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
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
                value={result === "" ? "" : result}
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
