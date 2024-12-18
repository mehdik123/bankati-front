export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:8081',
    realm: 'bankati',
    clientId: 'bankati-client'
  },
  backend: {
    adminUrl: 'http://localhost:8085/api/admin',
    clientUrl: 'http://localhost:8085/api/client'
  }
};
