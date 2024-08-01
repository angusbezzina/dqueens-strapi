# D'Queens Backend

This is the repo for the CMS that powers D'Queens website. It is built with Strapi and Postgres, with the CMS hosted on Heroku and the Database powered by Neon.

### Setup

To install the dependencies for this project, run the command `npm i`

**NOTE:** Please bare in mind that you'll need to install Node version 18.

In addition, to set this up locally you'll also need to setup a postgres DB locally. To do this:

1. Download Postgres via Homebrew with the command `brew install postgres`. **NOTE:** I also recommend downloading the latest version of the Postgres app for MacOS.
2. In the terminal, run the command `psql` or `postgres`.
3. Once logged into Postgres, run the command `CREATE_DATABASE alexanderrun` to create the DB.

### Develop

To run the Strapi CMS in development:

- With autoReload **enabled**, run the command `npm run dev`
- With autoReload **disabled**, run the command `npm run start`

Once the CMS process is running, go to `http://localhost:1337/admin` to access the admin.

#### Media

This repo uses an AWS S3 bucket to manage media. For an in-depth understanding of how it is configured, take a look at the walkthrough in the Strapi blog [here](https://strapi.io/blog/how-to-set-up-amazon-s3-upload-provider-plugin-for-our-strapi-app).

### Build

To build the admin panel, run the command `npm run build`.

## Deploy

Deployment is automated when commits are made to the main branch via an integration with Heroku, but this can also be triggered manually via the Heroku admin.
