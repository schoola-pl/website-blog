import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { PageTemplate } from 'components/templates/PageTemplate/PageTemplate';
import GlobalStyle from 'assets/styles/GlobalStyle';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <PageTemplate>{children}</PageTemplate>
    </ThemeProvider>
  </>
);

export default MainTemplate;
