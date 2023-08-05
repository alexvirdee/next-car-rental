'use client'
import React from 'react'
import { Form, Button } from 'antd'
import Link from 'next/link'
import { antdFieldValidation } from '@/helpers/validationHelpers'

function Login() {

  const onFinish = (values: any) => {
    console.log('values', values)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-450 card p-5">
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <h1 className="text-xl">RideRoster - Login</h1>

          <div className="divider"></div>

          <div className="flex flex-col gap-5">

            <Form.Item
              label="Email"
              name="email"
              rules={antdFieldValidation}
            >
              <input type="email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={antdFieldValidation}
            >
              <input type="password" />
            </Form.Item>

            <Button type="primary" block htmlType="submit">Login</Button>

            <Link href="/register">Don't have an account? Register</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login