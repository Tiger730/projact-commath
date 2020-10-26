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
import { getElimination } from "../../functions";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  card: {
    marginLeft: theme.spacing(35),
    marginRight: theme.spacing(35),
    marginTop: theme.spacing(10),
  },
  grid:{
    marginTop: theme.spacing(1),
  },
  typho:{
    marginTop: theme.spacing(2),
  }
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [a00, seta00] = useState(6);
  const [a01, seta01] = useState(-4);
  const [a02, seta02] = useState(1);
  const [a10, seta10] = useState(-4);
  const [a11, seta11] = useState(6);
  const [a12, seta12] = useState(-4);
  const [a20, seta20] = useState(1);
  const [a21, seta21] = useState(-4);
  const [a22, seta22] = useState(6);

  const [b1, setb1] = useState(-14);
  const [b2, setb2] = useState(36);
  const [b3, setb3] = useState(6);

  const [x0, setx0] = useState("");
  const [x1, setx1] = useState("");
  const [x2, setx2] = useState("");

  const back = () => {
    navigate("/projact-commath");
  };

  const generate = () => {
    const data = {
      A: [
        [a00, a01, a02],
        [a10, a11, a12],
        [a20, a21, a22],
      ],
      b: [b1, b2, b3],
    };
    getElimination(data).then((res) => {
      setx0(res[0]);
      setx1(res[1]);
      setx2(res[2]);
    console.log(res)
    });
  };
  return (
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="บทที่ 2"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} >
                <Typography>อะเรย์ A = 3x3</Typography>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta00(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta01(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta02(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta10(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta11(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta12(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta20(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta21(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => seta22(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} >
            <Typography>อะเรย์ B</Typography>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => setb1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => setb2(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => setb3(e.target.value)}
                  />
                </Grid>
              </Grid>
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
            <Grid item xs={12} >
                <Divider></Divider>

                <Typography className={classes.typho}
                >ผลลัพธ์</Typography>
            <Grid className={classes.grid} container spacing={3} alignItems="flex-end">
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                  id="outlined-read-only-input"
                  label="x0"
                    value={x0===""?"":x0}
                  InputProps={{
                    readOnly: true,
                  }}
                  
                />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                <TextField
                  id="outlined-read-only-input"
                  label="x1"
                    value={x1===""?"":x1}
                  InputProps={{
                    readOnly: true,
                  }}
                  
                />
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                <TextField
                  id="outlined-read-only-input"
                  label="x2"
                    value={x2===""?"":x2}
                  InputProps={{
                    readOnly: true,
                  }}
                  
                />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={5} alignItems="flex-end">
           
            <Grid item xs={12} >
              <Button
                onClick={back}
                variant="outlined"
                color="secondary"
              >
                กลับ
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Typography>
  );
}
