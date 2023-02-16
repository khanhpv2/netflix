import React from 'react'
import BrowseContainer from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'

export default function Browse() {
  
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });
  // console.log('films',films)
  return <BrowseContainer slides={slides} />;
}
