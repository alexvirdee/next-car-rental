'use client'
import React from 'react'
import { Form, Button, message } from 'antd'
import Link from 'next/link'
import { antdFieldValidation } from '@/helpers/validationHelpers'
import axios from 'axios'

function Register() {

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("/api/users/register", values);

      message.success(response.data.message) 
    } catch (error: any) {
      message.error(error.response.data.message || error.message)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-450 card p-5">
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <h1 className="text-xl">RideRoster - Register</h1>

          <div className="divider"></div>

          <div className="flex flex-col gap-5">
            <Form.Item
              label="Name"
              name="name"
              rules={antdFieldValidation}
            >
              <input type="text" />
            </Form.Item>

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

            <Button type="primary" block htmlType="submit">Register</Button>

            <Link href="/login">Already have an account? Login</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register