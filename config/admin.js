module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '421c7266f9896c681dd5413ed2410ba3'),
  },
});
