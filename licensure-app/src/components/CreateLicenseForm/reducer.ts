import { Action, ActionKind, State } from './types';

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
  case ActionKind.SET_NAME: {
    return {
      ...state,
      contentName: action.payload,
    };
  }
  case ActionKind.SET_DESCRIPTION: {
    return {
      ...state,
      contentDescription: action.payload,
    };
  }
  case ActionKind.SET_URLS: {
    return {
      ...state,
      contentUrls: action.payload,
    };
  }
  case ActionKind.SET_TYPE: {
    return {
      ...state,
      licenseType: action.payload,
    };
  }
  case ActionKind.SET_CATEGORY: {
    return {
      ...state,
      contentCategory: action.payload,
    };
  }
  case ActionKind.SET_SUBCATEGORY: {
    return {
      ...state,
      contentSubcategory: action.payload,
    };
  }
  case ActionKind.SET_PRICE: {
    return {
      ...state,
      price: action.payload,
    };
  }
  case ActionKind.SET_RESTRICTIONS: {
    return {
      ...state,
      allRestrictions: action.payload,
    };
  }
  case ActionKind.SET_ADDITIONAL_TERMS: {
    return {
      ...state,
      additionalTerms: action.payload,
    };
  }
  default:
    return state;
  }
};