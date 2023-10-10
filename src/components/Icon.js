import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Icon({ name, size, color }) {
  return <Ionicons name={name} size={size} color={color} />;
}
