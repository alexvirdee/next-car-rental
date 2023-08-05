'use client'
import React from 'react'
import { Form, Button } from 'antd'
import Link from 'next/link'

function Register() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-450 card p-5">
        <Form
          layout="vertical"
        >
          <h1 className="text-xl">RideRoster - Register</h1>

          <div className="divider"></div>

         <div className="flex flex-col gap-5">
         <Form.Item label="Name" name="name">
            <input type="text" />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <input type="password" />
          </Form.Item>

          <Button type="primary">Register</Button>

          <Link href="/login">Already have an account? Login</Link>
         </div>
        </Form>
      </div>
    </div>
  )
}

export default Register