'use client'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CityInput() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={vietnamCities}
      sx={{ width: 300 }}
      size="small"  
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  );
}

// List of cities in Vietnam
const vietnamCities = [
  { label: 'Ho Chi Minh City' },
  { label: 'Hanoi' },
  { label: 'Da Nang' },
  { label: 'Hai Phong' },
  { label: 'Can Tho' },
  { label: 'Nha Trang' },
  { label: 'Hue' },
  { label: 'Bien Hoa' },
  { label: 'Vung Tau' },
  { label: 'Buon Ma Thuot' },
  { label: 'Nam Dinh' },
  { label: 'Quy Nhon' },
  { label: 'Long Xuyen' },
  { label: 'Thai Nguyen' },
  { label: 'Thanh Hoa' },
  { label: 'Vinh' },
  { label: 'Rach Gia' },
  { label: 'Phan Thiet' },
  { label: 'Cam Ranh' },
  { label: 'Ca Mau' },
  { label: 'Bac Lieu' },
  { label: 'Vinh Long' },
  { label: 'Bac Giang' },
  { label: 'Ha Long' },
  { label: 'Hoa Binh' },
  { label: 'Kon Tum' },
  { label: 'Lai Chau' },
  { label: 'Lang Son' },
  { label: 'Lao Cai' },
  { label: 'Mong Cai' },
  { label: 'My Tho' },
  { label: 'Phu Quoc' },
  { label: 'Pleiku' },
  { label: 'Quang Ngai' },
  { label: 'Sa Dec' },
  { label: 'Son La' },
  { label: 'Tam Ky' },
  { label: 'Tan An' },
  { label: 'Tay Ninh' },
  { label: 'Thai Binh' },
  { label: 'Tuy Hoa' },
  { label: 'Uong Bi' },
  { label: 'Viet Tri' },
  { label: 'Yen Bai' },
];

