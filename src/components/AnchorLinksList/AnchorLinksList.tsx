import { FC } from 'react';
import { Link, List, ListItem } from './AnchorLinksList.styled';
import { IProps } from './AnchorLinksList.types';

const AnchorLinksList: FC<IProps> = ({
  anchorLinks,
  scrollingOccurred,
  onAnchorLinkClick,
}) => (
  <List>
    {anchorLinks.map(({ id, title }) => (
      <ListItem key={id}>
        <Link
          href={`#${id}`}
          scrollingOccurred={scrollingOccurred}
          onClick={onAnchorLinkClick}
        >
          {title}
        </Link>
      </ListItem>
    ))}
  </List>
);

export default AnchorLinksList;
