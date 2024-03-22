import avatar01 from '@/images/faqSection/avatar-01.jpg';
import avatar02 from '@/images/faqSection/avatar-02.jpg';
import avatar03 from '@/images/faqSection/avatar-03.jpg';
import avatar04 from '@/images/faqSection/avatar-04.jpg';
import { FaqSectionCards } from '@/types/types';

const faqSectionCards: FaqSectionCards = [
  {
    title: 'WHAT IS AN NFT COLLECTION?',
    description:
      'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
    avatar: avatar01,
  },
  {
    title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
    description:
      'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
    avatar: avatar02,
  },
  {
    title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
    description:
      'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
    avatar: avatar03,
  },
  {
    title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
    description:
      "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    avatar: avatar04,
  },
];

export default faqSectionCards;
