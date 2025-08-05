'use client'

import dynamic from 'next/dynamic';
import React from 'react';

const FeatureWithRouter = dynamic(() => import('../../../feature'), {
  ssr: false,
});

export default function JourneyPage() {
  return <FeatureWithRouter basePath='/tsr-test' />;
}