'use client'

import { Form } from '@/components/Form'
import { useAuthFetch } from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'


export default function LoginPage () {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const login = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'login',
      redirectRoute: '/panel/crear-noticia',
      formData
    })
    finishLoading()
  }

  return (
    <div className='container '>
      <Form
        title='Inicia Sesión'
        onSubmit={login}
        description='Formulario para iniciar sesión'
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label='Correo'
            name='email'
            placeholder='Ingresa tu correo...'
          />
          <Form.Input
            placeholder='Ingresa tu contraseña...'
            label='Contraseña'
            name='password'
            type='password'
          />
        </div>
        <Form.SubmitButton buttonText='Iniciar Sesión' isLoading={isLoading} />
        <Form.Footer
          description='Aun no tienes cuenta?'
          link='/panel/register'
          textLink='Registrate'
        />
      </Form>
    </ div>
  )
}