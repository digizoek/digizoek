export interface Service {
  id: string;
  title: string;
  heading: string;
  description: string;
  mobileDesc: string;
  buttonLabels: string[];
  subCategories: string[];
  icon: string; // String or path to the icon
  imagePath: string;
  pageTitle: string;
}