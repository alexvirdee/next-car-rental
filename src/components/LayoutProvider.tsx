'use client'
import { ConfigProvider } from "antd";
import React from 'react'

function LayoutProvider({ children }: any) {
    return (
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
    )
}

export default LayoutProvider