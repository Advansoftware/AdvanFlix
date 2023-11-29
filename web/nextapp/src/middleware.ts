export { default } from "next-auth/middleware"
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  // Obter o cookie de autenticação da requisição
  const authCookie = request.cookies['auth']

  // Verificar se o usuário está autenticado
  const isAuthenticated = authCookie && authCookie === 'some-secret-token'

  // Se o usuário não estiver autenticado, redirecionar para a página de login
  if (!isAuthenticated) {
    return NextResponse.redirect('/login')
  }

  // Se o usuário estiver autenticado, prosseguir com a requisição
  return NextResponse.next()
}

// Definir o matcher para filtrar as rotas que começam com dashboard
export const config = {
  matcher: '/dashboard/:path*'
}

