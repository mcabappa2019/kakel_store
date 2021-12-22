import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DrawerTemplate = (props) => {
  const { isOpen, onRequestClose } = props;

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      onRequestClose();
    };
    router.events.on('routeChangeStart', handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return ReactDom.createPortal(
    <>
      <div className={isOpen ? ' shadow ModalMenu Show' : ' ModalMenu'}>
        <div className="header_menu no-gutters">
          {/* <Link href="/" passHref={true}>
            <a className="modalLogo">{wooConfig.SITE_TITLE}</a>
          </Link> */}
          <span className="open_close_btn" onClick={onRequestClose}>
            <i className="ti-close"></i>
          </span>
          <span className="title flex-grow-1">MENU</span>
        </div>
        <div className="modalContent">{props.children}</div>
      </div>
      <div
        className={`layer ${isOpen ? 'layer-is-visible' : ''}`}
        onClick={onRequestClose}
      ></div>
    </>,
    document.getElementById('portal')
  );
};

export default React.memo(DrawerTemplate);
