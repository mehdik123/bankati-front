export interface Transaction {
  id?: number;
  creditorName: string;
  type: 'facture' | 'recharge';
  amount?: number;
  factureId?: string;
  date: string;
}
