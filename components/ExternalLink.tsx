import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';

type ExternalLinkProps = React.ComponentProps<typeof Link> & {
  href: string;
};

export function ExternalLink({ href, ...props }: ExternalLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      target="_blank"
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          e.preventDefault(); // Impede abrir no navegador padrão
          WebBrowser.openBrowserAsync(href);
        }
      }}
    />
  );
}

