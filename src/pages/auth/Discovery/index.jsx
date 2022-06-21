import React from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import BackButton from '../../../components/shared/BackButton';

export default function Discovery() {
  return (
    <main>
      <BackButton>
        <TbArrowBackUp />
      </BackButton>
      <h1>Descubra</h1>
    </main>
  );
}
