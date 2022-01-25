import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
  
const CustomHeaderWebView = (props:any) => {
    const { uri, onLoadStart, ...restProps } = props;
    const [currentURI, setURI] = useState(props.source.uri);
    const newSource = { ...props.source, uri: currentURI };

    return (
        <WebView
            {...restProps}
            source={newSource}
            onShouldStartLoadWithRequest={(request) => {
                // If we're loading the current URI, allow it to load
                if (request.url === currentURI) return true;
                // We're loading a new URL -- change state first
                setURI(request.url);
                return false;
            }}
            incognito={false}
            sharedCookiesEnabled={true}
        />
    );
};

export default CustomHeaderWebView;