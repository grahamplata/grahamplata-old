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
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/`,
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
              maxWidth: 590
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Graham Plata",
        short_name: "SWang",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "static/logo.png"
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
