import { LicenseCreate } from 'wrappers/Main';

export enum ActionKind {
  SET_NAME = 'SET_NAME',
  SET_DESCRIPTION = 'SET_DESCRIPTION',
  SET_URLS = 'SET_URLS',
  SET_TYPE = 'SET_TYPE',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_SUBCATEGORY = 'SET_SUBCATEGORY',
  SET_RESTRICTIONS = 'SET_RESTRICTIONS',
  SET_ADDITIONAL_TERMS = 'SET_ADDITIONAL_TERMS',
  SET_PRICE = 'SET_PRICE',
}

export type Action = { 
  type: ActionKind.SET_NAME | ActionKind.SET_DESCRIPTION | ActionKind.SET_URLS | ActionKind.SET_TYPE | ActionKind.SET_CATEGORY |
    ActionKind.SET_SUBCATEGORY | ActionKind.SET_RESTRICTIONS | ActionKind.SET_ADDITIONAL_TERMS
  payload: string
} | {
  type: ActionKind.SET_PRICE
  payload: number | string
}

export type State = Pick<LicenseCreate,
  '$$type' |
  'contentName' |
  'contentDescription' |
  'contentUrls' |
  'licenseType' |
  'contentCategory' |
  'contentSubcategory' |
  'allRestrictions' |
  'additionalTerms'
> & {
  price: number | string;
}