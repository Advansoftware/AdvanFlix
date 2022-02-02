import { Button, Card, CardContent, Container, Divider, Grid, TextField, Typography } from "@mui/material";
const myStyle={
    backgroundImage: "url(./perspective.jpg)",
    left:0,
    right: 0, 
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    zIndex: 0,
};
const Login = () => {
    return (
        <>
            <div style={myStyle}> </div>
            <Container maxWidth='xs' sx={{ mt: 7 }} style={{ zIndex: 2 }}>
                <Card sx={{backgroundColor: 'rgba(0,0,0,.9)'}}>
                    <CardContent>
                        <Typography variant='h4' sx={{ mb: 2 }} >
                            Entrar
                        </Typography>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid item xs={12}>
                                <TextField label="Email" variant="filled" fullWidth color="primary" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Senha" variant="filled" type="password" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="primary" variant="contained" disableElevation size="large" fullWidth>Entrar</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider textAlign='center' flexItem>
                                    ou
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="info" variant="contained" disableElevation size="large" fullWidth>
                                    Entrar como convidado
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
export default Login;