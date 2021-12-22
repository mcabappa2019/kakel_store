import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const DrawerTemplate = dynamic(() => import('./DrawerTemplate'), {
  ssr: false,
});

const MainMenuDrawer = ({ openDrawer, requestToClose }) => {
  return (
    <DrawerTemplate
      isOpen={openDrawer}
      onRequestClose={() => {
        requestToClose(false);
      }}
    >
      <ul>
        <li>
          <Link href="/" passHref={true}>
            <a>försändelse spårning</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>kontakta oss</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>vanliga frågor</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>villkor & frakt</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>om oss</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>integritetspolicy</a>
          </Link>
        </li>
      </ul>
    </DrawerTemplate>
  );
};

export default React.memo(MainMenuDrawer);
