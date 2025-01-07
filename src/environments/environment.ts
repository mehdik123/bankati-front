export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:8081',
    realm: 'bankati',
    clientId: 'bankati-client'
  },
  backend: {
    adminUrl: 'http://localhost:8085/api/admin',
    clientUrl: 'http://localhost:8085/api/client',
    cardBaseUrl: 'http://localhost:8081/cartes', // Base URL for card operations
    walletBaseUrl: 'http://localhost:8080/api/wallets', // Base URL for wallet operations
  }
};
