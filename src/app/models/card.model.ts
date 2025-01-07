export interface Card {
    id?: number;
    numeroCarte?: string;
    expiration?: string;
    plafond?: number;
    statut?: string; // ACTIVE, BLOQUEE, etc.
    utilisateurId?: number;
}
