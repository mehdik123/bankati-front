// auth-app/src/environments/environment.prod.ts
export const environment = {
  production: true,
  keycloak: {
    url: 'http://localhost:8081',
    realm: 'bankati',
    clientId: 'bankati-client'
  },
  backendUrl: 'http://localhost:8085'
};
