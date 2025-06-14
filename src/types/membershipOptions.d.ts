export interface MembershipOptions {
  type: string;
  price: string;
  period?: string;
  benefits?: { icon: string; text: string }[];
}
