// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {translate} from 'react-i18next'

import Button from '../../commons/components/atoms/Button.react.js'

interface Props {
  t: any;
  loadVienna: () => void;
  loadNewYork: () => void;
  loadViennaAndNewYork: () => void;
  loadInvalidLocation: () => void;
  clear: () => void;
}

const Buttons = ({loadVienna, loadNewYork, loadViennaAndNewYork, loadInvalidLocation, clear, t}: Props) => (
  <Box mb={2}>
    <Button onClick={loadVienna}>{t('Vienna')}</Button>
    <Button onClick={loadNewYork}>New York</Button>
    <Button onClick={loadViennaAndNewYork}>{t('Vienna')} {t('and')} {t('New York')}</Button>
    <Button onClick={loadInvalidLocation}>{t('Invalid Location')}</Button>
    <Button onClick={clear}>{t('Clear')}</Button>
  </Box>
)

export default translate('translations')(Buttons)
