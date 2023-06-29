import Banner from './banner/Banner';
import CollectionFeaturedNfts from './collection-featured-nfts/CollectionFeaturedNfts';
import CreateSell from './create-sell/CreateSell';
import DiscoverMore from './discover-more/DiscoverMore';
import Features from './features/Features';
import React from 'react';
import TopCollections from './top-collections/TopCollections';

// section components

export default function Index() {
  return (
    <>
      <Banner />
      <Features />
      <TopCollections />
      <CollectionFeaturedNfts />
      <CreateSell />
      <DiscoverMore />
    </>
  );
}
