import { Button, Form, Input, Select } from 'antd'

import styles from './styles.module.css'
import { useEffect, useState } from 'react'

interface Values {
  Nome: string
  Selecione: string
  Telefone: string
}

export function Formulario() {
  const [form] = Form.useForm()

  const handleSubmit = (values: Values) => {
    localStorage.setItem("contatos", JSON.stringify(values))
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }


  return (
    <div className='container'>
      <Form
        {...layout}
        form={form}
        name='control-hooks'
        onFinish={async (values) => {
            const res = await fetch('api/salvarContato', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            })

            if (res.ok) {
              console.log('Dados salvos com sucesso!')
            } else {
              console.error('Erro ao salvar os dados')
            }
          }
        }
        className={styles.form}
      >
        {/* Area dos inputs */}
        <Form.Item
          name="Nome"
          label="Nome"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Telefone"
          label="Telefone"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Categoria"
          label="Categoria"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Categoria"
            allowClear
          >
            <Select.Option value="Favoritos">Favoritos</Select.Option>
            <Select.Option value="Comum">Comum</Select.Option>
          </Select>
        </Form.Item>


        {/* Area do submit */}
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => alert("Form enviado")}
          >
            Salvar contato
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}