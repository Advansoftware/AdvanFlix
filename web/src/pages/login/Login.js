import {
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
const myStyle = {
  backgroundImage: "url('http://localhost:8096')",
  opacity: 0.5,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  zIndex: 0,
};
const Login = () => {
  const navigate = useNavigate();
  const { setUser, setPassword, login, loading, token } = useAuth();
  useEffect(() => {
    console.log(token);
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <>
      <div style={myStyle}> </div>
      <Container maxWidth="xs" sx={{ mt: 13 }} style={{ zIndex: 2 }}>
        <Card sx={{ backgroundColor: "rgba(0,0,0,.9)" }}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Entrar
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Usuario"
                  variant="filled"
                  fullWidth
                  color="primary"
                  onChange={(e) => setUser(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Senha"
                  variant="filled"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  loading={loading}
                  color="primary"
                  variant="contained"
                  disableElevation
                  size="large"
                  fullWidth
                  onClick={login}
                >
                  Entrar
                </LoadingButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
export default Login;
