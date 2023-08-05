'use client'
import React, { createContext, useContext } from 'react'
import { ConfigProvider } from "antd";

const AntdThemeContext = createContext({});

export const useAntdTheme = () => {
    return useContext(AntdThemeContext)
}

function LayoutProvider({ children, value }: any) {
    return (
        <AntdThemeContext.Provider value={value}>
            <html lang="en">
                <body>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#000',
                            },
                        }}
                    >
                        {children}
                    </ConfigProvider>
                </body>
            </html>
        </AntdThemeContext.Provider>
    )
}

export default LayoutProvider