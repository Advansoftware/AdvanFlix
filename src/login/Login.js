import {
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
const myStyle = {
    backgroundImage: "url(./perspective.jpg)",
    opacity: .5,
    left: 0,
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
                <Card sx={{ backgroundColor: 'rgba(0,0,0,.9)' }}>
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
                                <LoadingButton
                                    loading={false}
                                    color="primary"
                                    variant="contained"
                                    disableElevation
                                    size="large"
                                    fullWidth
                                >
                                    Entrar
                                </LoadingButton>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider textAlign='center' flexItem>
                                    OU
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <LoadingButton
                                    loading={false}
                                    color="info"
                                    variant="contained"
                                    disableElevation
                                    size="large"
                                    fullWidth
                                >
                                    Entrar como convidado
                                </LoadingButton >
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}
export default Login;