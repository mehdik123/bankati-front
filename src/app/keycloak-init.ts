import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
    return () => {
        // Check if the code is running in the browser
        if (typeof window !== 'undefined') {
            return keycloak.init({
                config: {
                    url: 'http://localhost:8081', // Keycloak server URL
                    realm: 'bankati',             // Realm name
                    clientId: 'bankati-client',   // Client ID
                },
                initOptions: {
                    onLoad: 'login-required',
                    checkLoginIframe: false,
                },
            });
        }
        return Promise.resolve(); // Skip Keycloak initialization for SSR
    };
}
