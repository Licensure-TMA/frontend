import { State } from './types';

export const initialState: State = {
  $$type: 'LicenseCreate',
  contentName: '',
  contentDescription: '',
  contentUrls: '',
  licenseType: '',
  contentCategory: '',
  contentSubcategory: '',
  price: '',
  allRestrictions: '',
  additionalTerms: '',
};