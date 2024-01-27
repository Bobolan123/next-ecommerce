import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  Pagination,
  Stack
} from "@mui/material";

export default function Company() {
  const cards = [1, 2, 3, 4];

  return (
    <div>
      <Typography className="mb-3" variant="h4">
        Top company
      </Typography>
      <Grid container spacing={4} justifyContent="center" className="mb-9">
        {cards.map((card) => (
          <Grid item key={card} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Link href="/" style={{ textDecoration: 'none', color:"black" }}>
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                    height:200,
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center">
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
}
