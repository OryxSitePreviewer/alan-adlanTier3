export type Language = 'bm' | 'en';

export interface ServiceItem {
  id: string;
  titleBM: string;
  titleEN: string;
  iconName: string;
  descriptionBM: string;
  descriptionEN: string;
  estPriceBM: string;
  estPriceEN: string;
  category: 'ortho' | 'aesthetic' | 'restorative' | 'surgery' | 'general';
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  avatarInitial: string;
  rating: number;
  treatmentBM: string;
  treatmentEN: string;
  textBM: string;
  textEN: string;
  date: string;
  verified: boolean;
  category?: 'braces' | 'surgery' | 'scaling' | 'general' | 'implant';
}

export interface FAQItem {
  id: string;
  questionBM: string;
  questionEN: string;
  answerBM: string;
  answerEN: string;
  category: 'general' | 'braces' | 'payment' | 'treatments';
}

export interface PriceCalculatorItem {
  id: string;
  nameBM: string;
  nameEN: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  monthlyInstallmentBM?: string;
  monthlyInstallmentEN?: string;
  descriptionBM: string;
  descriptionEN: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  treatmentId: string;
  branch: string;
  notes: string;
  patientType: 'new' | 'existing';
}
