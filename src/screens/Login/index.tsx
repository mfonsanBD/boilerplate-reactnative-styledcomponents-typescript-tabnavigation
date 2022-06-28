import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoLaPrima from '../../assets/img/logo.svg';

import * as S from './styles';

export function Login(){
  return (
    <S.Container>
      <S.Header />
      <LogoLaPrima width={RFValue(120)} height={RFValue(120)} />
    </S.Container>
  );
}