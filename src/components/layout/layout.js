import HeaderBlock1 from './header-block-1';
import FooterBlock1 from './footer-block-1';

     

     const Layout = props => {
        const { children } = props;
        return (
          <>
          <HeaderBlock1 />
            <main>
              { children }
            </main>
          <FooterBlock1 />
          </>
          );
        };

      export default Layout;
     