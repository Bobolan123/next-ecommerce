import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { IRESCOMPANY } from "@/components/_home/type";
import { ICompany } from "@/interfaces/company.interface";

export default async function CompanyId(props: any) {
    const { params } = props;
    const fetchCompany = await fetch(
        `${process.env.API}/company/${params.id}`,
        {
            method: "GET",
        }
    );
    let company = await fetchCompany.json();
    company = company.data;
    return (
        <>
            <Grid container component="main" rowGap={3} spacing={2}>
                <Grid item xs={12} sm={9} md={9}>
                    <Typography component="h1" variant="h3">
                        {company.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        <CiLocationOn className="inline mr-1" />
                        {company.location}
                    </Typography>
                    <hr className="mb-10" />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: company.description,
                        }}
                    />
                </Grid>
                <Grid item sm={3} md={3}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 140,
                            height: 140,
                            display: { xs: "none", sm: "block" },
                            borderRadius: 100,
                        }}
                        className="mx-auto mb-3"
                        image={`/logos/${company.filename}`}
                    />

                    <Typography
                        component="h2"
                        variant="h5"
                        align="center"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        {company.name}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
