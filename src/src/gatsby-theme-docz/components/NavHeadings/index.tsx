import React from 'react';

import {
  Container,
  Heading,
  icon,
  Sticky,
  Toc
} from '@nejcm/docz-theme-extended/src/gatsby-theme-docz/components/NavHeadings/custom-styles';
import { useConfig, useCurrentDoc } from 'docz';
import Scrollspy from 'react-scrollspy';

const NavHeadings = () => {
  const {
    themeConfig: { menu: { headings: { rightSide = false, depth = 3, scrollspy = true } = {} } = {} }
  } = useConfig();
  const currentDoc = useCurrentDoc();
  const headings = currentDoc.headings;

  if (!rightSide) {
    return null;
  }

  const ui = headings.map((heading, i) => {
    if (heading.depth > depth) return null;
    return (
      <li key={i} className='nav-link'>
        <a href={`#${heading.slug}`} className={`${heading.depth > 2 ? 'inner' : ''}`}>
          {heading.value}
        </a>
      </li>
    );
  });

  return (
    <Container>
      <Sticky className='nav-headings'>
        <Toc>
          <div>
            <Heading>{icon} Conteúdos</Heading>
            {scrollspy ? (
              <Scrollspy items={headings.map(heading => heading.slug)} currentClassName='current'>
                {ui}
              </Scrollspy>
            ) : (
              <ul>{ui}</ul>
            )}
          </div>
        </Toc>
      </Sticky>
    </Container>
  );
};

NavHeadings.propTypes = {};

export default NavHeadings;
