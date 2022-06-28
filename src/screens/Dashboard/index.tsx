import React from 'react';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

export function Dashboard(){
  return (
    <S.Container>
      <S.Header />
      <Feather name="power" size={24} color="black" />
    </S.Container>
  );
}