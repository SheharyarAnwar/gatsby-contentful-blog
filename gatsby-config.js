require("dotenv").config({
  path: `.env`,
});
const environment = process.env.NODE_ENV;
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Josefin Sans`,
              variants: [`400`, `700`],
            },
            {
              family: `Lora`,
              variants: [`400`, `500`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `iq8f125fi401`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
