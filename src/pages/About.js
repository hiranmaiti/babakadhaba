import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <h4>BABA KA DHABA</h4>
        <p>
          Since our modest beginnings in 2005 with a little space in Toronto’s
          stylish Yorkville locale, ‘Organization Name’ ‘s development has been
          enlivened with the energy to cook and serve solid, Indian-roused
          takeout food. In contrast to other Indian eateries, ‘Organization
          Name’ was made with the explicit expectation to appear as something
          else. We realize numerous individuals love Indian sustenance, yet a
          large number of them loathe or are unconscious of the regularly
          unfortunate fixings that make run-of-the-mill Indian nourishment taste
          so great. Our menu highlights things that utilize the sound and
          fragrant flavors, however, forget the stuffing ghee, spread, oil, and
          overwhelming cream. ‘Organization Name’ has developed to incorporate
          four superb takeout areas in Toronto, with additional to come sooner
          rather than later. Our group takes pride in the way that we can
          furnish our new and faithful clients with extraordinary tasting
          Indian-roused nourishment that is not normal for that some other
          Indian eateries you visit. We perceive that a few people are as yet
          searching for run-of-the-mill Indian nourishment, and that is fine
          with us. Our disclaimer is that on the off chance that you’re
          anticipating overwhelming, slick, undesirable Indian nourishment,
          ‘Organization Name’ isn’t the place for you.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
