module.exports = {
  siteMetadata: {
    title: "Graham Plata's Digital Sandbox",
    author: "Graham Plata",
    siteName: "grahamplata.com",
    bio: "A skill collector",
    siteUrl: "https://grahamplata.com/",
    github: "https://github.com/grahamplata",
    twitter: "https://twitter.com/grahamplata",
    linkedin: "https://www.linkedin.com/in/grahamplata",
    homeCity: "Philadelphia",
    description: "Graham Plata's Digital Sandbox"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-11254643-2",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet"
  ]
};
