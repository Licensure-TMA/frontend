import { ChangeEventHandler, useReducer, useState } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { ActionKind } from './types';
import { Button, FormControl, InputLabel, MenuItem, Stack, TextField } from '@mui/material';
import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { LicenseCreate } from 'wrappers/Main';
import { Address, toNano } from 'ton-core';
import { IntegerInput } from 'components/IntegerInput/IntegerInput';
import { UrlInput } from 'components/UrlInput/UrlInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { TitleInput } from 'components/TitleInput/TitleInput';
import { DescriptionInput } from 'components/DescriptionInput/DescriptionInput';
import { SubCategorySelect } from 'components/SubCategorySelect/SubCategorySelect';

export const CreateLicenseForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isError, setIsError] = useState(false);
  const { connected, sender, wallet } = useTonConnect();
  const { mainContract } = useContract();
  const navigate = useNavigate();

  const isRequiredFilled = state.contentName && state.contentDescription && state.price && state.contentUrls && state.licenseType && state.contentCategory;

  const changeName: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_NAME, payload: event.target.value });
  };

  const changeDescription: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_DESCRIPTION, payload: event.target.value });
  };

  const changeUrls: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: ActionKind.SET_URLS, payload: event.target.value });
  };

  const changeType = (event: SelectChangeEvent) => {
    dispatch({ type: ActionKind.SET_TYPE, payload: event.target.value });
  };

  const changeCategory = (event: SelectChangeEvent) => {
    dispatch({ type: ActionKind.SET_CATEGORY, payload: event.target.value });
  };

  const changeSubcategory = (event: SelectChangeEvent) => {
    dispatch({ type: ActionKind.SET_SUBCATEGORY, payload: event.target.value });
  };

  const changePrice: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const numberValue = parseFloat(event.target.value);
    dispatch({ type: ActionKind.SET_PRICE, payload: Number.isNaN(numberValue) ? '' : numberValue });
  };

  // const changeRestrictions: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
  //   dispatch({ type: ActionKind.SET_RESTRICTIONS, payload: event.target.value });
  // };

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

      navigate('/profile');
    }
  };

  return (
    <Stack spacing={4} padding={4}>
      <TitleInput value={state.contentName} onChange={changeName} setIsError={setIsError} />
      <DescriptionInput value={state.contentDescription} onChange={changeDescription} setIsError={setIsError}/>
      <UrlInput label="Content Url" value={state.contentUrls} onChange={changeUrls} setIsError={setIsError} />
      <FormControl fullWidth>
        <InputLabel id="license-type-select-label" required>License Type</InputLabel>
        <Select
          labelId="license-type-select-label"
          id="license-type-select"
          value={state.licenseType}
          label="License Type"
          onChange={changeType}
        >
          <MenuItem value={'exclusiveLicense'}>Exclusive license</MenuItem>
          <MenuItem value={'nonExclusiveLicense'}>Non-exclusive license</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="content-category-select-label" required>Content Category</InputLabel>
        <Select
          labelId="content-category-select-label"
          id="content-category-select"
          value={state.contentCategory}
          label="Content Category"
          onChange={changeCategory}
          required
        >
          <MenuItem value={'video'}>Video</MenuItem>
          <MenuItem value={'music'}>Music</MenuItem>
          <MenuItem value={'art'}>Art</MenuItem>
        </Select>
      </FormControl>
      <SubCategorySelect value={state.contentSubcategory} category={state.contentCategory} onChange={changeSubcategory} />
      <IntegerInput label="Price" value={state.price} onChange={changePrice} setIsError={setIsError} />
      {/* <TextField label="All Restrictions" value={state.allRestrictions} onChange={changeRestrictions} /> */}
      <TextField label="Additional Terms" value={state.additionalTerms} onChange={changeAdditionalTerms} />
      <Button variant="contained" size="large" disabled={isError || !isRequiredFilled} onClick={createLicense}>Create</Button>
    </Stack>
  );
};