import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const filePath = path.join(process.cwd(), 'src', 'mocks', 'mockData.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const novoItem = req.body;

  try {
    // Garante que a pasta existe
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Garante que o arquivo exista com conteúdo válido
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }

    // Lê o conteúdo atual
    const conteudo = fs.readFileSync(filePath, 'utf8');
    const dadosAtuais = conteudo.trim() === '' ? [] : JSON.parse(conteudo);

    if (!Array.isArray(dadosAtuais)) {
      throw new Error('O conteúdo de mockData.json não é um array.');
    }

    dadosAtuais.push(novoItem);

    fs.writeFileSync(filePath, JSON.stringify(dadosAtuais, null, 2));
    return res.status(200).json({ sucesso: true });
  } catch (err) {
    console.error("ERRO AO SALVAR:", err);
    return res.status(500).json({ erro: 'Erro ao salvar os dados.' });
  }
}
