/// <reference types="node" />
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import isURL from 'validator/lib/isURL'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Obter a URL da imagem externa da query string
  const url = req.query.url as string

  // Validar a URL
  if (!url || !isURL(url)) {
    res.status(400).send('URL da imagem é inválida')
    return
  }

  // Obter a imagem da URL externa usando fetch
  const response = await fetch(url)

  // Verificar se a resposta é válida
  if (!response.ok) {
    res.status(response.status).send('Erro ao obter a imagem')
    return
  }

  // Obter o tipo de conteúdo da imagem
  const contentType = response.headers.get('content-type')!

  // Definir o cabeçalho Cache-Control na resposta
  res.setHeader('Cache-Control', 'public, max-age=3600')

  // Definir o tipo de conteúdo na resposta
  res.setHeader('Content-Type', contentType)

  // Enviar a imagem na resposta
  res.send(await response.buffer())
}
