import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const filePath = path.join(process.cwd(), 'src', 'mocks', 'mockData.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ erro: 'Método não permitido. Acessível apenas com GET' });
  }

  try {
    // Garante que a pasta existe
    const dir = path.dirname(filePath);

    // Lê o conteúdo atual
    const conteudo = fs.readFileSync(filePath, 'utf8');
    const dadosAtuais = conteudo.trim() === '' ? [] : JSON.parse(conteudo);

    return res.status(200).json(dadosAtuais);
  } catch (err) {
    console.error("ERRO AO SALVAR:", err);
    return res.status(500).json({ erro: 'Erro ao salvar os dados.' });
  }
}
