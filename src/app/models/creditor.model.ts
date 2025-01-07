export interface Creditor {
  id: number;
  name: string;
  type: 'facture' | 'recharge';
  category: string;
  logoUrl: string;
  factures?: string[];
  recharges?: string[];

}
