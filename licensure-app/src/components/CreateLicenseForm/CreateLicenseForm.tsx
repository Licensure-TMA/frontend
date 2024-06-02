import { ChangeEventHandler, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { ActionKind } from './types';
import { Button, Stack, TextField } from '@mui/material';
import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { LicenseCreate } from '../../../wrappers/Main';
import { Address, toNano } from 'ton-core';

// 'contentDescription' |
// 'contentUrls' |
// 'licenseType' |
// 'contentCategory' |
// 'contentSubcategory' |
// 'price' |
// 'allRestrictions' |
// 'additionalTerms';

export const CreateLicenseForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { connected, sender, wallet } = useTonConnect();
  const { mainContract } = useContract();

  const changeName: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_NAME, payload: event.target.value });
  };

  const changeDescription: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_DESCRIPTION, payload: event.target.value });
  };

  const changeUrls: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_URLS, payload: event.target.value });
  };

  const changeType: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_TYPE, payload: event.target.value });
  };

  const changeCategory: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_CATEGORY, payload: event.target.value });
  };

  const changeSubcategory: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_SUBCATEGORY, payload: event.target.value });
  };

  const changePrice: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_PRICE, payload: Number(event.target.value) });
  };

  const changeRestrictions: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_RESTRICTIONS, payload: event.target.value });
  };

  const changeAdditionalTerms: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_ADDITIONAL_TERMS, payload: event.target.value });
  };

  const createLicense = async () => {
    if (connected && mainContract && wallet) {
      const message: LicenseCreate = {
        ...state,
        sellerAddress: Address.parse(wallet),
        price: BigInt(state.price!),
      };
  
      await mainContract.send(sender, {
        value: toNano('0.05')
      }, message);

    }
  };

  return (
    <Stack spacing={4} padding={4}>
      <TextField label="Content Name" value={state.contentName} onChange={changeName} />
      <TextField label="Content Description" value={state.contentDescription} onChange={changeDescription} />
      <TextField label="Content Urls" value={state.contentUrls} onChange={changeUrls} />
      <TextField label="License Type" value={state.licenseType} onChange={changeType} />
      <TextField label="Content Category" value={state.contentCategory} onChange={changeCategory} />
      <TextField label="Content Subcategory" value={state.contentSubcategory} onChange={changeSubcategory} />
      <TextField label="Price" type="number" value={state.price ? Number(state.price) : ''} onChange={changePrice} />
      <TextField label="All Restrictions" value={state.allRestrictions} onChange={changeRestrictions} />
      <TextField label="Additional Terms" value={state.additionalTerms} onChange={changeAdditionalTerms} />
      <Button variant="contained" size="large" onClick={createLicense}>Create</Button>
    </Stack>
  );
};