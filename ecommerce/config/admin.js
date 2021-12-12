module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8684afb8d65840d4784ac5c916663cab'),
  },
});
